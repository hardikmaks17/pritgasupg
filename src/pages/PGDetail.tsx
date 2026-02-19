import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, ChevronLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PG_PROPERTIES, ROOM_TYPES, FACILITIES, HOUSE_RULES,
  CONTACTS, whatsappLink, callLink,
} from "@/data/pgData";

const PGDetail = () => {
  const { id } = useParams();
  const pg = PG_PROPERTIES.find((p) => p.id === id);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!pg) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">PG Not Found</h1>
        <Button asChild><Link to="/our-pgs">Back to Our PGs</Link></Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-8">
        <div className="container">
          <Link to="/our-pgs" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-3">
            <ChevronLeft className="h-4 w-4" /> Back to Our PGs
          </Link>
          <h1 className="text-2xl md:text-3xl font-heading font-extrabold">{pg.name}</h1>
          <p className="flex items-center gap-1 mt-1 opacity-90 text-sm"><MapPin className="h-4 w-4" /> {pg.address}</p>
        </div>
      </section>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-lg overflow-hidden">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-video bg-accent">
                  <img src="/placeholder.svg" alt={`${pg.name} - Photo ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-3">About This PG</h2>
              <p className="text-muted-foreground">{pg.description}. Located in the heart of Satellite, Ahmedabad, this PG offers a comfortable and secure living environment with all modern amenities.</p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Room Types & Pricing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOM_TYPES.map((r, i) => (
                  <Card key={i} className={i === 0 ? "border-2 border-secondary" : ""}>
                    <CardContent className="pt-4 space-y-1">
                      <h3 className="font-heading font-semibold">{r.type}</h3>
                      <p className="text-sm text-muted-foreground">{r.sharing} · {r.acType}</p>
                      <p className="text-2xl font-heading font-extrabold text-secondary">₹{r.price.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/month</span></p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Facilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {FACILITIES.map((f) => (
                  <div key={f.label} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                    {f.label}
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">House Rules</h2>
              <ul className="space-y-2">
                {HOUSE_RULES.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Location</h2>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <iframe
                  title={`${pg.name} Location`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.682!2d72.4993!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922b3b3e1%3A0x4b63b1f3e0c3c8a0!2sSatellite%2C%20Ahmedabad%2C%20Gujarat%20380015!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Inquiry Form */}
            <Card className="sticky top-20">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-heading font-bold text-lg text-secondary">Enquire Now</h3>
                {formSubmitted ? (
                  <div className="text-center py-6">
                    <CheckCircle className="h-10 w-10 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold">Thank you!</p>
                    <p className="text-sm text-muted-foreground">We'll contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="Your phone number" required />
                    </div>
                    <div>
                      <Label htmlFor="movein">Move-in Date</Label>
                      <Input id="movein" type="date" required />
                    </div>
                    <Button type="submit" className="w-full">Submit Enquiry</Button>
                  </form>
                )}

                <div className="space-y-2 pt-2">
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a href={whatsappLink(`Hi, I'm interested in ${pg.name}.`)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href={callLink()}>
                      <Phone className="h-4 w-4" /> {CONTACTS.sudhir.name} — {CONTACTS.sudhir.label}
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="w-full">
                    <a href={callLink("gayatri")}>
                      <Phone className="h-4 w-4" /> {CONTACTS.gayatri.name} — {CONTACTS.gayatri.label}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PGDetail;
