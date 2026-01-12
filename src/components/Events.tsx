import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Culte de Pâques",
    date: "20 Avril 2025",
    time: "09h00 - 12h00",
    location: "Temple MAISA-CI, Abidjan",
    description: "Célébrons ensemble la résurrection de notre Seigneur Jésus-Christ avec louange, adoration et enseignement.",
    type: "Culte spécial",
    featured: true
  },
  {
    id: 2,
    title: "Séminaire de Formation Biblique",
    date: "10 - 12 Mai 2025",
    time: "18h00 - 21h00",
    location: "Salle de conférence MAISA-CI",
    description: "Trois jours d'enseignement approfondi sur l'épître aux Romains avec le Pasteur principal.",
    type: "Formation",
    featured: false
  },
  {
    id: 3,
    title: "Camp de Jeunesse 2025",
    date: "15 - 20 Août 2025",
    time: "Séjour complet",
    location: "Grand-Bassam",
    description: "Une semaine de retraite spirituelle pour les jeunes de 15 à 30 ans. Inscriptions ouvertes!",
    type: "Jeunesse",
    featured: false
  },
  {
    id: 4,
    title: "Nuit de Prière et Louange",
    date: "Chaque dernier vendredi du mois",
    time: "21h00 - 05h00",
    location: "Temple MAISA-CI, Abidjan",
    description: "Venez intercéder et louer le Seigneur toute la nuit. Un moment de communion intense avec Dieu.",
    type: "Prière",
    featured: false
  }
];

const Events = () => {
  return (
    <section id="events" className="py-20 md:py-32 bg-background">
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
            Actualités & Événements
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Restez informés des prochaines activités et célébrations de notre église.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-border ${
                event.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {event.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-gold text-navy-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    À ne pas manquer
                  </span>
                </div>
              )}
              
              <div className={`p-6 md:p-8 ${event.featured ? 'md:flex md:items-center md:gap-8' : ''}`}>
                {/* Date Badge */}
                <div className={`flex-shrink-0 ${event.featured ? 'mb-6 md:mb-0' : 'mb-4'}`}>
                  <div className="inline-flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-xl p-4 min-w-[80px]">
                    <span className="text-2xl font-bold font-serif">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-xs uppercase tracking-wider opacity-80">
                      {event.date.split(' ')[1]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="inline-block text-accent text-sm font-medium uppercase tracking-wider mb-2">
                    {event.type}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary group-hover:bg-gradient-gold flex items-center justify-center transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-accent group-hover:text-navy-dark transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Vous souhaitez être informé de nos prochains événements ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-accent transition-colors duration-300"
          >
            <span>Contactez-nous</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
