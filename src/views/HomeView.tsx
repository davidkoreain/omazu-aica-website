import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Layers,
  Compass
} from 'lucide-react';
import { 
  BRAND, 
  HOME_HERO, 
  WHY_OMAZU_POINTS, 
  METHODOLOGY_REFERENCES, 
  OUTPUT_CHAIN,
  DIAGNOSTIC_DOMAINS,
  AX_ASSETS,
  FRAMEWORK_3LAYERS,
  CORE_CONCEPTS
} from '../data/content';

interface HomeViewProps {
  openInquiryModal: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ openInquiryModal }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 01. HERO SECTION (v2.1B Refined & Concise) */}
      <section className="relative pt-8 lg:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{HOME_HERO.subcopy}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {HOME_HERO.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {HOME_HERO.body}
            </p>

            {/* CTAs (Primary 1개 우선, Secondary 위계 낮게) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={openInquiryModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Building2 className="w-4.5 h-4.5" />
                상담 신청
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                to="/consulting"
                className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition-all text-center"
              >
                자세히 보기
              </Link>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 group">
              <img 
                src="/images/hero_ai_consulting.jpg" 
                alt="OMAZU AI Neural Network & Architecture Visualization" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  <div>
                    <div className="text-xs font-bold text-white">AX Execution Architecture</div>
                    <div className="text-[11px] text-slate-300">Enterprise AI Neural Workflow &amp; Trust Layer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 02. CONSULTING / ACADEMY (두 사업축을 동일 위계로 노출) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CONSULTING PATH */}
          <div className="glass-card rounded-3xl border border-blue-800/40 overflow-hidden flex flex-col justify-between group hover:border-blue-500/60 transition-all">
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/b2b_ax_consulting.jpg" 
                alt="OMAZU AX Consulting" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold px-3 py-1 bg-blue-950/90 text-blue-300 rounded-full border border-blue-700/80 backdrop-blur-md">
                  CONSULTING
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  CONSULTING
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mb-3">
                  AI 도입이 아니라, 우리 조직의 업무 전환과 투자 판단을 설계합니다.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  4대 진단과 현업 참여 업무 재설계를 거쳐 Micro-PoC 및 OMAZU FDE Co-Build로 실제 시스템 구축과 운영·확산까지 연결합니다.
                </p>
              </div>

              <Link
                to="/consulting"
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                Consulting 자세히 보기
              </Link>
            </div>
          </div>

          {/* ACADEMY PATH */}
          <div className="glass-card rounded-3xl border border-indigo-800/40 overflow-hidden flex flex-col justify-between group hover:border-indigo-500/60 transition-all">
            <div className="relative h-52 overflow-hidden">
              <img 
                src="/images/academy_ai_bootcamp.jpg" 
                alt="OMAZU Academy" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-xs font-bold px-3 py-1 bg-indigo-950/90 text-cyan-300 rounded-full border border-indigo-700/80 backdrop-blur-md">
                  ACADEMY
                </span>
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ACADEMY
                </h3>
                <p className="text-xs font-semibold text-cyan-300 mb-3">
                  퇴근 후 AI, 내 수준을 알고 내 결과물을 만듭니다.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  사전진단 ➔ 2DAYS Sprint ➔ 현장 적용 후 완결 결과물과 나만의 재사용 Workflow &amp; Template을 완성합니다.
                </p>
              </div>

              <Link
                to="/academy"
                className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                Academy 자세히 보기
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 03. OMAZU APPROACH (4대 Lens + DIAGNOSE ➔ DESIGN ➔ VALIDATE + Output Chain) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded border border-cyan-800">
              OMAZU APPROACH
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              현재 상태를 진단하고, 우선과제를 설계하고,<br />실제 업무에서 검증해 투자판단까지 연결합니다.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              진단도구와 Framework를 별도로 사용하지 않는 하나의 통합 실행 체계입니다.
            </p>
          </div>

          {/* 3-Layer Signature Graphic */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FRAMEWORK_3LAYERS.map((item, idx) => (
              <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400">0{idx + 1}. {item.layer}</div>
                <p className="text-xs text-slate-200 leading-relaxed font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Output Chain Flow */}
          <div className="pt-4 border-t border-slate-800/80 space-y-6">
            <div className="text-xs font-mono text-center text-slate-400 uppercase tracking-wider">
              OMAZU EXECUTION OUTPUT CHAIN
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              {OUTPUT_CHAIN.map((o) => (
                <div key={o.step} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-left">
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">{o.step}</div>
                  <div className="text-xs font-bold text-white mb-1">{o.name}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{o.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 04. WHY OMAZU (3가지 독립 핵심 차별점) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            WHY OMAZU
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            OMAZU만의 3가지 독보적 핵심 차별성
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_OMAZU_POINTS.map((pt, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 05. REFERENCE-BASED METHODOLOGY */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 space-y-4 text-center">
          <span className="text-xs font-mono font-bold px-3 py-1 bg-blue-950 text-cyan-300 rounded border border-blue-800">
            {METHODOLOGY_REFERENCES.title}
          </span>
          <p className="text-xs sm:text-sm text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {METHODOLOGY_REFERENCES.desc}
          </p>
        </div>
      </section>

      {/* 06. PARTNERSHIP (Fasoo × OMAZU MOU 섹션) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 text-cyan-300 text-xs font-bold border border-blue-800">
                <Lock className="w-3.5 h-3.5" />
                SECURITY &amp; DATA PARTNERSHIP
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Fasoo × OMAZU Partnership
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {BRAND.fasooNotice}
              </p>
              <div className="pt-2">
                <button
                  onClick={openInquiryModal}
                  className="py-3.5 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow transition-all"
                >
                  Fasoo 파트너십 연계 상담
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 h-full relative min-h-[260px]">
              <img 
                src="/images/security_data_trust.jpg" 
                alt="Fasoo and OMAZU Security Shield" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block hidden" />
            </div>

          </div>
        </div>
      </section>

      {/* 07. FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="glass-card p-10 lg:p-14 rounded-3xl border border-blue-900/60 relative overflow-hidden space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            우리 조직의 AX 전환,<br />
            <span className="gradient-text">지금 무엇이 가능한지 진단하는 것</span>에서 시작합니다.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openInquiryModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              상담 신청
            </button>
            <Link
              to="/consulting"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all hover:scale-105"
            >
              Consulting 알아보기
            </Link>
            <Link
              to="/academy"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-bold text-sm transition-all hover:scale-105"
            >
              Academy 알아보기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
