import { motion } from "framer-motion";
import { Phone, Mail, Facebook, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
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
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande de prière.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Phone */}
          <motion.a
            href="tel:+2250000000000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gradient-gold transition-colors duration-300">
                <Phone className="w-8 h-8 text-accent group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Téléphone
              </h3>
              <p className="text-muted-foreground">
                +225 00 00 00 00 00
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:contact@maisa-ci.org"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gradient-gold transition-colors duration-300">
                <Mail className="w-8 h-8 text-accent group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                Email
              </h3>
              <p className="text-muted-foreground">
                contact@maisa-ci.org
              </p>
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/2250000000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group"
          >
            <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gradient-gold transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-accent group-hover:text-navy-dark transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground">
                Écrivez-nous
              </p>
            </div>
          </motion.a>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Suivez-nous sur les réseaux sociaux</p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors duration-300"
            >
              <Facebook className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
