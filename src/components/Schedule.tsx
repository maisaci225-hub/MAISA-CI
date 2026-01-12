import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const schedules = [
  {
    day: "Dimanche",
    time: "09h00 - 12h00",
    title: "Culte Dominical",
    description: "Louange, adoration et prédication de la Parole",
  },
  {
    day: "Mercredi",
    time: "18h00 - 20h00",
    title: "Étude Biblique",
    description: "Approfondissement des Écritures Saintes",
  },
  {
    day: "Vendredi",
    time: "18h00 - 21h00",
    title: "Veillée de Prière",
    description: "Intercession et combat spirituel",
  },
  {
    day: "Samedi",
    time: "15h00 - 17h00",
    title: "Réunion des Jeunes",
    description: "Moment de partage et d'édification pour la jeunesse",
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
