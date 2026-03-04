import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { CONTACTS, whatsappLink, callLink } from "@/data/pgData";

const ReadyToMoveIn = () => (
  <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-1/3 translate-y-1/3" />
    </div>

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
          Start Your Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3">
          Ready to Move In?
        </h2>
        <p className="mb-8 text-secondary-foreground/80 text-lg">
          Contact us today for the best PG accommodation in Satellite, Ahmedabad
        </p>

        <div className="flex flex-col justify-center gap-3">
          <div className="flex flex-col md:flex-row justify-center flex-wrap gap-3">
            <Button
              size="lg"
              variant="outline"
              asChild
              className="grow border-2 border-secondary-foreground/30 text-secondary-foreground bg-transparent hover:bg-secondary-foreground/10 font-semibold"
            >
              <a href={callLink()}>
                <Phone className="h-5 w-5" /> {CONTACTS.sudhir.name} - {CONTACTS.sudhir.label}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="grow border-2 border-secondary-foreground/30 text-secondary-foreground bg-transparent hover:bg-secondary-foreground/10 font-semibold"
            >
              <a href={callLink("gayatri")}>
                <Phone className="h-5 w-5" /> {CONTACTS.gayatri.name} - {CONTACTS.gayatri.label}
              </a>
            </Button>
          </div>
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="h-5 w-5" />
              WhatsApp Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReadyToMoveIn;
