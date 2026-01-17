import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, Video } from "lucide-react";
import ShareButtons from "./ShareButtons";

interface MediaItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  alt: string;
}

interface MediaSectionProps {
  title: string;
  subtitle?: string;
  images: MediaItem[];
  videos?: MediaItem[];
  accentColor?: string;
}

const MediaSection = ({ title, subtitle, images, videos = [], accentColor = "blue" }: MediaSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  
  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  
  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const colorClasses = {
    blue: {
      tab: "bg-blue-600",
      gradient: "from-blue-500 to-blue-700",
    },
    purple: {
      tab: "bg-purple-600",
      gradient: "from-purple-500 to-purple-700",
    },
    green: {
      tab: "bg-green-600",
      gradient: "from-green-500 to-green-700",
    },
  };

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.blue;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
            {title}
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r ${colors.gradient} mx-auto rounded-full`} />
          {subtitle && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Tabs */}
        {videos.length > 0 && (
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "images"
                  ? `${colors.tab} text-white`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Photos
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "videos"
                  ? `${colors.tab} text-white`
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Video className="w-5 h-5" />
              Vidéos
            </button>
          </div>
        )}

        {/* Images Grid */}
        {activeTab === "images" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-soft cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <ImageIcon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Share Buttons for Images */}
            <div className="mt-8 pt-6 border-t border-border">
              <ShareButtons 
                title={`${title} - Photos`}
                text={`Découvrez les photos de ${title} - MAISA-CI`}
              />
            </div>
          </motion.div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative aspect-video overflow-hidden rounded-xl shadow-elegant"
                >
                  {video.src.includes("youtube") || video.src.includes("youtu.be") ? (
                    <iframe
                      src={video.src}
                      title={video.alt}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={video.thumbnail || video.src}
                        alt={video.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${colors.gradient} flex items-center justify-center shadow-lg`}>
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-medium">{video.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Share Buttons for Videos */}
            <div className="mt-8 pt-6 border-t border-border">
              <ShareButtons 
                title={`${title} - Vidéos`}
                text={`Regardez les vidéos de ${title} - MAISA-CI`}
              />
            </div>
          </motion.div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <p className="font-serif text-lg">{images[selectedImage].alt}</p>
              <p className="text-sm text-white/60">{selectedImage + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MediaSection;
