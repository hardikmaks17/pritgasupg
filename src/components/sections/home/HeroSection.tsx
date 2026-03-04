import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { BRAND, whatsappLink } from "@/data/pgData";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-muted">
    <div className="container py-16 md:py-24">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
        <span className="inline-block bg-primary/20 text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          Satellite, Ahmedabad
        </span>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold leading-tight text-foreground mb-4">{BRAND.tagline}</h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">{BRAND.subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" asChild><Link to="/our-pgs"><ChevronRight className="h-4 w-4" /> View Our PGs</Link></Button>
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><SiWhatsapp className="h-4 w-4" /> WhatsApp Now</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
