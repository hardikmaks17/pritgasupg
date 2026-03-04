import { motion } from "framer-motion";
import { CONTACTS } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";

const TeamSection = () => (
  <section className="py-16 bg-background">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <span className="inline-block bg-accent text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
          Leadership
        </span>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">Meet Our Team</h2>
        <p className="mt-2 text-muted-foreground">Dedicated to providing you the best living experience</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[CONTACTS.sudhir, CONTACTS.gayatri].map((c, i) => (
          <motion.div
            key={c.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-muted rounded-xl p-8 text-center"
          >
            <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-heading font-bold text-secondary">{c.name.charAt(0)}</span>
            </div>
            <h3 className="font-heading font-bold text-lg">{c.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">Manager &amp; Co-founder</p>
            <p className="text-secondary font-semibold mt-2">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
