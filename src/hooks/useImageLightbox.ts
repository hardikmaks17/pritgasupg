import { useState } from "react";

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxState {
  open: boolean;
  images: LightboxImage[];
  index: number;
}

const useImageLightbox = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    images: [],
    index: 0,
  });

  const openLightbox = (images: LightboxImage[], index = 0) => {
    setLightbox({ open: true, images, index });
  };

  const closeLightbox = () => setLightbox((prev) => ({ ...prev, open: false }));

  return { lightbox, openLightbox, closeLightbox };
};

export default useImageLightbox;
