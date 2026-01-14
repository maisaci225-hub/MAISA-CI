import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Mountain, Sparkles } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import sinaiLogo from "@/assets/ministries/convention-sinai.png";

const highlights = [
  {
    icon: Calendar,
    title: "Chaque Décembre",
    description: "Une semaine entière de communion et de prière",
  },
  {
    icon: MapPin,
    title: "Divo, Côte d'Ivoire",
    description: "Le lieu de rassemblement pour les fidèles",
  },
  {
    icon: Users,
    title: "Rassemblement massif",
    description: "Des milliers de fidèles venus de partout",
  },
  {
    icon: Sparkles,
    title: "Manifestations divines",
    description: "Miracles, guérisons et délivrances",
  },
];

const ConventionSinaiPage = () => {
  return (
    <MinistryPageLayout
      logo={sinaiLogo}
      title="Convention SINAÏ"
      subtitle="Une semaine de prière intense et de rencontre avec Dieu"
      bgColor="bg-gradient-to-br from-blue-100 via-background to-yellow-50"
    >
      <div className="container mx-auto px-4">
        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-bl-full" />
            <Mountain className="w-20 h-20 text-blue-600 mx-auto mb-6" />
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
              Comme Moïse sur le Mont Sinaï
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              La <strong>Convention SINAÏ</strong> est un moment privilégié de rencontre avec Dieu. 
              Chaque année au mois de <strong>Décembre</strong>, pendant <strong>une semaine entière</strong>, 
              des milliers de fidèles se rassemblent à <strong>Divo</strong> pour vivre une expérience 
              spirituelle unique, dans la prière, la louange et l'adoration.
            </p>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-elegant">
            <div className="p-8 text-white text-center">
              <h3 className="font-serif text-2xl font-bold mb-6">
                📅 Prochaine Convention
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <Calendar className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Décembre 2025</p>
                  <p className="text-sm opacity-80">Une semaine</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Divo</p>
                  <p className="text-sm opacity-80">Côte d'Ivoire</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-medium">Matin & Soir</p>
                  <p className="text-sm opacity-80">Sessions de prière</p>
                </div>
              </div>
              <p className="opacity-90 mb-6">
                Réservez dès maintenant votre place pour vivre cette expérience transformatrice.
              </p>
              <a 
                href="tel:+2250707527265"
                className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                Inscrivez-vous
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default ConventionSinaiPage;
