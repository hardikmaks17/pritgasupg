import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import { FACILITIES } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";
import { iconMap } from "@/lib/iconMap";
import SectionTitle from "@/components/shared/SectionTitle";

const FacilitiesSection = () => (
  <section className="py-16 bg-muted">
    <div className="container">
      <SectionTitle badge="Amenities" title="Facilities & Amenities" subtitle="Everything for a comfortable stay" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {FACILITIES.map((f, i) => (
          <motion.div
            key={f.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center gap-2 text-center p-3 rounded-lg bg-background shadow-sm"
          >
            <div className="text-secondary">{iconMap[f.icon] || <Wifi className="h-5 w-5" />}</div>
            <span className="text-xs font-medium">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
