"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mail } from "lucide-react";

// Custom WhatsApp SVG Icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
};

export default function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInitialTooltip, setShowInitialTooltip] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "bot", text: "Hi! Welcome to Golomon. How can we help you today?" }
  ]);

  const quickActions = [
    "Our solutions", 
    "Pricing", 
    "Custom Software", 
    "Infrastructure", 
    "I need support"
  ];

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Hide the initial welcome tooltip after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowInitialTooltip(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { id: Date.now(), sender: "user", text }]);
    setInputValue("");

    // Simulate bot typing delay and response
    setTimeout(() => {
      let botReply = "Thanks for reaching out! One of our experts will assist you shortly. For immediate help, please use the WhatsApp or Email buttons below.";

      if (text === "Our solutions") {
        botReply = "Our core solutions include:\n• Custom Software Development\n• Computing Infrastructure\n• Systems Integration\n• Lifecycle Support\n\nAsk about any of them.";
      } else if (text === "Pricing") {
        botReply = "Our pricing is tailored to your specific infrastructure and software needs. Would you like to schedule a free consultation?";
      } else if (text === "Custom Software") {
        botReply = "We build custom web apps, ERPs, and mobile applications shaped around your exact workflows. What are you looking to build?";
      } else if (text === "Infrastructure") {
        botReply = "We modernize legacy environments, deploy hybrid cloud solutions, and manage corporate networks. How can we improve your infrastructure?";
      } else if (text === "I need support") {
        botReply = "Sorry you are having issues! Please email support@golomon.com or WhatsApp us at +254 700 000 000 for immediate technical assistance.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: "bot", text: botReply }]);
    }, 600);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (showInitialTooltip) setShowInitialTooltip(false);
  };

  const shouldShowTooltip = (showInitialTooltip || isHovered) && !isOpen;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 1. Chat Window */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden mb-4 flex flex-col h-[550px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-[#001433] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-golomon-primary rounded-full flex items-center justify-center font-bold text-lg">
                  G
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#001433] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-sm">Golomon Support</h3>
                <p className="text-xs text-blue-200">We reply within 24 hours</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div 
                  className={`max-w-[85%] p-3 text-[15px] leading-relaxed whitespace-pre-wrap ${
                    msg.sender === "user" 
                      ? "bg-golomon-primary text-white rounded-2xl rounded-tr-sm" 
                      : "bg-white text-slate-700 border border-slate-100 shadow-sm rounded-2xl rounded-tl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => handleSend(action)}
                    className="px-4 py-2 bg-white border border-golomon-primary text-golomon-primary text-sm font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer / Input Area */}
          <div className="bg-white p-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex gap-2">
              <a 
                href="mailto:info@golomon.com" 
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-golomon-primary text-sm font-bold transition-colors"
              >
                <Mail className="w-4 h-4" /> Email support
              </a>
              <a 
                href="https://wa.me/254700000000" 
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#E8F8F0] hover:bg-[#d1f1df] text-[#128C7E] rounded-xl text-sm font-bold transition-colors"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>

            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full p-1 pl-4 focus-within:border-golomon-primary transition-colors"
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-700"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-golomon-primary text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-900 transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4 -ml-0.5 mt-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 2. Floating Action Button & Hover Tooltip Wrapper */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip Bubble - hidden md:block added to prevent appearing on mobile */}
        {shouldShowTooltip && (
          <div className="hidden md:block absolute right-[115%] bottom-2 w-64 bg-white p-3.5 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.1)] border border-slate-100 text-sm text-slate-700 animate-in fade-in slide-in-from-right-4 duration-300">
            <strong>Need help?</strong> Ask us about our products, pricing or support.
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white border-r border-t border-slate-100 rotate-45"></div>
          </div>
        )}

        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-golomon-primary hover:bg-blue-900 text-white rounded-full shadow-[0_0_20px_rgba(0,54,144,0.4)] hover:shadow-[0_0_25px_rgba(0,54,144,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {isOpen ? <X className="w-8 h-8" /> : <MessageCircle className="w-8 h-8" />}
        </button>
      </div>
    </div>
  );
}