import { motion } from "framer-motion";
import logoMaisa from "@/assets/logo-maisa.jpg";

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-navy" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img
              src={logoMaisa}
              alt="MAISA-CI Logo"
              className="w-64 h-64 md:w-80 md:h-80 object-contain animate-float"
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4"
          >
            Mission Apostolique Internationale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-serif text-xl md:text-2xl lg:text-3xl text-gold mb-8"
          >
            Pour le Salut des Âmes en Côte d'Ivoire
          </motion.p>

          {/* Verse */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-primary-foreground/90 italic font-light leading-relaxed">
              « Que servirait-il à un homme de gagner le monde, s'il perdait son âme ? »
            </p>
            <cite className="block mt-3 text-gold font-semibold not-italic">
              — Matthieu 16:26
            </cite>
          </motion.blockquote>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12"
          >
            <a
              href="#horaires"
              className="inline-flex items-center px-8 py-4 bg-gradient-gold text-navy-dark font-semibold rounded-full shadow-gold hover:shadow-elevated hover:scale-105 transition-all duration-300"
            >
              Rejoignez-nous
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(40, 33%, 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
