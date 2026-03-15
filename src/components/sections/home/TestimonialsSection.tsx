import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS, mainReviewLink } from "@/data/pgData";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  const t = TESTIMONIALS[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container">
        <SectionTitle badge="Reviews" title="What Our Residents Say" />

        {/* Google rating summary */}
        <div className="flex flex-col items-center mt-6 mb-12 text-center">

          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl font-bold text-foreground">4.9+</span>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Based on many happy residents
          </p>

        </div>

        {/* Testimonial card */}
        <div className="relative max-w-2xl mx-auto">
          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 p-2 rounded-full bg-background shadow-md hover:shadow-lg text-secondary transition-all"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 p-2 rounded-full bg-background shadow-md hover:shadow-lg text-secondary transition-all"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Card */}
          <div className="px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="bg-background rounded-2xl p-8 md:p-10 shadow-lg text-center relative"
              >
                <Quote className="h-8 w-8 text-primary/40 mx-auto mb-4" />

                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-border" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed mb-6 whitespace-pre-line">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-heading font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`h-2.5 rounded-full transition-all duration-300 shrink-0 ${
                  i === current ? "w-8 bg-secondary" : "w-2.5 bg-secondary/25"
                }`}
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <a
              href={mainReviewLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all Google Reviews
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
