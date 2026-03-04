import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Clock, Home } from "lucide-react";
import { BRAND, CONTACTS } from "@/data/pgData";
import ReadyToMoveIn from "@/components/ReadyToMoveIn";
import pgBuilding1 from "@/assets/pg-building-1.jpg";
import pgRoom1 from "@/assets/pg-room-1.jpg";
import pgDining from "@/assets/pg-dining.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: <Shield className="h-7 w-7" />, title: "Safety First", desc: "24/7 security with CCTV surveillance for complete peace of mind" },
  { icon: <Heart className="h-7 w-7" />, title: "Homely Care", desc: "We treat every resident like family with personal attention and warmth" },
  { icon: <Users className="h-7 w-7" />, title: "Community", desc: "A vibrant community of students and working professionals" },
  { icon: <Award className="h-7 w-7" />, title: "Quality Living", desc: "Clean, well-maintained rooms with all modern amenities" },
  { icon: <Clock className="h-7 w-7" />, title: "10+ Years", desc: "Over a decade of trusted service in PG accommodation" },
  { icon: <Home className="h-7 w-7" />, title: "8 Properties", desc: "Multiple locations across Satellite, Ahmedabad" },
];

const About = () => (
  <>
    {/* Hero */}
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
            Providing safe, comfortable & affordable PG accommodation since {new Date().getFullYear() - 10}+
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <span className="inline-block bg-accent text-secondary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">
              More Than Just a PG — It's Home
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-heading font-bold text-foreground">{BRAND.name}</span> has over{" "}
              <span className="font-bold text-secondary">{BRAND.experience} years</span> of experience providing
              safe and comfortable PG accommodation in Satellite, Ahmedabad for students and working professionals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide affordable, clean, and secure living spaces with quality home-cooked food
              and modern facilities. We understand that moving to a new city can be challenging, which is why we
              strive to create a welcoming and homely environment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With 8 strategically located properties in the Satellite area, we offer a variety of room options
              to suit every budget — from AC and Non-AC standard rooms to drawing rooms. All our PGs come equipped
              with essential amenities including WiFi, housekeeping, laundry, and three home-cooked Gujarati meals daily.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <img src={pgBuilding1} alt="PG Building" className="rounded-xl w-full h-48 object-cover shadow-md" />
              <img src={pgDining} alt="Dining Area" className="rounded-xl w-full h-32 object-cover shadow-md" />
            </div>
            <div className="space-y-3 pt-6">
              <img src={pgRoom1} alt="PG Room" className="rounded-xl w-full h-32 object-cover shadow-md" />
              <div className="rounded-xl bg-secondary p-6 text-secondary-foreground text-center shadow-md">
                <div className="text-3xl font-heading font-extrabold">{BRAND.experience}</div>
                <div className="text-sm mt-1 opacity-80">Years of Trust</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent text-secondary text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Our Values
          </span>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary">Why Families Trust Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-secondary mb-4">
                {v.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Managed By */}
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
              <p className="text-muted-foreground text-sm mt-1">Manager & Co-founder</p>
              <p className="text-secondary font-semibold mt-2">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <ReadyToMoveIn />
  </>
);

export default About;
