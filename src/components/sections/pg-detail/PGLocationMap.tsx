import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PGProperty } from "@/data/pgData";

interface PGLocationMapProps {
  pg: PGProperty;
}

const PGLocationMap = ({ pg }: PGLocationMapProps) => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">Location</h2>
    <div className="rounded-lg overflow-hidden shadow-sm">
      <iframe
        title={`${pg.name} Location`}
        src={pg.googleMap.embedUrl}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="mt-3 flex justify-start">
      <Button variant="outline" color="primary" asChild className="text-xs gap-1.5">
        <a href={pg.googleMap.link} target="_blank" rel="noopener noreferrer">
          <MapPin className="h-3.5 w-3.5" />
          Open in Google Maps
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </Button>
    </div>
  </div>
);

export default PGLocationMap;
