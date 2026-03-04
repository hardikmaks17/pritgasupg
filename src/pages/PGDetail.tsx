import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Phone, ChevronLeft, CheckCircle, GraduationCap, Building2, HeartPulse, Bus, ShoppingBag } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { DateInput } from "@/components/ui/date";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import {
  PG_PROPERTIES, ROOM_TYPES, FACILITIES, HOUSE_RULES, FAQ_ITEMS,
  CONTACTS, whatsappLink, callLink,
} from "@/data/pgData";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ReadyToMoveIn from "@/components/ReadyToMoveIn";
import ImageLightbox, { useImageLightbox } from "@/components/ImageLightbox";

const nearbyIcons: Record<string, React.ReactNode> = {
  college: <GraduationCap className="h-4 w-4" />,
  office: <Building2 className="h-4 w-4" />,
  hospital: <HeartPulse className="h-4 w-4" />,
  transport: <Bus className="h-4 w-4" />,
  market: <ShoppingBag className="h-4 w-4" />,
};

const PGDetail = () => {
  const { id } = useParams();
  const pg = PG_PROPERTIES.find((p) => p.id === id);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPg, setSelectedPg] = useState(id || "");
  const [selectedRoom, setSelectedRoom] = useState("");
  const { lightbox, openLightbox, closeLightbox } = useImageLightbox();

  if (!pg) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-heading font-bold mb-4">PG Not Found</h1>
        <Button asChild><Link to="/our-pgs">Back to Our PGs</Link></Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const moveInDate = formData.get("movein") as string;
    
    const pgName = PG_PROPERTIES.find(p => p.id === selectedPg)?.name || "";
    const roomInfo = selectedRoom || "room not specified";

    const message = `Hi, I'm interested in staying at ${pgName}. I would like to know about the availability for ${roomInfo}. My expected move-in date is ${moveInDate}. Please let me know the details and next steps. Thank you.`;

    window.open(whatsappLink(message), "_blank");
    
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const galleryImages = pg.images.map((src, i) => ({ src, alt: `${pg.name} - Photo ${i + 1}` }));

  return (
    <>
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-8">
        <div className="container">
          <Link to="/our-pgs" className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100 mb-3">
            <ChevronLeft className="h-4 w-4" /> Back to Our PGs
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-heading font-extrabold">{pg.name}</h1>
            <AvailabilityBadge status={pg.availability} />
          </div>
          <p className="flex items-center gap-1 mt-3 opacity-90 text-sm"><MapPin className="h-4 w-4 shrink-0 hidden" /> {pg.address}</p>
        </div>
      </section>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel - arrows absolute */}
            <div className="relative">
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {pg.images.map((src, i) => (
                    <CarouselItem key={i}>
                      <div
                        className="aspect-video rounded-lg overflow-hidden bg-accent cursor-pointer"
                        onClick={() => openLightbox(galleryImages, i)}
                      >
                        <img src={src} alt={`${pg.name} - Photo ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-3">About This PG</h2>
              <p className="text-muted-foreground">{pg.description}. Located in the heart of Satellite, Ahmedabad, this PG offers a comfortable and secure living environment with all modern amenities.</p>
            </div>

            {/* Pricing - no selectable box */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Room Types & Pricing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ROOM_TYPES.map((r, i) => (
                  <Card key={i} className="border border-border">
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

            {/* Nearby Locations */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Nearby Locations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pg.nearbyLocations.map((loc) => (
                  <div key={loc.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-secondary shrink-0">
                      {nearbyIcons[loc.type]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{loc.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{loc.type} · {loc.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-heading font-bold text-secondary mb-4">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
                    </div>
                    <div>
                      <Label htmlFor="movein">Move-in Date</Label>
                      <DateInput 
                        id="movein" 
                        name="movein" 
                        placeholder="Select move-in date"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferred-pg">Preferred PG</Label>
                      <Select name="preferred-pg" value={selectedPg} onValueChange={setSelectedPg} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a PG" />
                        </SelectTrigger>
                        <SelectContent>
                          {PG_PROPERTIES.map((p) => (
                            <SelectItem key={p.id} value={p.id}>{p.name.split("—")[1]?.trim()}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="room-type">Interested Room Type</Label>
                      <Select  name="room-type" value={selectedRoom} onValueChange={setSelectedRoom} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          {ROOM_TYPES.map((r, i) => (
                            <SelectItem key={i} value={`${r.sharing}-${r.acType}`}>
                              {r.sharing} · {r.acType} - ₹{r.price.toLocaleString()}/mo
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button type="submit" className="w-full">Submit Enquiry</Button>
                  </form>
                )}

                <div className="space-y-2 pt-2">
                  {/* <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <a href={whatsappLink(`Hi, I'm interested in ${pg.name}.`)} target="_blank" rel="noopener noreferrer">
                      <SiWhatsapp className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button> */}
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

      <ReadyToMoveIn />

      <ImageLightbox
        images={lightbox.images}
        initialIndex={lightbox.index}
        open={lightbox.open}
        onOpenChange={closeLightbox}
      />
    </>
  );
};

export default PGDetail;
