import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const schedules = [
  {
    day: "Dimanche",
    time: "08h30 - 11h30",
    title: "Culte Prophétique",
    description: "Louange, adoration et manifestation prophétique",
  },
  {
    day: "Mardi",
    time: "18h30 - 21h00",
    title: "Culte d'Enseignement",
    description: "Approfondissement de la Parole de Dieu",
  },
  {
    day: "Mercredi",
    time: "08h30 - 15h30",
    title: "Réception",
    description: "Accueil et accompagnement pastoral",
  },
  {
    day: "Vendredi",
    time: "18h30 - 21h00",
    title: "Culte de Guérison et Miracles",
    description: "Intercession, délivrance et manifestation de la puissance de Dieu",
    special: "Tous les derniers vendredis sont des Vendredis de Feu 🔥",
  },
];

const Schedule = () => {
  return (
    <section id="horaires" className="py-20 md:py-32 bg-secondary/50">
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
            Nos Horaires de Culte
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Rejoignez-nous pour célébrer et grandir ensemble dans la foi
          </p>
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedules.map((schedule, index) => (
            <motion.div
              key={schedule.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border overflow-hidden relative">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                        {schedule.day}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-1">
                      {schedule.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{schedule.time}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {schedule.description}
                    </p>
                    {schedule.special && (
                      <p className="text-gold text-sm font-semibold mt-2">
                        {schedule.special}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="bg-gradient-navy rounded-2xl p-8 text-center">
            <MapPin className="w-10 h-10 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
              Notre Lieu de Culte
            </h3>
            <p className="text-primary-foreground/80">
              Abidjan, Côte d'Ivoire
            </p>
            <p className="text-gold mt-2 font-medium">
              Contactez-nous pour l'adresse exacte
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
