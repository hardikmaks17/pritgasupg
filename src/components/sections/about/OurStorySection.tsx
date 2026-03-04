import { motion } from "framer-motion";
import { BRAND } from "@/data/pgData";
import pgBuilding1 from "@/assets/pg-building-1.jpg";
import pgRoom1 from "@/assets/pg-room-1.jpg";
import pgDining from "@/assets/pg-dining.jpg";

const OurStorySection = () => (
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
            With 8 strategically located properties in the Satellite and Ramdevnagar area, we offer a variety of room options
            to suit every budget — from AC and Non-AC premium rooms to drawing rooms. All our PGs come equipped
            with essential amenities including WiFi, housekeeping, laundry, and three home-cooked meals daily.
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
);

export default OurStorySection;
