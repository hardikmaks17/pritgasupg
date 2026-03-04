import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home, Snowflake, UtensilsCrossed, Wifi, MapPin, Shield, Phone, MessageCircle,
  Bed, Tv, Droplets, Flame, Car, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BRAND, PG_PROPERTIES, ROOM_TYPES, FACILITIES, MEAL_PLAN,
  HIGHLIGHTS, whatsappLink, callLink,
} from "@/data/pgData";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ReadyToMoveIn from "@/components/ReadyToMoveIn";
import TestimonialSlider from "@/components/TestimonialSlider";
import ImageLightbox, { useImageLightbox } from "@/components/ImageLightbox";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-6 w-6" />,
  Snowflake: <Snowflake className="h-6 w-6" />,
  UtensilsCrossed: <UtensilsCrossed className="h-6 w-6" />,
  Wifi: <Wifi className="h-6 w-6" />,
  MapPin: <MapPin className="h-6 w-6" />,
  Shield: <Shield className="h-6 w-6" />,
  Bed: <Bed className="h-5 w-5" />,
  Tv: <Tv className="h-5 w-5" />,
  Refrigerator: <Snowflake className="h-5 w-5" />,
  Droplets: <Droplets className="h-5 w-5" />,
  Flame: <Flame className="h-5 w-5" />,
  SprayCanIcon: <Droplets className="h-5 w-5" />,
  CookingPot: <UtensilsCrossed className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  WashingMachine: <Droplets className="h-5 w-5" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const SectionTitle = ({ badge, title, subtitle }: { badge?: string; title: string; subtitle?: string }) => (
  <div className="text-center mb-10">
    {badge && (
      <span className="inline-block bg-accent text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">{title}</h2>
    {subtitle && <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
  </div>
);

const Index = () => {
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  return (
    <>
      {/* Hero */}
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
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild><a href={callLink()}><Phone className="h-4 w-4" /> Call Now</a></Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
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

      {/* Our PGs Preview */}
      <section className="py-16 bg-muted">
        <div className="container">
          <SectionTitle badge="Properties" title="Our PG Locations" subtitle="8 well-maintained properties across Satellite, Ahmedabad" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PG_PROPERTIES.map((pg, i) => (
              <motion.div key={pg.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div
                    className="aspect-video bg-accent overflow-hidden relative cursor-pointer"
                    onClick={() => openLightbox(pg.images.map((src, j) => ({ src, alt: `${pg.name} - ${j + 1}` })), 0)}
                  >
                    <img src={pg.image} alt={pg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <AvailabilityBadge status={pg.availability} className="absolute top-2 right-2" />
                  </div>
                  <CardContent className="pt-4 space-y-2">
                    <h3 className="font-heading font-semibold text-sm leading-tight">{pg.name}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1"><MapPin className="h-3 w-3" /> {pg.address.split(",")[0]}</p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-bold text-secondary">₹{pg.startingPrice.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
                      <Button size="sm" variant="outline" asChild className="text-xs h-7"><Link to={`/pg/${pg.id}`}>Details</Link></Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meal Plan */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionTitle badge="Food" title="Home-Cooked Meal Plan" subtitle="Delicious Gujarati meals served 3 times a day" />
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
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-muted">
        <div className="container">
          <SectionTitle badge="Amenities" title="Facilities & Amenities" subtitle="Everything for a comfortable stay" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {FACILITIES.map((f, i) => (
              <motion.div key={f.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center gap-2 text-center p-3 rounded-lg bg-background shadow-sm">
                <div className="text-secondary">{iconMap[f.icon] || <Wifi className="h-5 w-5" />}</div>
                <span className="text-xs font-medium">{f.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionTitle badge="Pricing" title="Room Types & Pricing" subtitle="Transparent pricing, no hidden charges" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROOM_TYPES.map((r, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className={`h-full text-center hover:shadow-lg transition-shadow ${i === 0 ? "border-2 border-secondary" : ""}`}>
                  <CardContent className="pt-6 space-y-3">
                    {i === 0 && <span className="inline-block bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full">Most Popular</span>}
                    <h3 className="font-heading font-semibold">{r.type}</h3>
                    <p className="text-sm text-muted-foreground">{r.sharing} · {r.acType}</p>
                    <div className="text-3xl font-heading font-extrabold text-secondary">₹{r.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
                    <Button size="sm" asChild className="w-full">
                      <a href={whatsappLink(`Hi, I'm interested in ${r.sharing} ${r.acType} room at ₹${r.price}/month.`)} target="_blank" rel="noopener noreferrer">Enquire Now</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Location Map */}
      <section className="py-16 bg-background">
        <div className="container">
          <SectionTitle badge="Location" title="Find Us in Satellite, Ahmedabad" />
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Pritgasu PG Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.682!2d72.4993!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922b3b3e1%3A0x4b63b1f3e0c3c8a0!2sSatellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <ReadyToMoveIn />

      <ImageLightbox
        images={lightbox.images}
        initialIndex={lightbox.index}
        open={lightbox.open}
        onOpenChange={closeLightbox}
      />
    </>
  );
};

export default Index;
