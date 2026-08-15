import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight, BookOpen, Building2 } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  activeTab: 'landing' | 'consulting' | 'academy';
  setActiveTab: (tab: 'landing' | 'consulting' | 'academy') => void;
  openDiagnosticModal: () => void;
  openInquiryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openDiagnosticModal,
  openInquiryModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0A0D14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Slogan */}
        <div 
          onClick={() => setActiveTab('landing')}
          className="cursor-pointer flex items-center gap-3 group"
        >
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
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-950/80 text-cyan-300 border border-cyan-800/50 font-medium">
                v1.2
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {BRAND.koreanName}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800">
          <button
            onClick={() => setActiveTab('landing')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === 'landing'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => setActiveTab('consulting')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'consulting'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Building2 className="w-4 h-4" />
            CONSULTING <span className="text-[10px] text-cyan-300 bg-blue-900/50 px-1.5 py-0.5 rounded">B2B</span>
          </button>
          <button
            onClick={() => setActiveTab('academy')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              activeTab === 'academy'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            ACADEMY <span className="text-[10px] text-cyan-300 bg-indigo-900/50 px-1.5 py-0.5 rounded">B2C</span>
          </button>
        </nav>

        {/* Quick Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={openDiagnosticModal}
            className="hidden lg:flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/50 border border-cyan-700/50 px-3.5 py-2 rounded-lg font-medium transition-all"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            AX 역량 진단
          </button>
          <button
            onClick={openInquiryModal}
            className="flex items-center gap-2 text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-4 py-2.5 rounded-lg shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
          >
            기업 AX 문의
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="md:hidden flex border-t border-slate-800/80 bg-slate-950/80 px-2 py-1.5 justify-around">
        <button
          onClick={() => setActiveTab('landing')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
            activeTab === 'landing' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          HOME
        </button>
        <button
          onClick={() => setActiveTab('consulting')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
            activeTab === 'consulting' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          CONSULTING (B2B)
        </button>
        <button
          onClick={() => setActiveTab('academy')}
          className={`px-3 py-1.5 text-xs font-semibold rounded-md ${
            activeTab === 'academy' ? 'bg-blue-600 text-white' : 'text-slate-400'
          }`}
        >
          ACADEMY (B2C)
        </button>
      </div>
    </header>
  );
};
