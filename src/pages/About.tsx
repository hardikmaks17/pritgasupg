import { motion } from "framer-motion";
import { Shield, Heart, Users } from "lucide-react";
import { BRAND, CONTACTS } from "@/data/pgData";

const About = () => (
  <>
    <section className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold">About Us</h1>
        <p className="mt-2 opacity-90">Your trusted PG partner in Satellite, Ahmedabad</p>
      </div>
    </section>

    <section className="py-12 bg-background">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="font-heading font-bold text-foreground">{BRAND.name}</span> has over{" "}
            <span className="font-bold text-secondary">{BRAND.experience}+ years</span> of experience providing
            safe and comfortable PG accommodation in Satellite, Ahmedabad for students and working professionals.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to provide affordable, clean, and secure living spaces with quality home-cooked food
            and modern facilities. We understand that moving to a new city can be challenging, which is why we
            strive to create a welcoming and homely environment where residents feel safe and comfortable.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With 8 strategically located properties in the Satellite area, we offer a variety of room options
            to suit every budget — from AC and Non-AC standard rooms to drawing rooms. All our PGs come equipped
            with essential amenities including WiFi, housekeeping, laundry, and three home-cooked Gujarati meals daily.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: <Shield className="h-8 w-8" />, title: "Safety First", desc: "24/7 security with CCTV surveillance for peace of mind" },
            { icon: <Heart className="h-8 w-8" />, title: "Homely Care", desc: "We treat every resident like family with personal attention" },
            { icon: <Users className="h-8 w-8" />, title: "Community", desc: "A vibrant community of students and working professionals" },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6 rounded-lg bg-muted"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-secondary mb-3">
                {v.icon}
              </div>
              <h3 className="font-heading font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Managed By */}
        <div className="mt-12 bg-accent rounded-lg p-6">
          <h2 className="text-xl font-heading font-bold text-secondary mb-4 text-center">Managed By</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[CONTACTS.sudhir, CONTACTS.gayatri].map((c) => (
              <div key={c.name} className="text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <Users className="h-7 w-7 text-secondary" />
                </div>
                <p className="font-heading font-semibold">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
