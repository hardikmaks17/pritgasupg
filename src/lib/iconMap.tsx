import {
  Home, Snowflake, UtensilsCrossed, Wifi, MapPin, Shield,
  Bed, Tv, Droplets, Flame, Bike,
  GraduationCap, Building2, HeartPulse, Bus, ShoppingBag,
} from "lucide-react";

/** Icons used in Highlights and Facilities sections */
export const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-6 w-6" />,
  Snowflake: <Snowflake className="h-6 w-6" />,
  UtensilsCrossed: <UtensilsCrossed className="h-6 w-6" />,
  Wifi: <Wifi className="h-6 w-6" />,
  MapPin: <MapPin className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Bed: <Bed className="h-5 w-5" />,
  Tv: <Tv className="h-5 w-5" />,
  Refrigerator: <Snowflake className="h-5 w-5" />,
  Droplets: <Droplets className="h-5 w-5" />,
  Flame: <Flame className="h-5 w-5" />,
  SprayCanIcon: <Droplets className="h-5 w-5" />,
  CookingPot: <UtensilsCrossed className="h-5 w-5" />,
  Bike: <Bike className="h-5 w-5" />,
  WashingMachine: <Droplets className="h-5 w-5" />,
};

/** Icons used in PG Detail nearby locations */
export const nearbyIcons: Record<string, React.ReactNode> = {
  college: <GraduationCap className="h-4 w-4" />,
  office: <Building2 className="h-4 w-4" />,
  hospital: <HeartPulse className="h-4 w-4" />,
  transport: <Bus className="h-4 w-4" />,
  market: <ShoppingBag className="h-4 w-4" />,
};
