"use client";

import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { 
  Mail, Phone, MapPin, Send, Loader2, CheckCircle, 
  ChevronDown, Code, Server, Puzzle, ShieldCheck, MessageSquare 
} from "lucide-react";

export default function Contact() {
  const submitContactMessage = useMutation(api.contact.submitMessage);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Array to power the custom dropdown
  const serviceOptions = [
    { value: "custom-software", label: "Custom Software Development", icon: Code },
    { value: "infrastructure", label: "Computing Infrastructure", icon: Server },
    { value: "integration", label: "Systems Integration", icon: Puzzle },
    { value: "support", label: "Lifecycle Support", icon: ShieldCheck },
    { value: "other", label: "Other Inquiry", icon: MessageSquare },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.service) {
      setError("Please select a service from the dropdown.");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitContactMessage({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company || undefined,
        service: formData.service,
        message: formData.message,
      });
      
      setIsSuccess(true);
      setFormData({ firstName: "", lastName: "", email: "", company: "", service: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to find the currently selected option data
  const selectedOption = serviceOptions.find(opt => opt.value === formData.service);
  const SelectedIcon = selectedOption?.icon;

  return (
    <section id="contact" className="w-full py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Left: Contact Information */}
          <div className="w-full lg:w-5/12 bg-golomon-primary p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M -50 100 L 150 100 L 250 200 L 400 200" stroke="#ECF5FB" strokeWidth="2" fill="none" />
                <path d="M 0 300 L 100 300 L 200 400" stroke="#CD5007" strokeWidth="2" fill="none" />
                <circle cx="250" cy="200" r="4" fill="#ECF5FB" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-golomon-secondary"></span>
                <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                Let&apos;s build your digital foundation.
              </h2>
              <p className="text-blue-100 text-lg mb-12 leading-relaxed">
                Whether you need to modernize legacy systems, build custom software, or secure lifecycle support, our team in Nairobi is ready to help you achieve measurable value.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Mail className="w-5 h-5 text-golomon-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 font-medium mb-1">Email Us</p>
                    <a href="mailto:info@golomon.com" className="text-lg font-bold hover:text-golomon-secondary transition-colors">
                      info@golomon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Phone className="w-5 h-5 text-golomon-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 font-medium mb-1">Call Us</p>
                    <a href="tel:+254700000000" className="text-lg font-bold hover:text-golomon-secondary transition-colors">
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                    <MapPin className="w-5 h-5 text-golomon-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200 font-medium mb-1">Visit Us</p>
                    <p className="text-lg font-bold">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-7/12 p-12 lg:p-16 bg-white flex flex-col justify-center relative">
            
            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-lg text-slate-600">
                  Thank you for reaching out. Our team will review your inquiry and get back to you shortly.
                </p>
              </div>
            )}

            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Send us a message
            </h3>
            
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm font-medium border border-red-100">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-slate-900"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-slate-900"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-slate-900"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-slate-900"
                    placeholder="Your Organization"
                  />
                </div>
              </div>

              {/* Custom Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-sm font-bold text-slate-700">How can we help? <span className="text-red-500">*</span></label>
                
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-left flex justify-between items-center text-slate-700"
                >
                  <span className="flex items-center gap-3">
                    {selectedOption ? (
                      <>
                        {SelectedIcon && <SelectedIcon className="w-5 h-5 text-golomon-primary" />}
                        <span className="text-slate-900 font-medium">{selectedOption.label}</span>
                      </>
                    ) : (
                      "Select a service..."
                    )}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <>
                    {/* Invisible overlay to catch clicks outside the dropdown */}
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)}></div>
                    
                    <div className="absolute z-20 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, service: option.value }));
                            setIsDropdownOpen(false);
                            setError(""); // Clear error if they select an option
                          }}
                          className="w-full px-5 py-3 text-left flex items-center gap-3 hover:bg-[#ECF5FB] transition-colors group"
                        >
                          <option.icon className="w-5 h-5 text-slate-400 group-hover:text-golomon-primary transition-colors" />
                          <span className="text-slate-700 font-medium group-hover:text-golomon-primary transition-colors">
                            {option.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all resize-none text-slate-900"
                  placeholder="Tell us about your project or business challenge..."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-golomon-secondary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-xs text-slate-500 mt-4">
                By submitting this form, you agree to our privacy policy. We will never share your work email.
              </p>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}