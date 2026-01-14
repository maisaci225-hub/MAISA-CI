import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface MinistryPageLayoutProps {
  logo: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  bgColor?: string;
}

const MinistryPageLayout = ({ 
  logo, 
  title, 
  subtitle, 
  children, 
  bgColor = "bg-gradient-to-br from-primary/10 via-background to-accent/10" 
}: MinistryPageLayoutProps) => {
  return (
    <div className={`min-h-screen ${bgColor}`}>
      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Retour</span>
            </Link>
            <span className="font-serif text-xl font-bold text-primary">MAISA-CI</span>
          </div>
        </div>
      </header>

      {/* Hero Section with Logo */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full bg-white shadow-elegant p-4 flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                alt={title} 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <main className="pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} MAISA-CI - Mission Apostolique Internationale pour le Salut des Âmes
          </p>
          <Link to="/" className="inline-block mt-4 text-accent hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MinistryPageLayout;
