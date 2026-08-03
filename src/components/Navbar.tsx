"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Initialize theme based on system/localStorage
    const stored = localStorage.getItem("color-scheme") as "light" | "dark" | null;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const initialTheme = stored || (systemDark ? "dark" : "light");
    
    const timer = setTimeout(() => {
      setTheme(initialTheme);
    }, 0);
    
    // Set meta tag and html class
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute("content", initialTheme);
    }
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Set up media query listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("color-scheme")) {
        const nextTheme = e.matches ? "dark" : "light";
        setTheme(nextTheme);
        if (meta) meta.setAttribute("content", nextTheme);
        if (nextTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    // Set up intersection observer for active section highlighting
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on middle portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      clearTimeout(timer);
      mediaQuery.removeEventListener("change", handleChange);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("color-scheme", nextTheme);
    
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute("content", nextTheme);
    }
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 64; // Approx height of sticky navbar
      const offsetPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand/Name Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="font-serif text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity cursor-pointer text-foreground"
        >
          S. Jannat Ema
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`relative py-1 cursor-pointer transition-colors hover:text-accent-hover ${
                    activeSection === item.id
                      ? "text-accent font-semibold"
                      : "text-muted-text"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-border" />

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-border transition-colors cursor-pointer text-muted-text hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-border transition-colors cursor-pointer text-muted-text hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-border transition-colors cursor-pointer text-muted-text hover:text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`w-full text-left py-2 cursor-pointer transition-colors ${
                    activeSection === item.id
                      ? "text-accent font-semibold"
                      : "text-muted-text"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
