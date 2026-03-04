import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { whatsappLink, callLink } from "@/data/pgData";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Our PGs", to: "/our-pgs" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === "/our-pgs" && location.pathname.startsWith("/pg/"));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-18">
        <Link to="/" className="flex items-center gap-2">
          <img src="/pritgasu-pg-logo.png" alt="Pritgasu PG Logo" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-xl font-heading font-extrabold tracking-tight">
            <span className="text-secondary">Pritgasu</span>{" "}
            <span className="text-foreground">PG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent ${
                isActive(l.to) ? "text-secondary font-semibold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          {/* <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <SiWhatsapp className="h-4 w-4" /> WhatsApp
            </a>
          </Button> */}
          <Button size="sm" asChild>
            <a href={callLink()}>
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent ${
                    isActive(l.to) ? "text-secondary bg-accent font-semibold" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-3 px-4">
                {/* <Button size="sm" asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="h-4 w-4" /> WhatsApp
                  </a>
                </Button> */}
                <Button size="sm" asChild className="flex-1">
                  <a href={callLink()}>
                    <Phone className="h-4 w-4" /> Call Us
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
