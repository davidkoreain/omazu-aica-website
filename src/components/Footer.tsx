import React from 'react';
import { Sparkles, Shield, Mail, ExternalLink } from 'lucide-react';
import { BRAND } from '../data/content';

interface FooterProps {
  setActiveTab: (tab: 'landing' | 'consulting' | 'academy') => void;
  openInquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openInquiryModal }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              OMAZU <span className="text-cyan-400">AICA</span>
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-200">
            {BRAND.slogan}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            {BRAND.sloganKo}
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs text-cyan-400 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-800/40 max-w-md">
            <Shield className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>{BRAND.fasooMou}</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button 
                onClick={() => setActiveTab('landing')}
                className="hover:text-cyan-400 transition-colors"
              >
                01. LANDING PAGE
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('consulting')}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                02. CONSULTING (B2B AX)
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('academy')}
                className="hover:text-cyan-400 transition-colors"
              >
                03. ACADEMY (퇴근 후 AI)
              </button>
            </li>
          </ul>
        </div>

        {/* Inquiry & Legal */}
        <div>
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
            Contact & Partnership
          </h4>
          <p className="text-xs text-slate-400 mb-3">
            AX 진단 및 기업 맞춤형 PoC/교육, Fasoo 솔루션 연계 문의
          </p>
          <button
            onClick={openInquiryModal}
            className="w-full text-xs bg-slate-800 hover:bg-slate-700 text-slate-100 py-2.5 px-4 rounded-lg border border-slate-700 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            기업 AX 상담 신청
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <p>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-slate-400 cursor-pointer">개인정보 처리방침</span>
          <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
          <span className="hover:text-slate-400 cursor-pointer flex items-center gap-1">
            Fasoo Partnership <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </footer>
  );
};
