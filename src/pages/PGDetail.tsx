import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PG_PROPERTIES } from "@/data/pgData";
import useImageLightbox from "@/hooks/useImageLightbox";
import ImageLightbox from "@/components/ImageLightbox";
import ReadyToMoveIn from "@/components/shared/ReadyToMoveIn";
import PGDetailHeader from "@/components/sections/pg-detail/PGDetailHeader";
import PGImageCarousel from "@/components/sections/pg-detail/PGImageCarousel";
import PGAboutSection from "@/components/sections/pg-detail/PGAboutSection";
import PGPricingSection from "@/components/sections/pg-detail/PGPricingSection";
import PGFacilitiesSection from "@/components/sections/pg-detail/PGFacilitiesSection";
import PGHouseRules from "@/components/sections/pg-detail/PGHouseRules";
import PGNearbyLocations from "@/components/sections/pg-detail/PGNearbyLocations";
import PGFAQSection from "@/components/sections/pg-detail/PGFAQSection";
import PGLocationMap from "@/components/sections/pg-detail/PGLocationMap";
import PGEnquirySidebar from "@/components/sections/pg-detail/PGEnquirySidebar";

const PGDetail = () => {
  const { id } = useParams();
  const pg = PG_PROPERTIES.find((p) => p.id === id);
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  if (!pg) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">PG Not Found</h1>
        <Button asChild><Link to="/our-pgs">Back to Our PGs</Link></Button>
      </div>
    );
  }

  const galleryImages = pg.images.map((src, i) => ({ src, alt: `${pg.name} - Photo ${i + 1}` }));

  return (
    <>
      <PGDetailHeader pg={pg} />

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <PGImageCarousel pg={pg} galleryImages={galleryImages} onImageClick={(i) => openLightbox(galleryImages, i)} />
            <PGAboutSection pg={pg} />
            <PGPricingSection />
            <PGFacilitiesSection />
            <PGHouseRules />
            <PGNearbyLocations locations={pg.nearbyLocations} />
            <PGFAQSection />
            <PGLocationMap pg={pg} />
          </div>

          {/* Sidebar */}
          <PGEnquirySidebar initialPgId={id || ""} />
        </div>
      </div>

      <ReadyToMoveIn />

      <ImageLightbox
        images={lightbox.images}
        initialIndex={lightbox.index}
        open={lightbox.open}
        onOpenChange={closeLightbox}
      />
    </>
  );
};

export default PGDetail;
