import { motion } from "framer-motion";
import { ShoppingBag, Truck, CreditCard, Gift, Phone } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import shopLogo from "@/assets/ministries/maisa-ci-shop.png";

const categories = [
  {
    icon: "📚",
    title: "Livres Spirituels",
    description: "Ouvrages du Dr. Apôtre ZAKEHI et autres auteurs",
  },
  {
    icon: "👕",
    title: "Vêtements & Accessoires",
    description: "T-shirts, casquettes et articles MAISA-CI",
  },
  {
    icon: "🎵",
    title: "Audio & Vidéo",
    description: "Prédications, enseignements et musique",
  },
  {
    icon: "🎁",
    title: "Articles Divers",
    description: "Produits bénis et articles de foi",
  },
];

const features = [
  {
    icon: Truck,
    title: "Livraison",
    description: "Partout en Côte d'Ivoire",
  },
  {
    icon: CreditCard,
    title: "Paiement Sécurisé",
    description: "Mobile Money & autres",
  },
  {
    icon: Gift,
    title: "Articles Bénis",
    description: "Produits de qualité",
  },
];

const MaisaCiShopPage = () => {
  return (
    <MinistryPageLayout
      logo={shopLogo}
      title="MAISA-CI Shop"
      subtitle="Boutique en ligne officielle de la MAISA-CI"
      bgColor="bg-gradient-to-br from-orange-50 via-background to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-elegant p-8 text-white">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6" />
            <h2 className="font-serif text-2xl font-bold mb-4">
              Bienvenue dans notre Boutique
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              <strong>MAISA-CI Shop</strong> est la boutique en ligne où sont en vente 
              tous les produits provenant de la MAISA-CI. Découvrez notre sélection 
              d'articles spirituels et accessoires.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            Nos Catégories
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6 border-l-4 border-orange-500 hover:shadow-elegant transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-primary mb-1">
                      {category.title}
                    </h4>
                    <p className="text-foreground/70 text-sm">{category.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8 text-center border-2 border-dashed border-orange-300">
            <span className="text-5xl mb-4 block">🛒</span>
            <h3 className="font-serif text-xl font-bold text-primary mb-4">
              Boutique en ligne bientôt disponible
            </h3>
            <p className="text-foreground/70">
              Notre plateforme e-commerce est en cours de développement. 
              En attendant, vous pouvez commander directement par téléphone ou WhatsApp.
            </p>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-900 to-orange-600 rounded-2xl p-8 text-white text-center">
            <Phone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Commander Maintenant
            </h3>
            <p className="opacity-90 mb-6">
              Contactez-nous pour passer votre commande
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2250707527265"
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors"
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

export default MaisaCiShopPage;
