import { motion } from "framer-motion";
import { BookOpen, PenTool, ShoppingCart, Heart } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import ecrivainLogo from "@/assets/ministries/ecrivain-spirituel.png";

const books = [
  {
    title: "Livre 1",
    description: "Description à venir",
    available: true,
  },
  {
    title: "Livre 2",
    description: "Description à venir",
    available: true,
  },
  {
    title: "Livre 3",
    description: "Description à venir",
    available: true,
  },
];

const EcrivainSpirituelPage = () => {
  return (
    <MinistryPageLayout
      logo={ecrivainLogo}
      title="L'Écrivain Spirituel"
      subtitle="Les ouvrages du Dr. Apôtre ZAKEHI Désiré"
      bgColor="bg-gradient-to-br from-red-50 via-background to-orange-50"
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
            <PenTool className="w-16 h-16 text-red-700 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
              Une Plume Inspirée
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Retrouvez ici tous les livres écrits par le <strong>Dr. Apôtre ZAKEHI Désiré</strong>, 
              fondateur de la MAISA-CI. Des ouvrages remplis de sagesse divine, d'enseignements 
              prophétiques et de révélations spirituelles pour édifier votre vie.
            </p>
          </div>
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl font-bold mb-2">
                  Dr. Apôtre ZAKEHI Désiré
                </h3>
                <p className="text-red-200 mb-4">Fondateur de la MAISA-CI</p>
                <p className="opacity-90">
                  Auteur de plusieurs ouvrages spirituels, le Dr. Apôtre ZAKEHI Désiré 
                  partage à travers ses écrits des décennies de ministère et de révélations 
                  divines pour équiper le peuple de Dieu.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Books Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            📚 Catalogue des Livres
          </h3>
          <div className="bg-card rounded-2xl shadow-soft p-8 text-center">
            <Heart className="w-16 h-16 text-red-300 mx-auto mb-6" />
            <p className="text-lg text-foreground/70 mb-4">
              Le catalogue complet des livres sera bientôt disponible.
            </p>
            <p className="text-foreground/60">
              En attendant, contactez-nous pour connaître les ouvrages disponibles.
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8 text-center border-2 border-red-200">
            <ShoppingCart className="w-12 h-12 text-red-700 mx-auto mb-4" />
            <h3 className="font-serif text-xl font-bold text-primary mb-4">
              Commander un Livre
            </h3>
            <p className="text-foreground/70 mb-6">
              Pour commander les livres du Dr. Apôtre ZAKEHI Désiré, 
              contactez-nous directement.
            </p>
            <a 
              href="tel:+2250707527265"
              className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-3 rounded-full font-medium hover:bg-red-800 transition-colors"
            >
              📞 +225 07 07 52 72 65
            </a>
          </div>
        </motion.div>
      </div>
    </MinistryPageLayout>
  );
};

export default EcrivainSpirituelPage;
