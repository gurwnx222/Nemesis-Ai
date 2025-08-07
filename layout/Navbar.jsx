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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-gray-900 bg-opacity-90 backdrop-blur-sm rounded-full px-8 py-4 justify-center items-center space-x-12">
        {navItems.map(item => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium tracking-wide"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header */}
        <div
          className={`text-white flex justify-between items-center px-4 ${brunoAceSC.className}`}
        >
          <h2 className="tracking-widest font-bold text-xl">Nemesis</h2>
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black cursor-pointer text-xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen ? (
          <div className="mt-4 bg-gray-900 bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 mx-4">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium tracking-wide text-left py-2"
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
