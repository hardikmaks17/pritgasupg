import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACTS, whatsappLink, callLink } from "@/data/pgData";

const ReadyToMoveIn = () => (
  <section className="py-16 bg-secondary text-secondary-foreground">
    <div className="container text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Ready to Move In?</h2>
        <p className="mb-6 opacity-90">Contact us today for the best PG accommodation in Satellite, Ahmedabad</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Button size="lg" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp — {CONTACTS.sudhir.label}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
            <a href={callLink()}>
              <Phone className="h-5 w-5" /> Call — {CONTACTS.sudhir.label}
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
            <a href={callLink("gayatri")}>
              <Phone className="h-5 w-5" /> Call — {CONTACTS.gayatri.label}
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReadyToMoveIn;
