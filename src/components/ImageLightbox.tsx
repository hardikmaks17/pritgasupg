import { useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageLightbox = ({ images, initialIndex = 0, open, onOpenChange }: ImageLightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  if (!images.length) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none [&>button]:hidden">
        <div className="relative flex items-center justify-center min-h-[60vh]">
          <button onClick={() => onOpenChange(false)} className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-3 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={next} className="absolute right-3 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <img
            src={images[current]?.src}
            alt={images[current]?.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <div className="absolute bottom-4 left-0 w-full flex flex-wrap justify-center gap-1.5 px-8 z-50">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors shrink-0 ${i === current ? "bg-white" : "bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
