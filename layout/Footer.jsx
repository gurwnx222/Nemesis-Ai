import React from 'react';

import { Instagram, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" w-full">
      {/* Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      {/* Footer Content */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          {/* Social Links - Left Side */}
          <div className="flex items-center gap-6">
            <span className="text-gray-700 text-sm font-medium hidden sm:block">
              Get in touch
            </span>

            <div className="flex items-center gap-4">
              <a
                href="mailto:gurwinx369@gmail.com"
                className="text-gray-500 hover:text-gray-100 transition-colors duration-200"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://www.instagram.com/x_gurwinxr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://x.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="Follow us on X"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Copyright - Right Side */}
          <div className="text-gray-600 text-sm">
            © 2025 Your Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
