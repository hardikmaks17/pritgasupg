import { type AvailabilityStatus } from "@/data/pgData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const statusStyles: Record<AvailabilityStatus, string> = {
  Available: "bg-green-600 text-white hover:bg-green-600",
  "Limited Availability": "bg-amber-500 text-white hover:bg-amber-500",
  "Fully Occupied": "bg-destructive text-destructive-foreground hover:bg-destructive",
};

const AvailabilityBadge = ({ status, className }: { status: AvailabilityStatus; className?: string }) => (
  <Badge className={cn(statusStyles[status], "text-xs font-semibold", className)}>{status}</Badge>
);

export default AvailabilityBadge;
