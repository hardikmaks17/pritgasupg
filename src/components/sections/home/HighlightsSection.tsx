import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { HIGHLIGHTS } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";
import { iconMap } from "@/lib/iconMap";
import SectionTitle from "@/components/shared/SectionTitle";

const HighlightsSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <SectionTitle badge="Why Choose Us" title="Why Pritgasu PG?" subtitle="Everything you need for comfortable living" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div key={h.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="h-full text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6 flex flex-col items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-secondary">{iconMap[h.icon]}</div>
                <h3 className="font-heading font-semibold text-sm md:text-base">{h.title}</h3>
                <p className="text-xs text-muted-foreground">{h.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
