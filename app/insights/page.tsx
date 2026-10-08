"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function InsightsArchive() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Infrastructure", "Software Strategy", "IT Management", "Case Studies"];

  // Extended mock database for the archive page
  const allInsights = [
    {
      id: 1,
      category: "Infrastructure",
      title: "The Hidden Costs of Legacy Systems in East African Enterprises",
      description: "Why maintaining outdated infrastructure is draining your IT budget and how modernization drives immediate ROI.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      link: "/insights/hidden-costs-legacy-systems",
    },
    {
      id: 2,
      category: "Software Strategy",
      title: "Build vs. Integrate: Choosing the Right Software Path",
      description: "A pragmatic guide to evaluating whether custom software or an integrated platform is the best fit for your business objectives.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "/insights/build-vs-integrate",
    },
    {
      id: 3,
      category: "IT Management",
      title: "Maximizing Uptime with Proactive Lifecycle Support",
      description: "How continuous monitoring and managed IT services prevent downtime and secure your organization's digital foundation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "/insights/maximizing-uptime",
    },
    {
      id: 4,
      category: "Case Studies",
      title: "Scaling Operations for a Regional Logistics Provider",
      description: "How a custom ERP integration reduced manual data entry by 70% and improved supply chain visibility.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=800&q=80",
      link: "/insights/logistics-erp-case-study",
    },
    {
      id: 5,
      category: "Software Strategy",
      title: "The Role of Microservices in Modern Business Applications",
      description: "Transitioning from monolithic architectures to agile microservices for faster deployment and scaling.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      link: "/insights/microservices-architecture",
    },
    {
      id: 6,
      category: "Infrastructure",
      title: "Securing Your Data in Hybrid Cloud Environments",
      description: "Essential cybersecurity protocols for organizations migrating to hybrid or multi-cloud infrastructures.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      link: "/insights/hybrid-cloud-security",
    },
  ];

  // Filter logic
  const filteredInsights = activeCategory === "All" 
    ? allInsights 
    : allInsights.filter(post => post.category === activeCategory);

  return (
    <main className="w-full bg-slate-50 flex flex-col pt-24 min-h-screen">
      
      {/* 1. ARCHIVE HERO */}
      <section className="w-full pt-16 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Insights & <span className="text-golomon-primary">Resources</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-12">
            Explore our latest articles, guides, and case studies on modernizing IT infrastructure, custom software development, and strategic technology management.
          </p>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors ${
                    activeCategory === category 
                      ? "bg-golomon-primary text-white" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full md:w-72 pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all bg-slate-50"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>

          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section className="w-full py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((post) => (
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

          {/* Empty State Fallback */}
          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-500">Check back later for new insights in this category.</p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}