import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ROOM_TYPES, whatsappLink } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";
import SectionTitle from "@/components/shared/SectionTitle";

const PricingSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <SectionTitle badge="Pricing" title="Room Types & Pricing" subtitle="Transparent pricing, no hidden charges" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ROOM_TYPES.map((r, i) => (
          <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full">
            <Card className={`h-full flex flex-col text-center hover:shadow-lg transition-shadow bg-background ${i === 1 ? "border-2 border-secondary shadow-md" : "border border-border/60 shadow-sm"}`}>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="sm:min-h-[28px] mb-2 flex items-center justify-center">
                  {i === 1 && (
                    <span className="inline-flex bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-heading font-semibold">{r.type}</h3>
                <p className="text-sm text-muted-foreground mt-2">{r.sharing} · {r.acType}</p>

                <div className="mt-auto pt-8 pb-6">
                  <div className="text-3xl font-heading font-extrabold text-secondary">
                    ₹{r.price.toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">/month</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-10">
                  <a href={whatsappLink(`Hi, I'm interested in the ${r.type} (${r.sharing}, ${r.acType}) at ₹${r.price}/month.`)} target="_blank" rel="noopener noreferrer">
                    Enquire Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
