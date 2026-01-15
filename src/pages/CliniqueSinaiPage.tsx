import { motion } from "framer-motion";
import { Heart, Stethoscope, Clock, Phone, MapPin, UserCheck, Activity, Shield } from "lucide-react";
import MinistryPageLayout from "@/components/MinistryPageLayout";
import cliniqueLogo from "@/assets/ministries/clinique-sinai.png";

const CliniqueSinaiPage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultation Générale",
      description: "Consultations médicales complètes avec des médecins qualifiés"
    },
    {
      icon: Heart,
      title: "Cardiologie",
      description: "Suivi et traitement des maladies cardiovasculaires"
    },
    {
      icon: Activity,
      title: "Urgences",
      description: "Service d'urgence disponible 24h/24 et 7j/7"
    },
    {
      icon: UserCheck,
      title: "Médecine Préventive",
      description: "Bilans de santé et programmes de prévention"
    },
    {
      icon: Shield,
      title: "Pédiatrie",
      description: "Soins spécialisés pour les enfants et nourrissons"
    },
    {
      icon: Heart,
      title: "Maternité",
      description: "Accompagnement de la grossesse et accouchement"
    }
  ];

  const values = [
    "Excellence dans les soins de santé",
    "Compassion et humanité envers chaque patient",
    "Accessibilité des soins pour tous",
    "Innovation médicale au service de la communauté",
    "Éthique et intégrité professionnelle"
  ];

  return (
    <MinistryPageLayout
      logo={cliniqueLogo}
      title="Clinique SINAÏ"
      subtitle="Centre Médical - Au service de votre santé avec excellence et compassion"
      bgColor="bg-gradient-to-br from-teal-50 via-background to-cyan-50"
    >
      {/* Introduction Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 border border-teal-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Notre Mission de Santé
                </h2>
                <p className="text-teal-600 font-medium">Votre bien-être, notre priorité</p>
              </div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              La <strong>Clinique SINAÏ</strong> représente le volet santé de la MAISA-CI. 
              Notre centre médical offre des soins de qualité dans un environnement bienveillant, 
              alliant expertise médicale moderne et valeurs humaines profondes.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Nous croyons que la santé est un don précieux et nous nous engageons à accompagner 
              chaque patient avec professionnalisme, dignité et compassion. Notre équipe médicale 
              dévouée travaille pour offrir les meilleurs soins possibles à notre communauté.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Nos Services Médicaux
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Une gamme complète de services de santé pour répondre à tous vos besoins
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-soft p-6 border border-teal-100 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-foreground/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl shadow-elegant p-8 md:p-12 text-white">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">
              Nos Valeurs Fondamentales
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <span className="text-white/90">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact & Hours Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-elegant p-8 border border-teal-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Horaires d'ouverture</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground/70">Lundi - Vendredi</span>
                <span className="font-medium text-teal-600">7h00 - 20h00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground/70">Samedi</span>
                <span className="font-medium text-teal-600">8h00 - 18h00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-foreground/70">Dimanche</span>
                <span className="font-medium text-teal-600">9h00 - 14h00</span>
              </div>
              <div className="flex justify-between items-center py-2 bg-red-50 rounded-lg px-3 mt-4">
                <span className="text-red-600 font-medium">Urgences</span>
                <span className="font-bold text-red-600">24h/24 - 7j/7</span>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl shadow-elegant p-8 border border-teal-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary">Nous contacter</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Adresse</p>
                  <p className="text-foreground/70">Divo, Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <p className="text-foreground/70">+225 XX XX XX XX XX</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
              Prendre rendez-vous
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-teal-200"
        >
          <Stethoscope className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            Votre Santé, Notre Engagement
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            La Clinique SINAÏ vous accueille dans un cadre moderne et chaleureux. 
            Notre équipe de professionnels de santé est à votre écoute pour vous offrir 
            des soins personnalisés et de qualité.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Équipement moderne
            </span>
            <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
              Équipe qualifiée
            </span>
            <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
              Soins personnalisés
            </span>
          </div>
        </motion.div>
      </section>
    </MinistryPageLayout>
  );
};

export default CliniqueSinaiPage;
