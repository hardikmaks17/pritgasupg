import { CheckCircle } from "lucide-react";
import { FACILITIES } from "@/data/pgData";

const PGFacilitiesSection = () => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">Facilities</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {FACILITIES.map((f) => (
        <div key={f.label} className="flex items-center gap-2 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
          {f.label}
        </div>
      ))}
    </div>
  </div>
);

export default PGFacilitiesSection;
