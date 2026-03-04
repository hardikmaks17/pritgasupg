import { motion } from "framer-motion";
import { Shield, Heart, Users, Award, Clock, Home } from "lucide-react";
import { fadeUp } from "@/animations/variants";

const values = [
  { icon: <Shield className="h-7 w-7" />, title: "Safety First", desc: "24/7 security with CCTV surveillance for complete peace of mind" },
  { icon: <Heart className="h-7 w-7" />, title: "Homely Care", desc: "We treat every resident like family with personal attention and warmth" },
  { icon: <Users className="h-7 w-7" />, title: "Community", desc: "A vibrant community of students and working professionals" },
  { icon: <Award className="h-7 w-7" />, title: "Quality Living", desc: "Clean, well-maintained rooms with all modern amenities" },
  { icon: <Clock className="h-7 w-7" />, title: "10+ Years", desc: "Over a decade of trusted service in PG accommodation" },
  { icon: <Home className="h-7 w-7" />, title: "8 Properties", desc: "Multiple locations across Satellite and Remdev Nagar, Ahmedabad" },
];

const ValuesSection = () => (
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
);

export default ValuesSection;
