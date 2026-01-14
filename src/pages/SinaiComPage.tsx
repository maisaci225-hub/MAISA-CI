import { motion } from "framer-motion";
import { Mic2, Monitor, Video, Speaker, Calendar, Star } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import sinaiComLogo from "@/assets/ministries/sinai-com.png";

const services = [
  {
    icon: Mic2,
    title: "Grand Podium",
    description: "Podium professionnel pour tous types d'événements",
  },
  {
    icon: Speaker,
    title: "Sonorisation Grand Format",
    description: "Système audio de haute qualité pour grandes assemblées",
  },
  {
    icon: Video,
    title: "Régie Vidéo",
    description: "Équipement vidéo professionnel pour retransmissions",
  },
  {
    icon: Monitor,
    title: "Écrans Géants LED",
    description: "Écrans LED haute définition pour une visibilité optimale",
  },
];

const SinaiComPage = () => {
  return (
    <MinistryPageLayout
      logo={sinaiComLogo}
      title="SINAÏ-COM"
      subtitle="Structure Évènementielle - Organisation de cérémonies"
      bgColor="bg-gradient-to-br from-yellow-100 via-background to-gray-100"
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-elegant p-8 text-white">
            <Star className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold mb-4">
              L'Excellence au Service de vos Événements
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              <strong className="text-yellow-400">SINAÏ-COM</strong> est la structure évènementielle 
              de la MAISA-CI. Nous nous occupons de l'organisation et de la réussite de vos grandes 
              cérémonies avec un équipement professionnel de haute qualité.
            </p>
          </div>
        </motion.div>

        {/* Services */}
        <div className="max-w-5xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-serif text-2xl font-bold text-center text-primary mb-8"
          >
            Nos Équipements en Location
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-elegant transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="font-serif text-lg font-bold text-primary mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-foreground/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Types of Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8">
            <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-6" />
            <h3 className="font-serif text-xl font-bold text-center text-primary mb-6">
              Types d'Événements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-center">
              {[
                "Conventions & Conférences",
                "Mariages",
                "Concerts & Spectacles",
                "Cérémonies religieuses",
                "Événements d'entreprise",
                "Festivals"
              ].map((event, index) => (
                <div key={index} className="bg-yellow-50 rounded-lg py-3 px-4 text-foreground/80">
                  ✓ {event}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Demandez un Devis
            </h3>
            <p className="opacity-90 mb-6">
              Contactez-nous pour organiser votre prochain événement avec SINAÏ-COM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2250707527265"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                📞 Appelez-nous
              </a>
              <a 
                href="https://wa.me/2250707527265"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors"
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

export default SinaiComPage;
