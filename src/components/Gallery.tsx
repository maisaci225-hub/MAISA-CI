import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import gallery images
import convention1 from "@/assets/gallery/convention-1.png";
import convention2 from "@/assets/gallery/convention-2.png";
import convention3 from "@/assets/gallery/convention-3.png";
import convention4 from "@/assets/gallery/convention-4.png";
import convention5 from "@/assets/gallery/convention-5.png";
import convention6 from "@/assets/gallery/convention-6.png";
import convention7 from "@/assets/gallery/convention-7.png";
import convention8 from "@/assets/gallery/convention-8.png";
import convention9 from "@/assets/gallery/convention-9.png";

const galleryImages = [
  {
    id: 1,
    src: convention1,
    alt: "Moment de louange - Convention Sinaï 2025",
    category: "Convention Sinaï 2025"
  },
  {
    id: 2,
    src: convention2,
    alt: "Adoration intense",
    category: "Convention Sinaï 2025"
  },
  {
    id: 3,
    src: convention3,
    alt: "Prière fervente",
    category: "Convention Sinaï 2025"
  },
  {
    id: 4,
    src: convention4,
    alt: "Communion fraternelle",
    category: "Convention Sinaï 2025"
  },
  {
    id: 5,
    src: convention5,
    alt: "Assemblée en prière",
    category: "Convention Sinaï 2025"
  },
  {
    id: 6,
    src: convention6,
    alt: "Soldats Sinaï",
    category: "Convention Sinaï 2025"
  },
  {
    id: 7,
    src: convention7,
    alt: "Grande assemblée",
    category: "Convention Sinaï 2025"
  },
  {
    id: 8,
    src: convention8,
    alt: "Vue d'ensemble du culte",
    category: "Convention Sinaï 2025"
  },
  {
    id: 9,
    src: convention9,
    alt: "Groupe de louange",
    category: "Convention Sinaï 2025"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary">
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
            Notre Galerie
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Revivez les moments forts de la Convention Sinaï 2025 à travers ces images de notre communauté en adoration.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-soft cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {image.category}
                </span>
                <h3 className="text-primary-foreground font-serif text-lg font-semibold">
                  {image.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-serif text-lg">{galleryImages[selectedImage].alt}</p>
              <p className="text-sm text-white/60">{selectedImage + 1} / {galleryImages.length}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
