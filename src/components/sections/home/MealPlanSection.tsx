import { motion } from "framer-motion";
import { UtensilsCrossed, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MEAL_PLAN } from "@/data/pgData";
import { fadeUp } from "@/animations/variants";
import SectionTitle from "@/components/shared/SectionTitle";

const MealPlanSection = () => (
  <section className="py-16 bg-background">
    <div className="container">
      <SectionTitle badge="Food" title="Home-Cooked Meal Plan" subtitle="Delicious meals served 3 times a day" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(["breakfast", "lunch", "dinner"] as const).map((meal, i) => (
          <motion.div key={meal} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-secondary"><UtensilsCrossed className="h-4 w-4" /></div>
                  <h3 className="font-heading font-semibold capitalize">{meal}</h3>
                </div>
                <ul className="space-y-1.5">
                  {MEAL_PLAN[meal].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-6 sm:mt-12 flex justify-center max-w-3xl mx-auto">
        <div className="bg-muted rounded-md px-5 py-3 flex gap-4 text-sm text-muted-foreground border border-border/40 shadow-sm max-w-fit">
          <Info className="h-4 w-4 mt-1 text-secondary shrink-0" />
          <span>All meals are freshly prepared in a hygienic kitchen. The menu may be updated occasionally based on seasonal ingredients and feedback from our residents to maintain variety.</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MealPlanSection;
