import { Link } from "react-router-dom";
import { MapPin, ChevronLeft } from "lucide-react";
import AvailabilityBadge from "@/components/shared/AvailabilityBadge";
import type { PGProperty } from "@/data/pgData";

interface PGDetailHeaderProps {
  pg: PGProperty;
}

const PGDetailHeader = ({ pg }: PGDetailHeaderProps) => (
  <section className="bg-secondary text-secondary-foreground py-8">
    <div className="container">
      <Link to="/our-pgs" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-3">
        <ChevronLeft className="h-4 w-4" /> Back to Our PGs
      </Link>
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-heading font-extrabold">{pg.name}</h1>
        <AvailabilityBadge status={pg.availability} />
      </div>
      <p className="flex items-center gap-1 mt-3 opacity-90 text-sm"><MapPin className="h-4 w-4 shrink-0 hidden" /> {pg.address}</p>
    </div>
  </section>
);

export default PGDetailHeader;
