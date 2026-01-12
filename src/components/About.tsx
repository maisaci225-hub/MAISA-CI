import { motion } from "framer-motion";
import { Heart, Users, BookOpen, Globe } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amour",
    description: "Nous servons avec amour, accueillant chacun dans la grâce de Dieu.",
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Une famille unie dans la foi, le partage et l'entraide fraternelle.",
  },
  {
    icon: BookOpen,
    title: "Enseignement",
    description: "La Parole de Dieu au cœur de notre mission pour transformer les vies.",
  },
  {
    icon: Globe,
    title: "Mission",
    description: "Répandre l'Évangile jusqu'aux extrémités de la terre.",
  },
];

const About = () => {
  return (
    <section id="apropos" className="py-20 md:py-32 bg-background">
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
            À Propos de Nous
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            La <strong className="text-primary">Mission Apostolique Internationale pour le Salut des Âmes</strong> (MAISA-CI) 
            est une église dynamique basée en Côte d'Ivoire, dédiée à répandre l'amour de Dieu 
            et à conduire les âmes vers le salut. Notre vision est de bâtir une communauté 
            où chaque personne peut rencontrer Jésus-Christ et expérimenter sa puissance transformatrice.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 text-center shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full border border-border">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-gradient-gold transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-accent group-hover:text-navy-dark transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
