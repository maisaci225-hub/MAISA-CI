import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Award, Clock, Target } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import ecoleLogo from "@/assets/ministries/ecole-pastorale.png";

const curriculum = [
  {
    icon: BookOpen,
    title: "Théologie Biblique",
    description: "Étude approfondie de l'Ancien et du Nouveau Testament",
  },
  {
    icon: Users,
    title: "Pastorat & Counseling",
    description: "Techniques de soin pastoral et accompagnement spirituel",
  },
  {
    icon: Target,
    title: "Ministère Prophétique",
    description: "Formation à l'exercice des dons spirituels",
  },
  {
    icon: Award,
    title: "Leadership Ecclésial",
    description: "Gestion et direction d'une assemblée locale",
  },
];

const benefits = [
  "Formation complète et équilibrée",
  "Enseignants expérimentés",
  "Stage pratique en église",
  "Diplôme reconnu par la MAISA-CI",
  "Suivi post-formation",
  "Réseau de pasteurs",
];

const EcolePastoralePage = () => {
  return (
    <MinistryPageLayout
      logo={ecoleLogo}
      title="École Pastorale"
      subtitle="Former les serviteurs de Dieu de demain"
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
            <GraduationCap className="w-16 h-16 text-blue-700 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Notre Vision
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              L'<strong>École Pastorale MAISA-CI</strong> est le lieu où sont formés les 
              futurs serviteurs de Dieu de la MAISA-CI. Notre mission est de préparer 
              des leaders spirituels équipés pour servir l'Église de Christ avec 
              excellence et intégrité.
            </p>
          </div>
        </motion.div>

        {/* Curriculum */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            📖 Programme de Formation
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-8 text-white">
            <h3 className="font-serif text-xl font-bold text-center mb-6">
              ✨ Avantages de la Formation
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <span className="text-yellow-400">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Admission */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8 text-center border-2 border-blue-200">
            <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-primary mb-4">
              Inscriptions Ouvertes
            </h3>
            <p className="text-foreground/70 mb-6">
              Vous vous sentez appelé au ministère pastoral ? 
              Rejoignez notre prochaine promotion de l'École Pastorale.
            </p>
            <a 
              href="tel:+2250707527265"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors"
            >
              📞 Contactez-nous pour plus d'infos
            </a>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default EcolePastoralePage;
