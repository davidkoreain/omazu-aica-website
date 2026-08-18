import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Shield, Mail } from 'lucide-react';
import { BRAND } from '../data/content';

interface FooterProps {
  openInquiryModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openInquiryModal }) => {
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
          <p className="text-sm font-bold text-slate-200">
            {BRAND.sloganPrimary}
          </p>
          <p className="text-xs text-cyan-300 font-semibold">
            {BRAND.sloganSecondary}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed max-w-lg">
            {BRAND.description}
          </p>

          <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
            <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>대표 이메일: <strong className="text-white font-mono">{BRAND.email}</strong></span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/consulting" className="hover:text-cyan-400 transition-colors">
                CONSULTING
              </Link>
            </li>
            <li>
              <Link to="/academy" className="hover:text-cyan-400 transition-colors">
                ACADEMY
              </Link>
            </li>
          </ul>
        </div>

        {/* Action */}
        <div>
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
            Contact &amp; Partnership
          </h4>
          <p className="text-xs text-slate-400 mb-3">
            AX 진단, Decision Sprint, Micro-PoC 및 Fasoo 파트너십 문의
          </p>
          <button
            onClick={openInquiryModal}
            className="w-full text-xs bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4 text-white" />
            상담 신청하기
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
        <p>© 2026 {BRAND.name} ({BRAND.koreanName}). All rights reserved. Official Domain: <span className="font-mono text-cyan-400">{BRAND.domain}</span></p>
        <div className="flex gap-6 text-[11px]">
          <Link to="/privacy" className="hover:text-slate-200 transition-colors">개인정보처리방침</Link>
          <Link to="/terms" className="hover:text-slate-200 transition-colors">이용약관</Link>
        </div>
      </div>
    </footer>
  );
};
