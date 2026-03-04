import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import type { PGProperty } from "@/data/pgData";

interface PGImageCarouselProps {
  pg: PGProperty;
  galleryImages: { src: string; alt: string }[];
  onImageClick: (index: number) => void;
}

const PGImageCarousel = ({ pg, galleryImages, onImageClick }: PGImageCarouselProps) => (
  <div className="relative">
    <Carousel opts={{ loop: true }}>
      <CarouselContent>
        {pg.images.map((src, i) => (
          <CarouselItem key={i}>
            <div
              className="aspect-video rounded-lg overflow-hidden bg-accent cursor-pointer"
              onClick={() => onImageClick(i)}
            >
              <img src={src} alt={`${pg.name} - Photo ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2" />
      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2" />
    </Carousel>
  </div>
);

export default PGImageCarousel;
