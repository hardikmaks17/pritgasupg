import { motion } from "framer-motion";
import { BRAND } from "@/data/pgData";

const AboutHeroSection = () => (
  <section className="bg-secondary text-secondary-foreground py-16 md:py-20">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
        <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          About Us
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight">
          Your Trusted PG Partner in Ahmedabad
        </h1>
        <p className="mt-4 text-secondary-foreground/80 text-lg">
          Providing safe, comfortable &amp; affordable PG accommodation since {new Date().getFullYear() - 10}+
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutHeroSection;
