import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, CONTACTS } from "@/data/pgData";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-heading font-bold mb-3">
            <span className="text-primary">Pritgasu</span> PG
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            {BRAND.experience}+ years of trusted PG accommodation in Satellite, Ahmedabad.
            Safe, comfortable & affordable living for students and professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "Home", to: "/" },
              { label: "Our PGs", to: "/our-pgs" },
              { label: "Gallery", to: "/gallery" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>{CONTACTS.sudhir.name}: {CONTACTS.sudhir.label}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>{CONTACTS.gayatri.name}: {CONTACTS.gayatri.label}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span>{BRAND.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary mt-0.5" />
              <span>{BRAND.area}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
