import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, Plus, Trash2, Edit2, Save, X, Image, Video, Calendar, FileText } from "lucide-react";

type GalleryItem = {
  id: string;
  category: string;
  type: string;
  title: string | null;
  url: string;
  thumbnail_url: string | null;
  sort_order: number | null;
  is_active: boolean | null;
};

type EventItem = {
  id: string;
  title: string;
  description: string | null;
  event_date: string | null;
  location: string | null;
  image_url: string | null;
  is_active: boolean | null;
};

type ContentItem = {
  id: string;
  section_key: string;
  title: string | null;
  subtitle: string | null;
  description: string | null;
  image_url: string | null;
};

const DashboardPage = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // New item forms
  const [newGallery, setNewGallery] = useState({ category: "", type: "image", title: "", url: "" });
  const [newEvent, setNewEvent] = useState({ title: "", description: "", event_date: "", location: "" });
  const [newContent, setNewContent] = useState({ section_key: "", title: "", subtitle: "", description: "" });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchAll();
    }
  }, [user, isAdmin]);

  const fetchAll = async () => {
    const [g, e, c] = await Promise.all([
      supabase.from("gallery_items").select("*").order("sort_order"),
      supabase.from("events").select("*").order("event_date", { ascending: false }),
      supabase.from("site_content").select("*").order("section_key"),
    ]);
    if (g.data) setGalleryItems(g.data);
    if (e.data) setEvents(e.data);
    if (c.data) setContentItems(c.data);
  };

  // Gallery CRUD
  const addGalleryItem = async () => {
    if (!newGallery.url || !newGallery.category) return;
    const { error } = await supabase.from("gallery_items").insert({
      ...newGallery,
      created_by: user?.id,
    });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Élément ajouté" });
      setNewGallery({ category: "", type: "image", title: "", url: "" });
      fetchAll();
    }
  };

  const deleteGalleryItem = async (id: string) => {
    await supabase.from("gallery_items").delete().eq("id", id);
    toast({ title: "Élément supprimé" });
    fetchAll();
  };

  // Events CRUD
  const addEvent = async () => {
    if (!newEvent.title) return;
    const { error } = await supabase.from("events").insert({
      ...newEvent,
      event_date: newEvent.event_date || null,
      created_by: user?.id,
    });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Événement ajouté" });
      setNewEvent({ title: "", description: "", event_date: "", location: "" });
      fetchAll();
    }
  };

  const deleteEvent = async (id: string) => {
    await supabase.from("events").delete().eq("id", id);
    toast({ title: "Événement supprimé" });
    fetchAll();
  };

  // Content CRUD
  const addContent = async () => {
    if (!newContent.section_key) return;
    const { error } = await supabase.from("site_content").insert({
      ...newContent,
      updated_by: user?.id,
    });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Contenu ajouté" });
      setNewContent({ section_key: "", title: "", subtitle: "", description: "" });
      fetchAll();
    }
  };

  const deleteContent = async (id: string) => {
    await supabase.from("site_content").delete().eq("id", id);
    toast({ title: "Contenu supprimé" });
    fetchAll();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Chargement...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-destructive font-medium mb-4">Accès non autorisé. Vous devez être administrateur.</p>
            <Button variant="outline" onClick={() => navigate("/")}>Retour à l'accueil</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-serif text-2xl text-primary">Tableau de bord</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              Voir le site
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut size={18} />
              Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="gallery" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <Image size={16} /> Galerie
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar size={16} /> Événements
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText size={16} /> Contenu
            </TabsTrigger>
          </TabsList>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Gestion de la Galerie</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add form */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 bg-muted rounded-lg">
                  <Input
                    placeholder="Catégorie (ex: convention)"
                    value={newGallery.category}
                    onChange={(e) => setNewGallery({ ...newGallery, category: e.target.value })}
                  />
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={newGallery.type}
                    onChange={(e) => setNewGallery({ ...newGallery, type: e.target.value })}
                  >
                    <option value="image">Image</option>
                    <option value="video">Vidéo</option>
                  </select>
                  <Input
                    placeholder="Titre"
                    value={newGallery.title}
                    onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                  />
                  <Input
                    placeholder="URL"
                    value={newGallery.url}
                    onChange={(e) => setNewGallery({ ...newGallery, url: e.target.value })}
                  />
                  <Button onClick={addGalleryItem}>
                    <Plus size={16} /> Ajouter
                  </Button>
                </div>

                {/* Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Titre</TableHead>
                      <TableHead>URL</TableHead>
                      <TableHead className="w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {galleryItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>
                          {item.type === "image" ? <Image size={16} /> : <Video size={16} />}
                        </TableCell>
                        <TableCell>{item.title || "—"}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{item.url}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => deleteGalleryItem(item.id)}>
                            <Trash2 size={16} className="text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {galleryItems.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground">
                          Aucun élément dans la galerie
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Événements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 bg-muted rounded-lg">
                  <Input
                    placeholder="Titre"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  />
                  <Input
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                  />
                  <Input
                    type="datetime-local"
                    value={newEvent.event_date}
                    onChange={(e) => setNewEvent({ ...newEvent, event_date: e.target.value })}
                  />
                  <Input
                    placeholder="Lieu"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  />
                  <Button onClick={addEvent}>
                    <Plus size={16} /> Ajouter
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Lieu</TableHead>
                      <TableHead className="w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.title}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{event.description || "—"}</TableCell>
                        <TableCell>{event.event_date ? new Date(event.event_date).toLocaleDateString("fr-FR") : "—"}</TableCell>
                        <TableCell>{event.location || "—"}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => deleteEvent(event.id)}>
                            <Trash2 size={16} className="text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {events.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground">
                          Aucun événement
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Gestion du Contenu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 bg-muted rounded-lg">
                  <Input
                    placeholder="Clé de section (ex: hero)"
                    value={newContent.section_key}
                    onChange={(e) => setNewContent({ ...newContent, section_key: e.target.value })}
                  />
                  <Input
                    placeholder="Titre"
                    value={newContent.title}
                    onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
                  />
                  <Input
                    placeholder="Sous-titre"
                    value={newContent.subtitle}
                    onChange={(e) => setNewContent({ ...newContent, subtitle: e.target.value })}
                  />
                  <Input
                    placeholder="Description"
                    value={newContent.description}
                    onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
                  />
                  <Button onClick={addContent}>
                    <Plus size={16} /> Ajouter
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Section</TableHead>
                      <TableHead>Titre</TableHead>
                      <TableHead>Sous-titre</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="w-20">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contentItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.section_key}</TableCell>
                        <TableCell>{item.title || "—"}</TableCell>
                        <TableCell>{item.subtitle || "—"}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{item.description || "—"}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" onClick={() => deleteContent(item.id)}>
                            <Trash2 size={16} className="text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {contentItems.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground">
                          Aucun contenu
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DashboardPage;
