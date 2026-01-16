import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MessageCircle, MapPin, Clock, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Contactez-Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question.
          </p>
        </motion.div>

        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Nos Coordonnées
            </h3>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Adresse</h4>
                  <p className="text-muted-foreground">
                    Konankro après le deuxième carrefour<br />
                    du feu de l'amitié, rue allant vers les benoîts<br />
                    Divo, Côte d'Ivoire
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+2250707527265" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gradient-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-accent group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    +225 07 07 52 72 65
                  </p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:maisaci225@gmail.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gradient-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-accent group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    maisaci225@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/2250707527265" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gradient-gold flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-accent group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground group-hover:text-accent transition-colors">
                    +225 07 07 52 72 65
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Heures d'ouverture</h4>
                  <p className="text-muted-foreground">
                    Lundi - Vendredi: 09h00 - 17h00<br />
                    Samedi: 08h00 - 12h00<br />
                    Dimanche: Cultes uniquement
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Google Maps - Divo, Côte d'Ivoire */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border h-64 lg:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.5!2d-5.36!3d5.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1e0f3c3c3c3c3%3A0x0!2sDivo%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sfr!2sci!4v1702900000000!5m2!1sfr!2sci"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MAISA-CI - Konankro, Divo, Côte d'Ivoire"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">
                Suivez-nous
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/17y7zQULhd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@MAISA-CI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  title="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@maisaci03?_r=1&_t=ZM-937NTa7d1a4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  title="TikTok"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2250707527265"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Rejoignez notre communauté en ligne pour rester connecté et recevoir nos dernières actualités.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
