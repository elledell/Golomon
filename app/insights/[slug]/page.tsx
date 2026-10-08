"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from "lucide-react";

export default function ArticlePage() {
  return (
    <main className="w-full bg-white flex flex-col pt-24">
      
      {/* 1. ARTICLE HERO */}
      <section className="w-full pt-12 pb-8">
        <div className="max-w-[800px] mx-auto px-6 lg:px-0">
          
          {/* Back Navigation */}
          <Link 
            href="/#insights" 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-golomon-secondary transition-colors font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6 text-sm font-medium">
            <span className="bg-[#ECF5FB] text-golomon-primary px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">
              Infrastructure
            </span>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-4 h-4" /> Oct 8, 2026
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Clock className="w-4 h-4" /> 5 min read
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8 tracking-tight">
            The Hidden Costs of Legacy Systems in East African Enterprises
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 border-t border-slate-100 pt-8 mt-8">
            <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" 
                alt="Author" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-slate-900">Golomon Technology Team</p>
              <p className="text-sm text-slate-500">Infrastructure & Systems Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HERO IMAGE */}
      <section className="w-full max-w-[1000px] mx-auto px-6 lg:px-0 mb-16">
        <div className="w-full aspect-[21/9] bg-slate-100 rounded-3xl overflow-hidden shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80" 
            alt="Server Room Infrastructure" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. ARTICLE CONTENT */}
      <article className="w-full max-w-[800px] mx-auto px-6 lg:px-0 pb-20 border-b border-slate-100">
        <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed mb-8">
            In today's rapidly evolving digital landscape, organizations across East Africa are realizing that keeping legacy systems on life support is no longer a viable strategy. While the "if it isn't broken, don't fix it" mentality might seem financially prudent in the short term, it often masks severe operational inefficiencies.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Maintenance Drain</h3>
          <p className="mb-6">
            One of the most significant, yet frequently overlooked, expenses of outdated technology is the sheer cost of maintenance. As software ages, finding specialists who understand the legacy codebase becomes increasingly difficult and expensive. Internal IT teams end up spending the majority of their time putting out fires, applying patches, and building fragile workarounds rather than focusing on strategic business growth.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Security Vulnerabilities</h3>
          <p className="mb-6">
            Legacy systems were not designed to withstand modern cybersecurity threats. Vendors eventually end support for older platforms, meaning they no longer release critical security patches. This leaves your organization's sensitive data exposed to breaches, which can result in catastrophic financial and reputational damage.
          </p>

          <div className="bg-[#ECF5FB] p-8 rounded-2xl my-10 border-l-4 border-golomon-primary">
            <p className="text-golomon-primary font-bold text-xl m-0 italic">
              "Modernization is not just about adopting new technology; it is about building a resilient, scalable foundation that transforms your IT investment into measurable business value."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Integration Bottleneck</h3>
          <p className="mb-6">
            As your business grows, you need your systems to communicate. Legacy software is notoriously difficult to integrate with modern cloud-based applications, APIs, and mobile platforms. This creates data silos across departments, forcing employees into manual data entry, increasing the likelihood of human error, and completely destroying operational efficiency.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Path Forward</h3>
          <p className="mb-6">
            Transitioning away from legacy environments requires a strategic approach. It starts with a comprehensive audit of your current infrastructure to identify bottlenecks. Whether the solution is building custom software shaped exactly around how you work, or integrating a proven, modernized platform, the goal remains the same: simplifying your complex IT environment to achieve sustainable growth.
          </p>
        </div>

        {/* Share & Tags */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-16 pt-8 border-t border-slate-100">
          <div className="flex gap-3">
            <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">#Modernization</span>
            <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">#ITInfrastructure</span>
            <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 cursor-pointer transition-colors">#EnterpriseTech</span>
          </div>
          <button className="flex items-center gap-2 text-golomon-primary font-bold hover:text-golomon-secondary transition-colors">
            <Share2 className="w-5 h-5" /> Share Article
          </button>
        </div>
      </article>

      {/* 4. ARTICLE CTA BANNER */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center bg-golomon-primary rounded-[2.5rem] p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Struggling with outdated infrastructure?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with Golomon to audit your legacy systems and deploy a scalable, modernized solution that drives efficiency and ROI.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-golomon-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}