"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/hero1.png",
      tagline: "PROGRESS, POWERED BY TECHNOLOGY.",
      title: "Transforming Technology Into Measurable Value",
      description: "We design and deliver cohesive solutions that simplify complex IT environments and connect the systems your business needs to grow.",
    },
    {
      id: 2,
      image: "/hero2.png",
      tagline: "PRACTICAL, SCALABLE, INTEGRATED.",
      title: "Build a Stronger Digital Foundation",
      description: "We modernize legacy environments and deploy scalable solutions that enhance operational efficiency, productivity, and resilience.",
    },
    {
      id: 3,
      image: "/hero3.png",
      tagline: "YOUR TRUSTED TECHNOLOGY PARTNER.",
      title: "Empowering Sustainable Business Growth",
      description: "By combining technology expertise and strategic partnerships, we help organizations leverage technology as a strategic driver of success.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Calculate the next and previous indices for the hover previews
  const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[500px] max-h-[640px] flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-right md:object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Smooth Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/85 to-white/10 md:to-transparent"></div>

      {/* Content - Increased horizontal padding (px-20 lg:px-28) to prevent text from overlapping the arrows */}
      <div className="max-w-[1400px] mx-auto px-20 lg:px-28 w-full relative z-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-golomon-secondary"></span>
            <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase">
              {slides[currentSlide].tagline}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-5 tracking-tight transition-opacity duration-500">
            {slides[currentSlide].title}
          </h1>
          
          <p className="text-lg text-slate-700 mb-8 leading-relaxed transition-opacity duration-500 font-medium max-w-xl">
            {slides[currentSlide].description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#solutions"
              className="bg-golomon-secondary text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-700 transition-colors shadow-md shadow-orange-500/20"
            >
              Discover Solutions
            </Link>
            <Link
              href="#contact"
              className="bg-slate-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-golomon-primary transition-colors shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls with Image Previews */}
      
      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="group absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full flex items-center justify-center bg-white/80 shadow-md transition-all border border-gray-200 overflow-hidden"
        aria-label="Previous slide"
      >
        {/* The image that fades in on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image
            src={slides[prevIndex].image}
            alt="Previous slide preview"
            fill
            className="object-cover"
          />
          {/* Dark overlay to make the white arrow visible */}
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        {/* The Arrow Icon */}
        <ChevronLeft 
          size={28} 
          className="relative z-10 text-slate-800 group-hover:text-white transition-colors" 
        />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="group absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full flex items-center justify-center bg-white/80 shadow-md transition-all border border-gray-200 overflow-hidden"
        aria-label="Next slide"
      >
        {/* The image that fades in on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image
            src={slides[nextIndex].image}
            alt="Next slide preview"
            fill
            className="object-cover"
          />
          {/* Dark overlay to make the white arrow visible */}
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>
        
        {/* The Arrow Icon */}
        <ChevronRight 
          size={28} 
          className="relative z-10 text-slate-800 group-hover:text-white transition-colors" 
        />
      </button>
    </section>
  );
}