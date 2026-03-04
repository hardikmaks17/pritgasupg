import { Card, CardContent } from "@/components/ui/card";
import { ROOM_TYPES } from "@/data/pgData";

const PGPricingSection = () => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">Room Types &amp; Pricing</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {ROOM_TYPES.map((r, i) => (
        <Card key={i} className="border border-border">
          <CardContent className="pt-4 space-y-1">
            <h3 className="font-heading font-semibold">{r.type}</h3>
            <p className="text-sm text-muted-foreground">{r.sharing} · {r.acType}</p>
            <p className="text-2xl font-heading font-extrabold text-secondary">
              ₹{r.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/month</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default PGPricingSection;
