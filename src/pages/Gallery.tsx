import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/data/pgData";

const CATEGORIES = ["all", "rooms", "building", "facilities", "food"] as const;

const Gallery = () => {
  const [active, setActive] = useState<string>("all");

  const allImages = Object.entries(GALLERY_IMAGES).flatMap(([cat, imgs]) =>
    imgs.map((img) => ({ ...img, category: cat }))
  );

  const filtered = active === "all" ? allImages : allImages.filter((i) => i.category === active);

  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold">Gallery</h1>
          <p className="mt-2 opacity-90">Take a look at our PG rooms, buildings and facilities</p>
        </div>
      </section>

      <section className="py-10 bg-muted">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="aspect-square rounded-lg overflow-hidden bg-accent"
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
