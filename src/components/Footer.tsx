import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook, SiWhatsapp, SiGoogle } from "react-icons/si";
import { BRAND, CONTACTS, SOCIAL_LINKS } from "@/data/pgData";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Brand */}
        <div className="md:col-span-12 lg:col-span-5">
          <h3 className="text-lg font-heading font-bold mb-3">
            <span className="text-primary">Pritgasu</span> PG
          </h3>
          <p className="text-sm opacity-80 leading-relaxed mb-6 sm:max-w-sm">
            {BRAND.experience}+ years of trusted PG accommodation in Satellite, Ahmedabad.
            Safe, comfortable & affordable living for students and professionals.
          </p>
          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
              <SiFacebook className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
              <SiWhatsapp className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.maps} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors opacity-80 hover:opacity-100">
              <SiGoogle className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-4 lg:col-span-3">
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
        <div className="md:col-span-8 lg:col-span-4">
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
              <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
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
