"use client";

import Link from "next/link";
import { ArrowRight, Code, Server, ShieldCheck, LayoutTemplate } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      id: 1,
      title: "Custom Software Solutions",
      description: "Tailored business applications and scalable software designed to meet your specific operational needs and workflows.",
      icon: Code,
    },
    {
      id: 2,
      title: "Computing Infrastructure",
      description: "Modernized legacy environments and robust computing architectures built for resilience, efficiency, and growth.",
      icon: Server,
    },
    {
      id: 3,
      title: "Systems Integration",
      description: "Cohesive integration of technology platforms and specialist vendors to simplify complex IT environments.",
      icon: LayoutTemplate,
    },
    {
      id: 4,
      title: "Lifecycle Support",
      description: "Ongoing management, hardware licensing, and strategic support to ensure your technology investments deliver continuous value.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="solutions" className="w-full py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left: Sticky Header Content */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-golomon-secondary font-bold text-sm tracking-[0.2em] uppercase">
                Our Solutions
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              End-to-end <br />
              Digital Solutions
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Comprehensive tools designed to modernize every aspect of your technology environment and drive sustainable growth.
            </p>
            
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 bg-golomon-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-900 transition-colors shadow-md group"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Solutions Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((item) => (
              <Link 
                key={item.id} 
                href="/solutions"
                className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full overflow-hidden cursor-pointer"
              >
                {/* Subtle Brand Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ECF5FB]/0 via-white to-[#ECF5FB]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-[#ECF5FB] text-golomon-primary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex justify-end">
                    <ArrowRight className="text-golomon-secondary w-6 h-6 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}