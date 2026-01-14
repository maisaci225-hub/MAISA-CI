import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Star, Building, Target } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import educationLogo from "@/assets/ministries/education.png";

const levels = [
  {
    icon: "🎒",
    title: "Primaire",
    description: "Éducation de base solide dans un environnement chrétien",
  },
  {
    icon: "📚",
    title: "Secondaire",
    description: "Formation académique complète avec valeurs morales",
  },
  {
    icon: "🎓",
    title: "Supérieur",
    description: "Études universitaires et professionnelles",
  },
];

const values = [
  {
    icon: Star,
    title: "Excellence Académique",
    description: "Des standards élevés pour la réussite des élèves",
  },
  {
    icon: BookOpen,
    title: "Fondements Bibliques",
    description: "Une éducation ancrée dans les valeurs chrétiennes",
  },
  {
    icon: Users,
    title: "Développement Intégral",
    description: "Former l'esprit, l'âme et le corps",
  },
  {
    icon: Target,
    title: "Préparation à l'Avenir",
    description: "Des compétences pour réussir dans la vie",
  },
];

const EducationPage = () => {
  return (
    <MinistryPageLayout
      logo={educationLogo}
      title="Éducation MAISA-CI"
      subtitle="Le volet éducatif de la MAISA-CI"
      bgColor="bg-gradient-to-br from-blue-50 via-background to-yellow-50"
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
            <Building className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              L'Éducation au Cœur de notre Mission
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Le volet <strong>Éducation</strong> de la MAISA-CI vise à offrir 
              une formation académique de qualité, fondée sur les valeurs chrétiennes, 
              pour préparer les jeunes générations à un avenir brillant au service 
              de Dieu et de la société.
            </p>
          </div>
        </motion.div>

        {/* Education Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            📚 Niveaux d'Enseignement
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-elegant transition-shadow"
              >
                <span className="text-5xl mb-4 block">{level.icon}</span>
                <h4 className="font-serif text-lg font-bold text-primary mb-2">
                  {level.title}
                </h4>
                <p className="text-foreground/70 text-sm">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            🌟 Nos Valeurs Éducatives
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-1">
                      {value.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
            <GraduationCap className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Inscrivez votre Enfant
            </h3>
            <p className="opacity-90 mb-6">
              Offrez à votre enfant une éducation d'excellence dans un 
              environnement chrétien bienveillant.
            </p>
            <a 
              href="tel:+2250707527265"
              className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
            >
              📞 Contactez-nous
            </a>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default EducationPage;
