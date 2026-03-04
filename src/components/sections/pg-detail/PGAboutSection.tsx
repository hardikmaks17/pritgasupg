import type { PGProperty } from "@/data/pgData";

interface PGAboutSectionProps {
  pg: PGProperty;
}

const PGAboutSection = ({ pg }: PGAboutSectionProps) => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-3">About This PG</h2>
    <p className="text-muted-foreground">
      {pg.description}. Located in the heart of Satellite, Ahmedabad, this PG offers a comfortable and secure living environment with all modern amenities.
    </p>
  </div>
);

export default PGAboutSection;
