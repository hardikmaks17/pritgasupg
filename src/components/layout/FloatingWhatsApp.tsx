import { SiWhatsapp } from "react-icons/si";
import { whatsappLink } from "@/data/pgData";

const FloatingWhatsApp = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 flex items-center justify-center text-white transition-all shadow-lg 
      /* Mobile and Tablet (less than md): Full width bottom bar, secondary color */
      bg-secondary hover:bg-secondary/90 bottom-0 left-0 right-0 h-10 w-full gap-2 rounded-none text-sm font-semibold 
      /* Desktop (md and up): Floating round icon, green color */
      md:bg-green-600 md:hover:bg-green-700 md:bottom-6 md:right-6 md:h-14 md:left-auto md:w-14 md:rounded-full md:shadow-xl md:hover:scale-110"
    aria-label="Send Enquiry on WhatsApp"
  >
    <SiWhatsapp className="h-4 w-4 md:h-7 md:w-7" />
    <span className="md:hidden">Send Enquiry on WhatsApp</span>
  </a>
);

export default FloatingWhatsApp;
