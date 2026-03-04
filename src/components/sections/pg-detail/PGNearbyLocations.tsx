import { nearbyIcons } from "@/lib/iconMap";
import type { PGProperty } from "@/data/pgData";

interface PGNearbyLocationsProps {
  locations: PGProperty["nearbyLocations"];
}

const PGNearbyLocations = ({ locations }: PGNearbyLocationsProps) => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">Nearby Locations</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {locations.map((loc) => (
        <div key={loc.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-secondary shrink-0">
            {nearbyIcons[loc.type]}
          </div>
          <div>
            <p className="text-sm font-medium">{loc.name}</p>
            <p className="text-xs text-muted-foreground capitalize">{loc.type} · {loc.distance}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PGNearbyLocations;
