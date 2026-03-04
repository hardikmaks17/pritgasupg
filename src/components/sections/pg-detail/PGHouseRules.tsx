import { HOUSE_RULES } from "@/data/pgData";

const PGHouseRules = () => (
  <div>
    <h2 className="text-xl font-heading font-bold text-secondary mb-4">House Rules</h2>
    <ul className="space-y-2">
      {HOUSE_RULES.map((r) => (
        <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
          {r}
        </li>
      ))}
    </ul>
  </div>
);

export default PGHouseRules;
