import { Facebook, Share2, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title?: string;
  text?: string;
  className?: string;
}

const ShareButtons = ({ 
  title = "MAISA-CI", 
  text = "Découvrez MAISA-CI - Mission Apostolique Internationale du Salut en Action",
  className = "" 
}: ShareButtonsProps) => {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#1877F2]",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      bg: "bg-[#25D366]",
    },
    {
      name: "X (Twitter)",
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      bg: "bg-black",
    },
    {
      name: "LinkedIn",
      icon: () => (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`,
      bg: "bg-[#0A66C2]",
    },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.log("Partage annulé");
      }
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        Partager
      </p>
      <div className="flex items-center gap-3">
        {shareLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full ${link.bg} flex items-center justify-center hover:opacity-80 transition-opacity duration-300 text-white`}
              title={`Partager sur ${link.name}`}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
        {typeof navigator !== "undefined" && navigator.share && (
          <button
            onClick={handleNativeShare}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:opacity-80 transition-opacity duration-300 text-white"
            title="Plus d'options"
          >
            <Share2 className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShareButtons;
