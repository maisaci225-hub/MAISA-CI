import { motion } from "framer-motion";
import { Clock, Calendar, Flame, Users, BookOpen, Heart } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import egliseLogo from "@/assets/ministries/eglise-maisa-ci.jpg";

const schedules = [
  {
    day: "Dimanche",
    time: "8h30 - 11h30",
    title: "Culte Prophétique",
    description: "Un moment de louange, d'adoration et de manifestations prophétiques",
    icon: Flame,
    color: "from-orange-500 to-red-500",
  },
  {
    day: "Mardi",
    time: "18h30 - 21h00",
    title: "Culte d'Enseignement",
    description: "Approfondissement de la Parole de Dieu et formation spirituelle",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-500",
  },
  {
    day: "Mercredi",
    time: "8h30 - 15h30",
    title: "Réception",
    description: "Accueil des fidèles, prières et conseils spirituels",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    day: "Vendredi",
    time: "18h30 - 21h00",
    title: "Culte de Guérison et Miracles",
    description: "Manifestations de la puissance de Dieu pour la guérison et les miracles",
    icon: Heart,
    color: "from-purple-500 to-pink-500",
  },
];

const ProgrammePage = () => {
  return (
    <MinistryPageLayout
      logo={egliseLogo}
      title="Programme de l'Église"
      subtitle="Rejoignez-nous pour des moments de communion, de prière et de louange"
    >
      <div className="container mx-auto px-4">
        {/* Schedule Cards */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {schedules.map((schedule, index) => (
            <motion.div
              key={schedule.day}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-elegant overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${schedule.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <schedule.icon className="w-8 h-8" />
                  <div>
                    <h3 className="font-serif text-xl font-bold">{schedule.day}</h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <Clock className="w-4 h-4" />
                      <span>{schedule.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-lg font-bold text-primary mb-2">
                  {schedule.title}
                </h4>
                <p className="text-foreground/70">{schedule.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Friday */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
            <div className="relative z-10">
              <Flame className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                🔥 Vendredis de Feu 🔥
              </h3>
              <p className="text-lg opacity-90 max-w-xl mx-auto">
                Tous les derniers vendredis du mois sont des <strong>Vendredis de Feu</strong> - 
                Des moments de prière intense et de manifestations puissantes du Saint-Esprit.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">Chaque dernier vendredi du mois</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-card rounded-2xl shadow-soft p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-primary mb-4">📍 Notre Adresse</h3>
            <p className="text-foreground/70">
              Konankro après le deuxième carrefour du feu de l'amitié,<br />
              la rue allant vers les benoîts<br />
              <strong>Divo, Côte d'Ivoire</strong>
            </p>
            <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="tel:+2250707527265" 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                📞 +225 07 07 52 72 65
              </a>
              <a 
                href="https://wa.me/2250707527265" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default ProgrammePage;
