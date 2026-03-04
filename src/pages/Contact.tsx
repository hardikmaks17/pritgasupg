import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BRAND, CONTACTS, whatsappLink } from "@/data/pgData";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const userMessage = formData.get("message") as string;

    const message = `Hi, I'm ${name}. I have an enquiry regarding Pritgasu PG. You can reach me at ${phone}. My enquiry is about: ${userMessage}`;

    window.open(whatsappLink(message), "_blank");
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold">Contact Us</h1>
          <p className="mt-2 opacity-90">Get in touch for bookings and inquiries</p>
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="text-xl font-heading font-bold text-secondary mb-4">Get In Touch</h2>
                <div className="space-y-4">
                  {[CONTACTS.sudhir, CONTACTS.gayatri].map((c) => (
                    <Card key={c.name}>
                      <CardContent className="pt-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-secondary" />
                          <div>
                            <p className="font-semibold text-sm">{c.name}</p>
                            <p className="text-muted-foreground text-sm">{c.label}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
                            <a href={`https://wa.me/91${c.phone}`} target="_blank" rel="noopener noreferrer">
                              <SiWhatsapp className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="sm" asChild>
                            <a href={`tel:+91${c.phone}`}><Phone className="h-4 w-4" /></a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex items-center gap-3 p-4 bg-background rounded-lg">
                    <Mail className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <a href={`mailto:${BRAND.email}`} className="text-sm text-muted-foreground hover:text-secondary">{BRAND.email}</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-background rounded-lg">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Address</p>
                      <p className="text-sm text-muted-foreground">{BRAND.area}</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    title="Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.682!2d72.4993!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922b3b3e1%3A0x4b63b1f3e0c3c8a0!2sSatellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>

            {/* Sticky Inquiry Form */}
            <div>
              <div className="lg:sticky lg:top-24">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-heading font-bold text-secondary mb-4">Send Us a Message</h2>
                      {submitted ? (
                        <div className="text-center py-12">
                          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                          <p className="font-heading font-semibold text-lg">Message Sent!</p>
                          <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Your name" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                          </div>
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" name="message" placeholder="How can we help you?" rows={4} required />
                          </div>
                          <Button type="submit" className="w-full">Send Message</Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
