"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

// Inline SVGs to replace the removed Lucide brand icons
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900 pt-20 pb-8 overflow-hidden relative mt-auto">
      
      {/* Background Tech Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 0 L 200 100 L 400 100" stroke="#ECF5FB" strokeWidth="2" fill="none" />
          <circle cx="400" cy="100" r="4" fill="#CD5007" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            
            {/* Blended Logo Section matching Navbar */}
            <Link href="/" className="flex items-center mb-8 w-fit group">
              <Image 
                src="/logo.png" 
                alt="Golomon Logo" 
                width={42} 
                height={42} 
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-white font-bold text-2xl tracking-widest ml-2">
                OLOMON
              </span>
            </Link>

            <p className="text-slate-400 leading-relaxed mb-8 pr-4">
              Your trusted partner for integrated IT solutions. We design, build, and support technology shaped around how East African enterprises actually work.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-golomon-secondary hover:text-golomon-secondary transition-all shadow-sm">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-golomon-secondary hover:text-golomon-secondary transition-all shadow-sm">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-golomon-secondary hover:text-golomon-secondary transition-all shadow-sm">
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Solutions</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-golomon-secondary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Contact</Link></li>
            </ul>
          </div>

          {/* 3. Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Custom Software Development</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Computing Infrastructure</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Systems Integration</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Lifecycle Support</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors block">Cloud Architecture</Link></li>
            </ul>
          </div>

          {/* 4. Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 tracking-wide">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-golomon-secondary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Nairobi, Kenya <br/> Serving East Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-golomon-secondary flex-shrink-0" />
                <a href="tel:+254700000000" className="hover:text-white transition-colors">+254 700 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-golomon-secondary flex-shrink-0" />
                <a href="mailto:info@golomon.com" className="hover:text-white transition-colors">info@golomon.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} Golomon Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}