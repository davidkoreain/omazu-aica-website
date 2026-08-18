import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, ArrowRight, Menu, X, Building2 } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  openInquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ openInquiryModal }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'CONSULTING', path: '/consulting' },
    { label: 'ACADEMY', path: '/academy' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0D14]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 p-[1px] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0A0D14] rounded-[11px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                OMAZU <span className="text-cyan-400 font-extrabold">AICA</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              {BRAND.koreanName}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation (Strict 3 Items: HOME / CONSULTING / ACADEMY as per v2.1) */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Primary CTA (Single Action as per v2.1 Part B Item 02) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openInquiryModal}
            className="flex items-center gap-2 text-xs sm:text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Building2 className="w-4 h-4" />
            상담 신청
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={openInquiryModal}
            className="text-xs bg-blue-600 text-white px-3 py-2 rounded-lg font-bold"
          >
            상담 신청
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-300 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                isActive(item.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => { setMobileMenuOpen(false); openInquiryModal(); }}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              상담 신청하기
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
