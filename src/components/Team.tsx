import { motion } from "framer-motion";
import { Users } from "lucide-react";

import apostleZakehi from "@/assets/team/apotre-zakehi.jpg";
import drDezaPhilemon from "@/assets/team/dr-deza-philemon.png";
import pasteurNzouheHerman from "@/assets/team/pasteur-nzouhe-herman.jpg";
import pasteurDadieNoel from "@/assets/team/pasteur-dadie-noel.png";
import pasteurSouanhonDanielle from "@/assets/team/pasteur-souanhon-danielle.png";
import propheteDakouryPrince from "@/assets/team/prophete-dakoury-prince.png";
import propheteBlesamuel from "@/assets/team/prophete-ble-samuel.png";
import pasteurGneboEric from "@/assets/team/pasteur-gnebo-eric.jpg";
import propheteKoffiBertrand from "@/assets/team/prophete-koffi-bertrand.png";
import pasteurTayoroDassise from "@/assets/team/pasteur-tayoro-dassise.png";
import pasteurGokpiaThierry from "@/assets/team/pasteur-gokpia-thierry.png";
import evangelisteAdiglaEmilie from "@/assets/team/evangeliste-adigla-emilie.png";
import pasteurGnagboPierre from "@/assets/team/pasteur-gnagbo-pierre.png";
import pasteurGnageClaver from "@/assets/team/pasteur-gnage-claver.png";
import evangelisteBlakaLouis from "@/assets/team/evangeliste-blaka-louis.png";

const teamMembers = [
  {
    name: "Dr Apôtre ZAKEHI Désiré",
    role: "Fondateur de la MAISA-CI",
    location: "",
    image: apostleZakehi,
    isFounder: true,
  },
  {
    name: "Dr DEZA DOGO Philémon",
    role: "Pasteur",
    location: "Église MAISA-CI Divo",
    image: drDezaPhilemon,
  },
  {
    name: "Pasteur N'ZOUHE Double Herman",
    role: "Pasteur",
    location: "Église MAISA-CI Divo",
    image: pasteurNzouheHerman,
  },
  {
    name: "Pasteur DADIE Noël",
    role: "Pasteur",
    location: "Église MAISA-CI Divo",
    image: pasteurDadieNoel,
  },
  {
    name: "Pasteur SOUANHON Ahou Danielle",
    role: "Pasteur",
    location: "Église MAISA-CI Divo",
    image: pasteurSouanhonDanielle,
  },
  {
    name: "Prophète DAKOURY Abalé Prince",
    role: "Prophète",
    location: "Église MAISA-CI Gagnoa",
    image: propheteDakouryPrince,
  },
  {
    name: "Prophète BLE Samuel",
    role: "Prophète",
    location: "Église MAISA-CI Lakota",
    image: propheteBlesamuel,
  },
  {
    name: "Pasteur GNEBO Eric",
    role: "Pasteur",
    location: "Église MAISA-CI Lakota",
    image: pasteurGneboEric,
  },
  {
    name: "Prophète KOFFI Yao Bertrand",
    role: "Prophète",
    location: "Église MAISA-CI Gbahiri",
    image: propheteKoffiBertrand,
  },
  {
    name: "Pasteur TAYORO Dassise",
    role: "Pasteur",
    location: "Église MAISA-CI Doumbaro",
    image: pasteurTayoroDassise,
  },
  {
    name: "Pasteur GOKPIA Dago Thierry",
    role: "Pasteur",
    location: "Église MAISA-CI Kogbatroko",
    image: pasteurGokpiaThierry,
  },
  {
    name: "Évangéliste ADIGLA Emilie",
    role: "Évangéliste",
    location: "Église MAISA-CI Gnagbodougnoua",
    image: evangelisteAdiglaEmilie,
  },
  {
    name: "Pasteur GNAGBO Gapéa Pierre",
    role: "Pasteur",
    location: "Église MAISA-CI Ligrohoin",
    image: pasteurGnagboPierre,
  },
  {
    name: "Pasteur GNAGE Mel Claver",
    role: "Pasteur",
    location: "Église MAISA-CI Godililie",
    image: pasteurGnageClaver,
  },
  {
    name: "Évangéliste BLAKA Dakouri Louis",
    role: "Évangéliste",
    location: "",
    image: evangelisteBlakaLouis,
  },
];

const Team = () => {
  const founder = teamMembers.find((m) => m.isFounder);
  const otherMembers = teamMembers.filter((m) => !m.isFounder);

  return (
    <section id="equipe" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gold/10">
              <Users className="h-8 w-8 text-gold" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Notre Équipe
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des serviteurs dévoués au service du Seigneur et de la communauté
          </p>
        </motion.div>

        {/* Fondateur - Carte mise en avant */}
        {founder && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="max-w-md mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-primary to-gold rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl border-2 border-gold/30">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center bg-gradient-to-t from-navy/95 to-navy/80">
                    <div className="inline-block px-4 py-1 bg-gold/20 rounded-full mb-3">
                      <span className="text-gold text-sm font-semibold">Fondateur</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-gold font-medium">{founder.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Autres membres de l'équipe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-gold/30">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center bg-gradient-to-t from-card to-transparent">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mb-1">{member.role}</p>
                  {member.location && (
                    <p className="text-muted-foreground text-sm">{member.location}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
