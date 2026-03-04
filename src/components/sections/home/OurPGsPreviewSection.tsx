import { motion } from "framer-motion";
import { PG_PROPERTIES } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";
import PGCard from "@/components/PGCard";
import SectionTitle from "@/components/shared/SectionTitle";

const OurPGsPreviewSection = () => (
  <section className="py-16 bg-muted">
    <div className="container">
      <SectionTitle badge="Properties" title="Our PG Locations" subtitle="8 well-maintained properties across Satellite and Ramdev Nagar, Ahmedabad" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PG_PROPERTIES.map((pg, i) => (
          <motion.div key={pg.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
            <PGCard pg={pg} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default OurPGsPreviewSection;
