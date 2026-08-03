"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center md:items-start mb-12">
          <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact details */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Whether you are a university recruiter, research advisor, lab supervisor, or colleague, please feel free to reach out. I will respond to all academic inquiries as promptly as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-accent/5 text-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-text tracking-wider block">Email</span>
                  <a
                    href="mailto:shakerajannatema@gmail.com"
                    className="text-sm font-semibold hover:underline text-foreground"
                  >
                    shakerajannatema@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-accent/5 text-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-text tracking-wider block">Phone</span>
                  <a
                    href="tel:+8801854088947"
                    className="text-sm font-semibold hover:underline text-foreground"
                  >
                    +8801854088947
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-accent/5 text-accent">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-text tracking-wider block">Location</span>
                  <span className="text-sm font-semibold text-foreground">
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border flex gap-4">
              <a
                href="https://linkedin.com/in/shakera-jannat-ema-994932238"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 rounded-full border border-border text-muted-text hover:text-foreground hover:bg-border/20 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://github.com/shakeraema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2.5 rounded-full border border-border text-muted-text hover:text-foreground hover:bg-border/20 transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-lg border border-border bg-card-bg shadow-sm">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-lg flex flex-col items-center text-center gap-3 animate-in fade-in zoom-in-95 duration-200">
                <CheckCircle className="text-emerald-500 w-10 h-10" />
                <div>
                  <h4 className="text-sm font-bold text-foreground">Message Sent Successfully</h4>
                  <p className="text-xs text-muted-text mt-1">
                    Thank you for your message. I will review it and get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-semibold text-accent hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-text">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded border border-border bg-background text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-text">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 rounded border border-border bg-background text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="advisor@university.edu"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-muted-text">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 rounded border border-border bg-background text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Inquiry regarding PhD recruitment / Research Assistantship"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded border border-border bg-background text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Please write your detailed academic or recruitment message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-6 h-11 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
