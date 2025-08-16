'use client';
import React, { useState } from 'react';
// eslint-disable-next-line camelcase
import { Bruno_Ace_SC } from 'next/font/google';

const brunoAceSC = Bruno_Ace_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Vision', href: '#vision' },
    { name: 'Team', href: '#team' },
    { name: 'Features', href: '#features' },
  ];

  const scrollToSection = href => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 justify-between items-center shadow-2xl">
        {/* Logo */}
        <div className={`${brunoAceSC.className}`}>
          <h2 className="text-white/90 font-bold text-xl tracking-[0.2em] drop-shadow-lg">
            Nemesis
          </h2>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-12">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-white/80 hover:text-white transition-all duration-300 text-lg font-medium tracking-wide hover:scale-105 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div
          className={`text-white flex justify-between items-center px-4 ${brunoAceSC.className}`}
        >
          <h2 className="tracking-widest font-bold text-xl drop-shadow-lg">
            Nemesis
          </h2>
          <div className="bg-black/30 backdrop-blur-md border border-white/20 w-10 h-10 rounded-full flex justify-center items-center shadow-lg">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white cursor-pointer text-xl hover:scale-110 transition-transform duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
          <div className="mt-4 bg-black/25 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mx-4 shadow-2xl">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white/80 hover:text-white transition-all duration-300 text-lg font-medium tracking-wide text-left py-2 hover:translate-x-2 hover:bg-white/5 rounded-lg px-3 -mx-3"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
