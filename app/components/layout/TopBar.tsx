import { Mail, Phone, MapPin } from "lucide-react";

// Clean SVG social icons
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TopBar() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}} />

      <div className="w-full font-sans">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex w-full items-stretch justify-between bg-golomon-primary text-white text-sm">
          
          {/* Left Side: Location & Email (Blue Background) */}
          <div className="flex flex-1 items-center gap-8 px-6 lg:px-12 py-3">
            <span className="flex items-center gap-2 font-medium tracking-wide">
              <MapPin size={16} className="text-golomon-secondary" />
              Nairobi, Kenya
            </span>
            <a 
              href="mailto:info@golomon.co.ke" 
              className="flex items-center gap-2 font-medium tracking-wide hover:text-golomon-tertiary transition-colors"
            >
              <Mail size={16} className="text-golomon-secondary" />
              info@golomon.co.ke
            </a>
          </div>

          {/* Right Side: Phone & Socials (Solid Orange Background Block) */}
          <div className="bg-golomon-secondary flex items-center px-6 lg:px-12 py-3">
            
            <a 
              href="tel:+254700000000" 
              className="flex items-center gap-2 text-base font-bold tracking-wider hover:text-white/80 transition-colors"
            >
              <Phone size={18} className="text-white" />
              +254 (0) 700 000000
            </a>

            {/* Vertical Divider */}
            <div className="h-5 w-px bg-white/40 mx-6" aria-hidden="true"></div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-white">
              <a href="#" aria-label="Facebook" className="hover:text-golomon-primary transition-colors"><FacebookIcon size={16} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-golomon-primary transition-colors"><TwitterIcon size={16} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-golomon-primary transition-colors"><InstagramIcon size={16} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-golomon-primary transition-colors"><LinkedinIcon size={16} /></a>
            </div>

          </div>
        </div>

        {/* --- MOBILE VIEW (MARQUEE) --- */}
        <div className="flex md:hidden w-full bg-golomon-secondary text-white py-3 overflow-hidden whitespace-nowrap relative">
          <div className="flex w-max animate-marquee items-center text-sm font-medium">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 px-4">
                <a href="tel:+254700000000" className="flex items-center gap-2 font-bold text-base">
                  <Phone size={16} />
                  +254 (0) 700 000000
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Nairobi, Kenya
                </span>
                <a href="mailto:info@golomon.co.ke" className="flex items-center gap-2">
                  <Mail size={16} />
                  info@golomon.co.ke
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}