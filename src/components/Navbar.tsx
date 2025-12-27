"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#agents", label: "Meet Experts" },
  { href: "#demo", label: "Ask BMC" },
  { href: "#bio", label: "Architect" },
  { href: "#qa", label: "Manifesto" },
  { href: "#architecture", label: "Tech Stack" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="font-pixel text-lg font-bold tracking-tighter flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
            <span className="text-2xl">🏘️</span> BMC TOWN
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="transition-colors text-slate-300 hover:text-fuchsia-400"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            {/* Download Slides Button */}
            <Button 
              asChild
              variant="glass"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <a 
                href="/BMC_Town_Democratizing_Strategy.pdf" 
                download
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-1" />
                Slides
              </a>
            </Button>
            
            {/* Cost Simulator Button */}
            <Button 
              asChild
              variant="navCta"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link 
                href="/cost-simulator"
              >
                Cost Simulator
              </Link>
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute inset-x-0 top-0 pt-24 px-6 pb-8 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-lg font-medium text-slate-200 hover:bg-white/10 hover:text-fuchsia-400 hover:border-fuchsia-500/30 transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className="text-slate-500">→</span>
              </a>
            ))}
          </nav>
          
          {/* Mobile CTAs */}
          <div className="mt-6 flex flex-col gap-3">
            <Button 
              asChild
              variant="glass"
              size="lg"
              className="w-full"
            >
              <a 
                href="/BMC_Town_Democratizing_Strategy.pdf" 
                download
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleLinkClick}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Slides
              </a>
            </Button>
            
            <Button 
              asChild
              variant="gradient"
              size="lg"
              className="w-full"
            >
              <Link 
                href="/cost-simulator"
                onClick={handleLinkClick}
              >
                Cost Simulator
              </Link>
            </Button>
          </div>
          
          {/* Mobile footer info */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Business Model Canvas Town
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
