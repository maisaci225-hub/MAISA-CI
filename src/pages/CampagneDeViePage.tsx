import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Heart, Target, Globe } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import MediaSection from "@/components/MediaSection";
import campagneLogo from "@/assets/ministries/campagne-de-vie.jpg";

// Import gallery images
import convention1 from "@/assets/gallery/convention-1.png";
import convention2 from "@/assets/gallery/convention-2.png";
import convention3 from "@/assets/gallery/convention-3.png";
import convention4 from "@/assets/gallery/convention-4.png";
import convention5 from "@/assets/gallery/convention-5.png";
import convention6 from "@/assets/gallery/convention-6.png";

const features = [
  {
    icon: Calendar,
    title: "Deux fois par an",
    description: "Un programme régulier pour toucher un maximum de personnes",
  },
  {
    icon: MapPin,
    title: "Programme tournant",
    description: "Nous allons dans différentes localités pour répandre la Bonne Nouvelle",
  },
  {
    icon: Users,
    title: "Évangélisation de masse",
    description: "Des milliers de personnes touchées par l'amour de Christ",
  },
  {
    icon: Heart,
    title: "Transformation des vies",
    description: "Des témoignages de guérisons et de délivrances",
  },
];

const campagneImages = [
  { type: "image" as const, src: convention1, alt: "Évangélisation en plein air" },
  { type: "image" as const, src: convention2, alt: "Prière pour les malades" },
  { type: "image" as const, src: convention3, alt: "Foule rassemblée" },
  { type: "image" as const, src: convention4, alt: "Témoignages de guérisons" },
  { type: "image" as const, src: convention5, alt: "Moment de louange" },
  { type: "image" as const, src: convention6, alt: "Distribution de littérature" },
];

const campagneVideos = [
  { 
    type: "video" as const, 
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    alt: "Campagne de Vie 2024 - Résumé" 
  },
  { 
    type: "video" as const, 
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    alt: "Témoignages des convertis" 
  },
  { 
    type: "video" as const, 
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    alt: "Miracles et guérisons" 
  },
];

const CampagneDeViePage = () => {
  return (
    <MinistryPageLayout
      logo={campagneLogo}
      title="Campagne de Vie"
      subtitle="Programme d'évangélisation tournant pour le salut des âmes"
      bgColor="bg-gradient-to-br from-purple-100 via-background to-yellow-50"
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8">
            <Globe className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Notre Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              La <strong>Campagne de Vie</strong> est un programme d'évangélisation tournant 
              qui a lieu <strong>deux fois dans l'année</strong>. Notre objectif est d'atteindre 
              les populations dans différentes localités avec le message de l'Évangile, 
              apportant espoir, guérison et transformation à tous ceux qui ont soif de Dieu.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Rejoignez la Campagne
            </h3>
            <p className="opacity-90 mb-6">
              Participez à notre prochaine campagne d'évangélisation et soyez 
              un instrument de Dieu pour toucher des vies.
            </p>
            <a 
              href="tel:+2250707527265"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-3 rounded-full font-medium hover:bg-purple-100 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>

      {/* Media Section */}
      <MediaSection
        title="Galerie Campagne de Vie"
        subtitle="Revivez les moments forts de nos campagnes d'évangélisation"
        images={campagneImages}
        videos={campagneVideos}
        accentColor="purple"
      />
    </MinistryPageLayout>
  );
};

export default CampagneDeViePage;
