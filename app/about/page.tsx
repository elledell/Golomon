"use client";

import Link from "next/link";
import { 
  Target, 
  Eye, 
  Users, 
  Wrench, 
  TrendingUp, 
  Lightbulb, 
  Handshake, 
  ArrowRight,
  Zap,
  Network,
  Rocket
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full bg-white flex flex-col pt-20">
      
      {/* About Hero Section */}
      <section className="relative w-full py-20 lg:py-28 bg-[#ECF5FB]/40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-golomon-secondary"></span>
            <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase">
              About Golomon
            </span>
            <span className="h-[2px] w-8 bg-golomon-secondary"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-golomon-primary leading-tight tracking-tight mb-6 max-w-4xl">
            Progress, Powered By Technology.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
            We simplify complex IT environments and connect the systems, infrastructure, and capabilities businesses need to operate and grow.
          </p>
        </div>
      </section>

      {/* Mission & Vision Split - Redesigned to match layout while using Golomon colors */}
      <section className="w-full py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card (Light) */}
          <div className="bg-white p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-100 flex flex-col justify-between">
            {/* Top Right Decorative Background */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ECF5FB] rounded-full -translate-y-1/2 translate-x-1/3 opacity-80 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-golomon-primary rounded-full flex items-center justify-center shadow-md">
                  <Target className="text-white w-7 h-7" />
                </div>
                <div>
                  <span className="text-golomon-primary font-bold text-[13px] tracking-[0.2em] uppercase">
                    Why We Exist
                  </span>
                  <h2 className="text-4xl font-extrabold text-slate-900 mt-1 tracking-tight">
                    Our <span className="text-golomon-secondary">Mission</span>
                  </h2>
                </div>
              </div>

              <p className="text-2xl lg:text-[1.75rem] font-bold text-slate-900 mb-6 leading-[1.3]">
                To help businesses harness technology to simplify operations, improve performance, and achieve sustainable growth through practical, integrated, and scalable solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                We provide fit-for-purpose technology that solves real business challenges, creating measurable value that improves efficiency, visibility, and overall performance.
              </p>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
              {["Simplify", "Performance", "Scalability"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 bg-[#ECF5FB] text-golomon-primary rounded-full text-sm font-bold border border-blue-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Vision Card (Dark) */}
          <div className="bg-[#00225A] p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
            {/* Abstract Tech Lines Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M 100 0 L 100 150 L 300 250 L 500 250" stroke="#ECF5FB" strokeWidth="2" fill="none" />
                <path d="M 400 0 L 400 100 L 200 200" stroke="#CD5007" strokeWidth="2" fill="none" />
                <circle cx="500" cy="250" r="4" fill="#ECF5FB" />
                <circle cx="200" cy="200" r="4" fill="#CD5007" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-golomon-secondary rounded-full flex items-center justify-center shadow-md">
                  <Eye className="text-white w-7 h-7" />
                </div>
                <div>
                  <span className="text-golomon-secondary font-bold text-[13px] tracking-[0.2em] uppercase">
                    Where We're Going
                  </span>
                  <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">
                    Our <span className="text-[#ECF5FB]">Vision</span>
                  </h2>
                </div>
              </div>

              <p className="text-2xl lg:text-[1.75rem] font-bold text-white mb-6 leading-[1.3]">
                To be a trusted leading technology solutions partner, enabling businesses to achieve sustainable growth through technology.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-10">
                We operate with integrity and responsiveness, combining technical expertise with continuous innovation to build lasting relationships with our clients and partners.
              </p>
            </div>

            {/* Pill Tags */}
            <div className="flex flex-wrap gap-3 relative z-10 mt-auto">
              {["Trusted Partner", "Innovation", "Growth"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-bold border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* Culture Section - Inline Floating Card Design */}
      <section className="w-full py-24 relative overflow-hidden bg-gradient-to-br from-[#ECF5FB]/60 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col xl:flex-row gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="w-full xl:w-1/3 flex flex-col justify-center">
            <span className="text-golomon-primary font-bold text-[13px] tracking-[0.2em] uppercase mb-3">
              How We Work Together
            </span>
            <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Our <span className="text-golomon-secondary">Culture</span>
            </h2>
            <div className="h-1 w-16 bg-golomon-primary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 leading-relaxed pr-4">
              Our team thrives on continuous learning, technical excellence, and disciplined delivery. We combine our expertise to build solutions that remain relevant, practical, and highly effective. We value:
            </p>
          </div>

          {/* Right: Floating Columns Card */}
          <div className="w-full xl:w-2/3 bg-white rounded-3xl shadow-2xl p-6 lg:p-10 border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              
              <div className="flex flex-col pt-4 sm:pt-0 sm:px-4 lg:px-6">
                <div className="w-12 h-12 bg-[#ECF5FB] rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="text-golomon-primary w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Innovation</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Always exploring better ways to build, solve, and modernize legacy environments.
                </p>
              </div>

              <div className="flex flex-col pt-6 sm:pt-0 sm:px-4 lg:px-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="text-golomon-secondary w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Building stronger ideas through trusted teamwork and client partnerships.
                </p>
              </div>

              <div className="flex flex-col pt-6 sm:pt-0 sm:px-4 lg:px-6">
                <div className="w-12 h-12 bg-[#ECF5FB] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="text-golomon-primary w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Impact</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Focusing on outcomes that create real, measurable value for organizations.
                </p>
              </div>

              <div className="flex flex-col pt-6 sm:pt-0 sm:px-4 lg:px-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="text-golomon-secondary w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Growth</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Empowering businesses with scalable solutions for sustainable expansion.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-golomon-primary">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center text-white flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Build a Stronger Digital Foundation?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl">
            Partner with Golomon to deploy scalable solutions that enhance operational efficiency and return on investment.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-golomon-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
    </main>
  );
}