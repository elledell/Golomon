"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const insights = [
    {
      id: 1,
      category: "Infrastructure",
      title: "The Hidden Costs of Legacy Systems in East African Enterprises",
      description: "Why maintaining outdated infrastructure is draining your IT budget and how modernization drives immediate ROI.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      // Updated link to match the dynamic slug routing
      link: "/insights/hidden-costs-legacy-systems",
    },
    {
      id: 2,
      category: "Software Strategy",
      title: "Build vs. Integrate: Choosing the Right Software Path",
      description: "A pragmatic guide to evaluating whether custom software or an integrated platform is the best fit for your business objectives.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      // Updated link
      link: "/insights/build-vs-integrate",
    },
    {
      id: 3,
      category: "IT Management",
      title: "Maximizing Uptime with Proactive Lifecycle Support",
      description: "How continuous monitoring and managed IT services prevent downtime and secure your organization's digital foundation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      // Updated link
      link: "/insights/maximizing-uptime",
    },
  ];
  return (
    <section id="insights" className="w-full py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-golomon-secondary"></span>
              <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase">
                Insights & Resources
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Latest from <span className="text-golomon-primary">Golomon</span>
            </h2>
          </div>
          
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-golomon-primary font-bold hover:text-golomon-secondary transition-colors group"
          >
            View All Articles 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post) => (
            <Link 
              key={post.id} 
              href={post.link}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/95 backdrop-blur-sm text-golomon-primary text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-golomon-secondary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-[15px]">
                  {post.description}
                </p>
                
                {/* Read More Link */}
                <div className="mt-auto flex items-center gap-2 text-golomon-primary font-bold text-sm group-hover:text-golomon-secondary transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}