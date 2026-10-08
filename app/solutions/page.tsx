"use client";

import Link from "next/link";
import { CheckCircle2, Puzzle, Code2, ArrowRight, Check } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="w-full bg-[#F8FAFC] flex flex-col pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full py-20 lg:py-24 overflow-hidden">
        {/* Background Gradient matching the reference */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ECF5FB] to-transparent z-0"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 z-0">
          <svg width="600" height="400" viewBox="0 0 600 400" fill="none">
            <path d="M 0 200 L 200 200 L 300 100 L 600 100" stroke="#003690" strokeWidth="2" />
            <path d="M 0 300 L 250 300 L 350 350 L 600 350" stroke="#003690" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & CTA */}
          <div className="flex flex-col">
            <span className="text-golomon-primary font-bold text-sm tracking-widest uppercase mb-4">
              Custom Software & IT Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Technology shaped <br />
              around <span className="text-golomon-secondary">how you actually work.</span>
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-10 max-w-lg">
              Business applications, computing infrastructure, and customized software, built from scratch or integrated from proven platforms, then hosted and supported by our team.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/#contact"
                className="bg-golomon-secondary text-white px-8 py-3.5 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md"
              >
                Request Quote
              </Link>
              <Link
                href="#case-studies"
                className="bg-transparent border-2 border-golomon-primary text-golomon-primary px-8 py-3.5 rounded-full font-bold hover:bg-golomon-primary hover:text-white transition-colors"
              >
                See Success Stories
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-8 lg:gap-12 border-t border-slate-200 pt-8">
              <div>
                <h4 className="text-4xl font-extrabold text-golomon-primary mb-1">50+</h4>
                <p className="text-sm text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-golomon-primary mb-1">98%</h4>
                <p className="text-sm text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-extrabold text-golomon-primary mb-1">4</h4>
                <p className="text-sm text-slate-500 font-medium">Countries Served</p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Graphic Simulation */}
          <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Main UI Window */}
            <div className="relative w-[90%] h-[80%] bg-white rounded-2xl shadow-2xl overflow-hidden flex border border-slate-100">
              {/* Sidebar */}
              <div className="w-20 bg-slate-900 h-full flex flex-col items-center py-6 gap-4">
                <div className="w-8 h-8 rounded bg-slate-700"></div>
                <div className="w-8 h-8 rounded bg-slate-700"></div>
                <div className="w-8 h-8 rounded bg-golomon-secondary"></div>
              </div>
              {/* Main Content Area */}
              <div className="flex-1 p-8 flex flex-col">
                {/* Top Nav Bars */}
                <div className="flex gap-4 mb-10">
                  <div className="h-6 w-24 bg-[#ECF5FB] rounded-full"></div>
                  <div className="h-6 w-32 bg-orange-50 rounded-full"></div>
                  <div className="h-6 w-24 bg-[#ECF5FB] rounded-full"></div>
                </div>
                {/* Bar Chart */}
                <div className="flex-1 flex items-end justify-between gap-4 px-4">
                  {[40, 70, 50, 90, 60, 80, 55].map((height, i) => (
                    <div 
                      key={i} 
                      className={`w-full rounded-t-sm ${i % 2 === 0 ? 'bg-golomon-primary' : 'bg-golomon-secondary'}`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Context Cards */}
            <div className="absolute top-[20%] right-[-5%] bg-white p-4 rounded-xl shadow-xl border border-slate-50 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium">System Deployed</p>
                <p className="text-sm font-bold text-slate-900">100% Operational</p>
              </div>
            </div>

            <div className="absolute bottom-[20%] left-[-5%] bg-white p-5 rounded-xl shadow-xl border border-slate-50">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-green-500" /> Infrastructure Map
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-green-500" /> Build & Deploy
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-green-500" /> Systems Integrate
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. COMPARISON SECTION */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Build from scratch or <span className="text-golomon-secondary">integrate a platform?</span>
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            Two ways to get the system you need. We help you pick the one that fits your organizational budget and deployment timeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Card 1: Integrate */}
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-slate-100 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#ECF5FB] rounded-xl flex items-center justify-center text-golomon-primary">
                  <Puzzle className="w-6 h-6" />
                </div>
                <span className="bg-[#ECF5FB] text-golomon-primary px-4 py-1.5 rounded-full text-sm font-bold">
                  Faster to launch
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrate a proven platform</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We implement and modernize established platforms, then configure, brand, and seamlessly integrate them into your existing IT environment.
              </p>
              <div className="mb-8">
                <span className="font-bold text-slate-900">Best for: </span>
                <span className="text-slate-600">Organizations needing standard business processes optimized quickly.</span>
              </div>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-primary" /> Launch in weeks, not months</div>
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-primary" /> Mature, well-tested infrastructure</div>
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-primary" /> Lifecycle support by our team</div>
              </div>
            </div>

            {/* Card 2: Custom */}
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-lg border border-slate-100 relative">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-golomon-secondary">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="bg-orange-50 text-golomon-secondary px-4 py-1.5 rounded-full text-sm font-bold">
                  Fits exactly
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Build custom software</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Business applications and software designed from the ground up around your exact workflows, technical requirements, and strategic goals.
              </p>
              <div className="mb-8">
                <span className="font-bold text-slate-900">Best for: </span>
                <span className="text-slate-600">Unique operational processes requiring deep integration and scalability.</span>
              </div>
              <div className="space-y-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-secondary" /> Built around how you work</div>
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-secondary" /> You own the roadmap</div>
                <div className="flex items-center gap-3 text-slate-700"><Check className="w-5 h-5 text-golomon-secondary" /> Grows with your organization</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY TEAMS STAY WITH US (6-Grid) */}
      <section className="w-full py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Why teams stay <span className="text-golomon-secondary">with us</span>
            </h2>
            <p className="text-lg text-slate-600">
              Your trusted partner for integrated IT solutions across Kenya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Integrated Approach</h4>
                <p className="text-sm text-slate-600 leading-relaxed">We connect platforms, vendors, and partners to simplify complex environments.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Measurable Value</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Solutions focused on enhancing operational efficiency and return on investment.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Proven Track Record</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Years of delivering successful infrastructure and software deployments across the region.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Strategic Architecture</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Combining technology expertise with disciplined delivery for scalable results.</p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Lifecycle Support</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Ongoing management, technical support, and hardware licensing after deployment.</p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-golomon-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-2">Regional Expertise</h4>
                <p className="text-sm text-slate-600 leading-relaxed">Deep understanding of Kenyan business objectives and technology environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="w-full pb-24 bg-[#F8FAFC] px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto bg-white rounded-[2.5rem] shadow-xl p-12 lg:p-20 relative overflow-hidden text-center border border-slate-100">
          
          {/* SVG Tech Lines Background */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 50 L 150 50 L 250 150 L 400 150" stroke="#003690" strokeWidth="2" fill="none" />
              <path d="M 100 0 L 100 100 L 200 200" stroke="#CD5007" strokeWidth="2" fill="none" />
              <circle cx="400" cy="150" r="4" fill="#003690" />
              <circle cx="200" cy="200" r="4" fill="#CD5007" />
              
              <path d="M 100% 80 L calc(100% - 150px) 80 L calc(100% - 250px) 180" stroke="#CD5007" strokeWidth="2" fill="none" />
              <circle cx="calc(100% - 250px)" cy="180" r="4" fill="#CD5007" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-10 tracking-tight">
              Turn your IT investments into <br />
              measurable <span className="text-golomon-primary">business value</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="bg-golomon-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-orange-700 transition-colors shadow-md flex items-center gap-2"
              >
                Request Custom Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-golomon-primary hover:text-golomon-primary transition-colors flex items-center gap-2"
              >
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
}