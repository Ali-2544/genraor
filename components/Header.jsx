'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ), label: 'Publish and schedule', slug: 'publish-and-schedule' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Social media analytics', slug: 'social-media-analytics' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ), label: 'Social listening', slug: 'social-listening' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Social media AI assistant', slug: 'social-media-ai-assistant' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'AI content creation', slug: 'ai-content-creation' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Best times to post', slug: 'best-times-to-post' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Engagement tools', slug: 'engagement-tools' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Inbox and messaging', slug: 'inbox-and-messaging' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Employee advocacy', slug: 'employee-advocacy' },
  { icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 16l8-8" stroke="currentColor" strokeWidth="2"/></svg>
    ), label: 'Social advertising', slug: 'social-advertising' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const featuresTimeout = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Features menu handlers
  const handleFeaturesEnter = () => {
    if (featuresTimeout.current) clearTimeout(featuresTimeout.current);
    setFeaturesOpen(true);
  };
  const handleFeaturesLeave = () => {
    featuresTimeout.current = setTimeout(() => setFeaturesOpen(false), 120);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
              href="/"
              >

          <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            GENROAR
          </span>
          </Link>


          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8">
            <div
              className="relative group"
              onMouseEnter={handleFeaturesEnter}
              onMouseLeave={handleFeaturesLeave}
            >
              <button
                className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black' : 'text-white'}`}
                type="button"
                aria-haspopup="true"
                aria-expanded={featuresOpen}
              >
                Features
              </button>
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6 z-50 transition-all duration-200 ${featuresOpen ? 'block' : 'hidden'}`}
                onMouseEnter={handleFeaturesEnter}
                onMouseLeave={handleFeaturesLeave}
              >
                {features.map((item, idx) => (
                  <Link href={`/features/${item.slug}`} key={idx} className="flex items-center space-x-4 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition">
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </Link>
                ))}
                <div className="col-span-2 pt-4 border-t">
                  <Link href="/features" className="w-full text-blue-700 font-semibold flex items-center justify-between px-2 py-2 hover:underline">
                    Explore all features
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors hover:text-blue-600 ${scrolled ? 'text-black ' : 'text-white'}`}
            >
              Contact
            </Link>
            {/* Features Mega Menu (centered) */}

          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 font-medium text-blue-600 border border-blue-600 rounded-lg transition hover:bg-blue-50">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition">
              Start for free trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 w-full shadow-lg md:hidden top-16 bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('onepost')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                OnePost
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                Contact
              </button>
              {/* Features Mega Menu for Mobile */}
              <div>
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="font-medium text-left text-gray-700 transition-colors hover:text-blue-600 w-full flex justify-between items-center"
                >
                  Features
                  <span>{featuresOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}</span>
                </button>
                {featuresOpen && (
                  <div className="mt-2 bg-white rounded-xl shadow-lg p-4 grid grid-cols-1 gap-2">
                    {features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer transition">
                        <span className="text-blue-600">{item.icon}</span>
                        <span className="font-medium text-gray-900">{item.label}</span>
                      </div>
                    ))}
                    <div className="pt-2 border-t">
                      <button className="w-full text-blue-700 font-semibold flex items-center justify-between px-2 py-2 hover:underline">
                        Explore all features
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}