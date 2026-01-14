import { motion } from "framer-motion";
import { Bed, Utensils, Wifi, Car, Phone, MapPin, Star, Coffee } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import hotelLogo from "@/assets/ministries/hotel-sinai.png";

const amenities = [
  {
    icon: Bed,
    title: "Chambres Confortables",
    description: "Chambres climatisées, propres et accueillantes",
  },
  {
    icon: Utensils,
    title: "Restaurant",
    description: "Cuisine locale et internationale de qualité",
  },
  {
    icon: Wifi,
    title: "WiFi Gratuit",
    description: "Connexion internet haut débit",
  },
  {
    icon: Car,
    title: "Parking Sécurisé",
    description: "Espace de stationnement surveillé",
  },
  {
    icon: Coffee,
    title: "Service d'Étage",
    description: "Room service disponible",
  },
  {
    icon: Star,
    title: "Accueil Chaleureux",
    description: "Un service attentionné et professionnel",
  },
];

const HotelSinaiPage = () => {
  return (
    <MinistryPageLayout
      logo={hotelLogo}
      title="Hôtel SINAÏ"
      subtitle="Complexe Hôtelier SINAÏ - Votre oasis de confort"
      bgColor="bg-gradient-to-br from-yellow-100 via-background to-amber-50"
    >
      <div className="container mx-auto px-4">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="bg-gradient-to-br from-yellow-600 to-amber-700 rounded-2xl shadow-elegant p-8 text-white">
            <Star className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
            <h2 className="font-serif text-2xl font-bold mb-4">
              L'Hospitalité à la Gloire de Dieu
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              L'<strong>Hôtel SINAÏ</strong> est le volet hôtellerie de la MAISA-CI. 
              Nous vous offrons un cadre accueillant et confortable pour vos séjours, 
              que ce soit pour les événements de l'église ou vos voyages personnels.
            </p>
          </div>
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="font-serif text-2xl font-bold text-center text-primary mb-8">
            🏨 Nos Services & Équipements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl shadow-soft p-6 text-center hover:shadow-elegant transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-serif text-lg font-bold text-primary mb-2">
                  {amenity.title}
                </h4>
                <p className="text-sm text-foreground/70">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl shadow-elegant overflow-hidden">
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 p-4 text-white text-center">
              <h3 className="font-serif text-xl font-bold">
                ✨ Offres Spéciales Convention SINAÏ
              </h3>
            </div>
            <div className="p-6">
              <p className="text-foreground/70 text-center mb-4">
                Tarifs préférentiels pour les participants à la Convention SINAÏ 
                et autres événements de la MAISA-CI.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <p className="font-bold text-primary">Chambre Simple</p>
                  <p className="text-foreground/70 text-sm">Tarifs sur demande</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <p className="font-bold text-primary">Chambre Double</p>
                  <p className="text-foreground/70 text-sm">Tarifs sur demande</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold mb-4">
              Réservez votre Séjour
            </h3>
            <p className="opacity-90 mb-2">
              <strong>Adresse :</strong> Divo, Côte d'Ivoire
            </p>
            <p className="opacity-90 mb-6">
              Contactez-nous pour vérifier la disponibilité et effectuer votre réservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+2250707527265"
                className="inline-flex items-center justify-center gap-2 bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Réserver par téléphone
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

export default HotelSinaiPage;
