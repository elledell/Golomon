"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image Area */}
          <div className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl">
            {/* Using a professional Unsplash placeholder for testing */}
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
              alt="Golomon Technology Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Brand Accent Overlay */}
            <div className="absolute inset-0 bg-golomon-primary/10 mix-blend-multiply"></div>
            
            {/* Floating Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-2xl shadow-lg max-w-[200px]">
              <span className="block text-3xl font-extrabold text-golomon-secondary mb-1">TSP</span>
              <span className="text-sm font-semibold text-slate-700 leading-tight">
                Trusted Technology Solutions Provider
              </span>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-golomon-secondary"></span>
              <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight">
              Building a Stronger Digital Foundation.
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Golomon Limited is a Technology Solutions Provider based in Nairobi. We specialize in delivering integrated IT solutions that help organizations modernize, manage, and optimize their technology environments.
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We go beyond providing software and hardware. By combining technology expertise, solution architecture, and strategic partnerships, we focus on transforming your technology investment into measurable business value and sustainable growth.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-golomon-primary text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-900 transition-colors shadow-md group"
              >
                Read Our Full Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}