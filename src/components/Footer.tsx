import logoMaisa from "@/assets/logo-maisa.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={logoMaisa}
            alt="MAISA-CI"
            className="w-24 h-24 object-contain mb-4"
          />
          
          {/* Name */}
          <h3 className="font-serif text-xl font-bold text-primary-foreground mb-2">
            MAISA-CI
          </h3>
          <p className="text-primary-foreground/70 text-sm mb-6">
            Mission Apostolique Internationale pour le Salut des Âmes
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#accueil" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              Accueil
            </a>
            <a href="#apropos" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              À Propos
            </a>
            <a href="#horaires" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              Horaires
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Verse */}
          <blockquote className="max-w-md mb-8">
            <p className="text-primary-foreground/80 italic text-sm">
              « Que servirait-il à un homme de gagner le monde, s'il perdait son âme ? »
            </p>
            <cite className="block mt-2 text-gold text-sm not-italic">
              Matthieu 16:26
            </cite>
          </blockquote>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-primary-foreground/20 mb-6" />

          {/* Copyright */}
          <p className="text-primary-foreground/50 text-xs">
            © {currentYear} MAISA-CI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
