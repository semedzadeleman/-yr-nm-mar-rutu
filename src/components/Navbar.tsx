import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ViewId } from '../types';

interface NavbarProps {
  activeView: ViewId;
  onNavigate: (view: ViewId, anchorId?: string) => void;
  onStartLearning: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, onNavigate, onStartLearning }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: Array<{ label: string; view: ViewId; anchorId?: string; isActive: boolean }> = [
    { label: 'Ana səhifə', view: 'home', isActive: activeView === 'home' },
    { label: 'Yaş və Səviyyə', view: 'setup', isActive: activeView === 'setup' },
    { label: 'Fənlər', view: 'home', anchorId: 'fenler', isActive: false },
    { label: 'Marşrutum', view: 'route', isActive: activeView === 'route' },
    { label: 'Müəllimlər', view: 'teachers', isActive: activeView === 'teachers' },
  ];

  const handleNavClick = (item: (typeof navItems)[number]) => {
    setMobileOpen(false);
    onNavigate(item.view, item.anchorId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9FF]/95 backdrop-blur-md border-b border-[#E8E2F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            onNavigate('home');
          }}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 rounded-lg cursor-pointer"
        >
          <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" aria-hidden="true">
            <rect x="2" y="2" width="32" height="32" rx="10" fill="#6D28D9" />
            <path
              d="M9 24 C14 24 15 15 21 15 C25 15 26 11 28 11"
              fill="none"
              stroke="#DDD6FE"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 4"
            />
            <path
              d="M25.5 7.5 L27 10.5 L30.2 11 L27.8 13.2 L28.4 16.4 L25.5 14.8 L22.6 16.4 L23.2 13.2 L20.8 11 L24 10.5 Z"
              fill="#FDE047"
            />
          </svg>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1E1B3A] whitespace-nowrap shrink-0">
            ÖyrənməMarşrutu
          </span>
        </button>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Əsas naviqasiya">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 ${
                item.isActive
                  ? 'border-violet-700 text-violet-900 font-semibold'
                  : 'border-transparent text-slate-600 hover:text-[#1E1B3A] hover:border-violet-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onStartLearning();
            }}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-violet-700 hover:bg-violet-800 rounded-xl shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
          >
            Öyrənməyə başla
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#E5DFF7] bg-white text-[#1E1B3A] hover:bg-violet-50 transition-colors cursor-pointer"
            aria-label={mobileOpen ? 'Menyunu bağla' : 'Menyunu aç'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E8E2F6] bg-white px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                item.isActive ? 'bg-violet-50 text-violet-900' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onStartLearning();
            }}
            className="w-full mt-2 px-5 py-3 text-sm font-semibold text-white bg-violet-700 hover:bg-violet-800 rounded-xl transition-colors cursor-pointer"
          >
            Öyrənməyə başla
          </button>
        </div>
      )}
    </header>
  );
};
