"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactPage() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

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
      // Optional: Clear form if you want to allow multiple submissions
      // setFormData({ firstName: "", lastName: "", email: "", company: "", service: "", message: "" });
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full bg-[#F8FAFC] flex flex-col pt-24 min-h-screen">
      
      {/* Page Header */}
      <section className="w-full pt-16 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-golomon-secondary font-bold text-sm tracking-widest uppercase mb-4 block">
            Let's Talk
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Contact <span className="text-golomon-primary">Golomon</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to build a stronger digital foundation? Reach out to our team in Nairobi to discuss your technology needs, request a quote, or schedule a consultation.
          </p>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className="w-full py-16 flex-grow">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            
            {/* Left: Contact Information (Brand Theme) */}
            <div className="w-full lg:w-5/12 bg-golomon-primary p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Background Tech Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <path d="M -50 100 L 150 100 L 250 200 L 400 200" stroke="#ECF5FB" strokeWidth="2" fill="none" />
                  <path d="M 0 300 L 100 300 L 200 400" stroke="#CD5007" strokeWidth="2" fill="none" />
                  <circle cx="250" cy="200" r="4" fill="#ECF5FB" />
                </svg>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-12 tracking-tight">
                  Our Nairobi Office
                </h3>

                <div className="space-y-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Mail className="w-5 h-5 text-golomon-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200 font-medium mb-1">General Inquiries</p>
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
                      <p className="text-sm text-blue-200 font-medium mb-1">Direct Line</p>
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
                      <p className="text-sm text-blue-200 font-medium mb-1">Location</p>
                      <p className="text-lg font-bold">
                        Nairobi, Kenya
                      </p>
                      <p className="text-blue-100 text-sm mt-1">
                        Serving organizations across East Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form / Success State */}
            <div className="w-full lg:w-7/12 p-12 lg:p-16 bg-white flex flex-col justify-center">
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-lg text-slate-600 max-w-md">
                    Thank you for reaching out, {formData.firstName}. Our team will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 bg-slate-100 text-slate-700 font-bold px-8 py-3 rounded-full hover:bg-slate-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
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

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-slate-700">How can we help? <span className="text-red-500">*</span></label>
                      <select 
                        id="service" 
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-golomon-primary focus:ring-1 focus:ring-golomon-primary transition-all text-slate-700"
                      >
                        <option value="">Select a service...</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="infrastructure">Computing Infrastructure</option>
                        <option value="integration">Systems Integration</option>
                        <option value="support">Lifecycle Support</option>
                        <option value="other">Other Inquiry</option>
                      </select>
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
                </>
              )}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}