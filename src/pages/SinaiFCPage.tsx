import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Award, MapPin, Target } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import sinaiFcLogo from "@/assets/ministries/sinai-fc.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Formation Biblique",
    description: "Étude approfondie des Écritures et de la théologie",
  },
  {
    icon: Users,
    title: "Développement du Leadership",
    description: "Formation aux compétences de direction et de gestion",
  },
  {
    icon: Target,
    title: "Ministère Pratique",
    description: "Application concrète des enseignements reçus",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Diplôme reconnu par la MAISA-CI",
  },
];

const SinaiFCPage = () => {
  return (
    <MinistryPageLayout
      logo={sinaiFcLogo}
      title="SINAÏ FC"
      subtitle="Centre de Formation pour les serviteurs de Dieu"
      bgColor="bg-gradient-to-br from-yellow-50 via-background to-blue-50"
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
            <GraduationCap className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Former pour Servir
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              <strong>SINAÏ FC</strong> est le centre de formation de la MAISA-CI, 
              basé à <strong>Divo</strong>. Notre mission est de former et d'équiper 
              les serviteurs de Dieu pour un ministère efficace et puissant.
            </p>
          </div>
        </motion.div>

        {/* Programs */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-yellow-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <program.icon className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="text-foreground/70">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location & Contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 text-white text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Rejoignez SINAÏ FC
            </h3>
            <p className="opacity-90 mb-2">
              <strong>Localisation :</strong> Divo, Côte d'Ivoire
            </p>
            <p className="opacity-90 mb-6">
              Inscrivez-vous dès maintenant pour la prochaine session de formation.
            </p>
            <a 
              href="tel:+2250707527265"
              className="inline-flex items-center gap-2 bg-white text-yellow-700 px-8 py-3 rounded-full font-medium hover:bg-yellow-100 transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default SinaiFCPage;
