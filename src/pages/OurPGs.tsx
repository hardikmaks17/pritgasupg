import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PG_PROPERTIES, pgLink } from "@/data/pgData";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ReadyToMoveIn from "@/components/ReadyToMoveIn";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

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
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full">
                <Link
                  to={pgLink(pg.id)}
                  className="aspect-video bg-accent overflow-hidden relative block"
                >
                  <img src={pg.image} alt={pg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <AvailabilityBadge status={pg.availability} className="absolute top-3 right-3" />
                </Link>
                <CardContent className="pt-4 space-y-2">
                  <Link to={pgLink(pg.id)} className="hover:text-secondary transition-colors inline-block">
                    <h3 className="font-heading font-semibold">{pg.name}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{pg.description}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3 shrink-0 hidden" /> {pg.address}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-secondary">From ₹{pg.startingPrice.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                    <Button size="sm" asChild><Link to={pgLink(pg.id)}>View Details</Link></Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <ReadyToMoveIn />
    </>
  );
};

export default OurPGs;
