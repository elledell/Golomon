"use client";

import { useEffect, useRef, useState } from "react";
import { Search, PenTool, Cpu, RefreshCw } from "lucide-react";

export default function HowWeWork() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description: "We listen, understand the business, and evaluate your current infrastructure to design technology around your real needs and growth ambitions.",
      icon: Search,
    },
    {
      id: 2,
      title: "Strategic Architecture",
      description: "We modernize legacy systems and map out integrated, scalable technology solutions that directly address your business challenges.",
      icon: PenTool,
    },
    {
      id: 3,
      title: "Implementation & Integration",
      description: "Combining technical expertise and disciplined delivery, we seamlessly deploy and integrate cohesive solutions into your workflows.",
      icon: Cpu,
    },
    {
      id: 4,
      title: "Lifecycle Support & Growth",
      description: "We focus on outcomes that improve efficiency by providing ongoing management, technical support, and continuous innovation.",
      icon: RefreshCw,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = Number(entry.target.getAttribute("data-id"));
            setVisibleSections((prev) => 
              prev.includes(targetId) ? prev : [...prev, targetId]
            );
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 relative overflow-hidden">
      
      {/* Background Image & Brand Blue Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        {/* Vivid Blue mix-blend to tint the image */}
        <div className="absolute inset-0 bg-golomon-primary/80 mix-blend-multiply"></div>
        {/* A secondary dark blue gradient to ensure text readability while staying perfectly on-brand */}
        <div className="absolute inset-0 bg-gradient-to-br from-golomon-primary/90 via-golomon-primary/80 to-[#001a4d]/95"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-golomon-secondary font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Our <span className="text-golomon-secondary">Proven Process</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A disciplined, step-by-step approach to transforming your technology investment into measurable business value.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* The Central Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-white/20 md:-translate-x-1/2 z-0"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleSections.includes(step.id);

              return (
                <div 
                  key={step.id} 
                  ref={(el) => {
                    if (el) sectionRefs.current[index] = el;
                  }}
                  data-id={step.id}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between group"
                >
                  
                  {/* Desktop: Empty div for grid alignment */}
                  <div className={`hidden md:block w-[45%] ${isEven ? "order-1" : "order-3"}`}></div>

                  {/* Timeline Node / Icon */}
                  <div 
                    className={`absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-16 h-16 rounded-full bg-golomon-primary border-2 border-white/30 group-hover:border-golomon-secondary flex items-center justify-center z-10 order-2 transition-all duration-700 ease-out shadow-lg ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-golomon-secondary/20 flex items-center justify-center transition-colors duration-500">
                      <step.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content Card - Glassmorphism Style */}
                  <div 
                    className={`w-full md:w-[45%] pl-24 md:pl-0 ${
                      isEven ? "order-3 md:text-left" : "order-1 md:text-right"
                    } transition-all duration-1000 ease-out ${
                      isVisible 
                        ? "opacity-100 translate-x-0" 
                        : `opacity-0 translate-x-12 ${isEven ? 'md:translate-x-24' : 'md:-translate-x-24'}`
                    }`}
                  >
                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-golomon-secondary/50 hover:bg-white/15 transition-all duration-300 relative overflow-hidden shadow-2xl">
                      
                      <div className="relative z-10">
                        <span className="text-4xl font-extrabold text-white/20 mb-2 block transition-colors duration-500 group-hover:text-golomon-secondary/40">
                          0{step.id}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-blue-50 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}