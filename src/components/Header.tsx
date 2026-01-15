import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Accueil", isRoute: true },
  { href: "#apropos", label: "À Propos", isRoute: false },
  { href: "#equipe", label: "Notre Équipe", isRoute: false },
  { href: "#horaires", label: "Horaires", isRoute: false },
  { href: "#contact", label: "Contact", isRoute: false },
];

const ministryLinks = [
  { href: "/programme", label: "Programme de l'Église" },
  { href: "/campagne-de-vie", label: "Campagne de Vie" },
  { href: "/convention-sinai", label: "Convention Sinaï" },
  { href: "/sinai-fc", label: "Sinaï FC" },
  { href: "/sinai-com", label: "Sinaï-Com" },
  { href: "/ecrivain-spirituel", label: "L'Écrivain Spirituel" },
  { href: "/maisa-ci-shop", label: "Maisa-CI Shop" },
  { href: "/ecole-pastorale", label: "École Pastorale" },
  { href: "/education", label: "Éducation" },
  { href: "/hotel-sinai", label: "Hôtel Sinaï" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinistriesOpen, setIsMinistriesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsOpen(false);
    if (!isRoute && !isHomePage) {
      // If we're not on home page and clicking an anchor, redirect to home with hash
      window.location.href = "/" + href;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-primary">
            MAISA-CI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : "/" + link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              )
            ))}
            
            {/* Ministries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 outline-none">
                Ministères <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border w-56">
                {ministryLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="w-full cursor-pointer hover:bg-accent/10"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHomePage ? link.href : "/" + link.href}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className="text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                  >
                    {link.label}
                  </a>
                )
              ))}
              
              {/* Mobile Ministries Accordion */}
              <div className="border-t border-border pt-2 mt-2">
                <button
                  onClick={() => setIsMinistriesOpen(!isMinistriesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-foreground/80 hover:text-accent transition-colors py-2"
                >
                  Ministères
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${isMinistriesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isMinistriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-1"
                    >
                      {ministryLinks.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-sm text-foreground/70 hover:text-accent transition-colors py-2"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
