"use client";

import Link from "next/link";
import { Server, LayoutTemplate, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", 
      challengeTitle: "Disconnected Legacy Systems",
      challengeDesc: "Outdated infrastructure and fragmented platforms slowing down your daily operational efficiency.",
      solutionTitle: "Infrastructure Modernization",
      solutionLink: "#solutions",
      Icon: Server,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", 
      challengeTitle: "Scaling Bottlenecks",
      challengeDesc: "Off-the-shelf software failing to adapt to your growing business needs and complex workflows.",
      solutionTitle: "Custom Business Applications",
      solutionLink: "#solutions",
      Icon: LayoutTemplate,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", 
      challengeTitle: "IT Management Overhead",
      challengeDesc: "Draining internal resources on routine system maintenance rather than strategic business growth.",
      solutionTitle: "Managed Lifecycle Support",
      solutionLink: "#solutions",
      Icon: ShieldCheck,
    },
  ];

  return (
    <section id="challenges" className="w-full py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Technology Is Evolving.<br />
            We Help You Stay Ahead.
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {challenges.map((item) => (
            <div 
              key={item.id} 
              // Added tabIndex and focus:outline-none to enable mobile tap-to-focus
              tabIndex={0} 
              className="flex flex-col group cursor-pointer focus:outline-none"
            >
              
              {/* Image Container with Hover/Focus Overlay */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-sm bg-slate-100">
                <img
                  src={item.image}
                  alt={item.challengeTitle}
                  // Added group-focus and group-active scaling for mobile
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105 group-active:scale-105"
                />
                
                {/* Dark Hover/Focus Overlay - Now responds to taps on mobile */}
                <div className="absolute inset-0 bg-slate-900/85 opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 z-10 backdrop-blur-[2px]">
                  <item.Icon className="text-golomon-secondary w-10 h-10 mb-4" strokeWidth={1.5} />
                  <h3 className="text-white font-bold text-xl mb-3">
                    {item.solutionTitle}
                  </h3>
                  <Link 
                    href={item.solutionLink}
                    className="flex items-center gap-1 text-golomon-secondary font-medium text-sm hover:text-orange-400 transition-colors"
                  >
                    View Solution <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Challenge Text Below Image */}
              <div className="px-2">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {item.challengeTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {item.challengeDesc}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}