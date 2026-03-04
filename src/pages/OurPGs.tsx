import { motion } from "framer-motion";
import { PG_PROPERTIES } from "@/data/pgData";
import PGCard from "@/components/PGCard";
import ReadyToMoveIn from "@/components/shared/ReadyToMoveIn";
import { fadeUp } from "@/animations/variants";



const OurPGs = () => {
  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold">Our PG Properties</h1>
          <p className="mt-2 opacity-90">8 well-maintained PG locations in Satellite and Ramdev Nagar, Ahmedabad</p>
        </div>
      </section>
      <section className="py-12 bg-muted">
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PG_PROPERTIES.map((pg, i) => (
            <motion.div key={pg.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <PGCard pg={pg} />
            </motion.div>
          ))}
        </div>
      </section>
      <ReadyToMoveIn />
    </>
  );
};

export default OurPGs;
