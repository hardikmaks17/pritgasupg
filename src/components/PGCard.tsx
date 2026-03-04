import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AvailabilityBadge from "@/components/shared/AvailabilityBadge";
import { pgLink } from "@/data/pgData";
import type { PGProperty } from "@/data/pgData";

interface PGCardProps {
  pg: PGProperty;
}

const PGCard = ({ pg }: PGCardProps) => {
  const detailLink = pgLink(pg.id);

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow group">
      <Link
        to={detailLink}
        className="aspect-video bg-accent overflow-hidden relative block shrink-0"
      >
        <img
          src={pg.image}
          alt={pg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <AvailabilityBadge status={pg.availability} className="absolute top-2 right-2" />
      </Link>

      <CardContent className="pt-4 flex flex-col flex-grow">
        <Link to={detailLink} className="hover:text-secondary transition-colors">
          <h3 className="font-heading font-semibold text-sm leading-tight mb-2">{pg.name}</h3>
        </Link>

        {pg.description && (
          <p className="text-sm text-muted-foreground mb-1">{pg.description}</p>
        )}

        <p className="text-xs text-muted-foreground mb-3">{pg.address}</p>

        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="text-sm font-bold text-secondary">
            ₹{pg.startingPrice.toLocaleString()}
            <span className="text-xs font-normal text-muted-foreground">/month</span>
          </span>
          <Button size="sm" variant="outline" asChild className="text-xs h-7">
            <Link to={detailLink}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PGCard;
