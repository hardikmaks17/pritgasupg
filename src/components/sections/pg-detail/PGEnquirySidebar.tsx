import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateInput } from "@/components/ui/date";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PG_PROPERTIES, ROOM_TYPES, CONTACTS, whatsappLink, callLink } from "@/data/pgData";

interface PGEnquirySidebarProps {
  initialPgId: string;
}

const PGEnquirySidebar = ({ initialPgId }: PGEnquirySidebarProps) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPg, setSelectedPg] = useState(initialPgId);
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const moveInDate = formData.get("movein") as string;

    const pgName = PG_PROPERTIES.find((p) => p.id === selectedPg)?.name || "";
    const roomInfo = selectedRoom || "room not specified";

    const message = `Hi, I'm interested in staying at ${pgName}. I would like to know about the availability for ${roomInfo}. My expected move-in date is ${moveInDate}. Please let me know the details and next steps. Thank you.`;

    window.open(whatsappLink(message), "_blank");

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
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
                <DateInput id="movein" name="movein" placeholder="Select move-in date" required />
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
                <Select name="room-type" value={selectedRoom} onValueChange={setSelectedRoom} required>
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
  );
};

export default PGEnquirySidebar;
