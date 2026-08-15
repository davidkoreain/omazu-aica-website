import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  BookOpen, 
  Zap, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Lock, 
  FileCheck,
  Compass,
  Sparkles
} from 'lucide-react';
import { 
  BRAND, 
  LANDING_HERO, 
  DIAGNOSTIC_DOMAINS, 
  AX_ASSETS 
} from '../data/content';

interface LandingViewProps {
  setActiveTab: (tab: 'landing' | 'consulting' | 'academy') => void;
  openDiagnosticModal: () => void;
  openInquiryModal: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  setActiveTab,
  openDiagnosticModal,
  openInquiryModal,
}) => {
  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold mb-8 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{BRAND.slogan}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          {LANDING_HERO.headCopy}
        </h1>

        <p className="text-lg sm:text-xl text-cyan-300 font-semibold max-w-3xl mx-auto mb-6">
          {LANDING_HERO.midCopy}
        </p>

        <p className="text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          {LANDING_HERO.detail}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={openInquiryModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Building2 className="w-5 h-5" />
            기업 AX 진단·상담 신청
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('academy')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <BookOpen className="w-5 h-5 text-cyan-400" />
            퇴근 후 AI 보기
          </button>
        </div>

        {/* TRUST BAR / FASOO MOU */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto">
          <div className="glass-card p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-blue-900/60 text-cyan-300 font-bold text-xs border border-blue-700/50">
                MOU
              </span>
              <span className="text-white font-bold text-sm">
                Fasoo × OMAZU
              </span>
              <span className="text-slate-400 border-l border-slate-700 pl-3">
                AX 교육·컨설팅 협력 MOU
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[11px] font-mono">
              <span>진단</span> · <span>설계</span> · <span>교육</span> · <span>PoC</span> · <span>기술 연계</span> · <span>성과검증</span>
            </div>
          </div>
        </div>
      </section>

      {/* OMAZU DIAGNOSTICS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold mb-3 border border-cyan-800/40">
            <ShieldCheck className="w-4 h-4" />
            OMAZU DIAGNOSTICS
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            모든 설계는 진단에서 시작합니다.
          </h2>
          <p className="text-slate-300 text-base font-semibold mb-3">
            AX 프레임워크와 동일한 축으로 설계된 조직 및 개인 AI 역량 진단
          </p>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            단순히 AI를 얼마나 쓰는지 묻지 않습니다. 기업은 AI 활용역량, 업무 프로세스, AX Execution Foundation, Enterprise Trust의 네 관점에서 실행준비도를 확인합니다. 진단 결과는 교육, 우선과제 선정, 실습과 Micro-PoC의 출발점이 됩니다.
          </p>
        </div>

        {/* 4 Diagnostic Domains */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {DIAGNOSTIC_DOMAINS.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/60 text-cyan-400 flex items-center justify-center mb-4 font-bold font-mono">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.domain}
                </h3>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {item.question}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 text-[11px] text-cyan-400 font-medium flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>결과: {item.result}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Framework & Assets Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-2xl font-extrabold text-white">
                OMAZU AX Framework
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                AX 자산 5영역 · 3-Layer 실행구조 · AX-BPR 9요소 · Enterprise Trust를 기반으로 기업의 AI 전환을 체계화합니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={openDiagnosticModal}
                  className="px-5 py-2.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 text-xs font-bold flex items-center gap-2 transition-all"
                >
                  <Compass className="w-4 h-4 text-cyan-400" />
                  온라인 실행준비도 진단 체험
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AX_ASSETS.map((asset, idx) => (
                <div key={idx} className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-xs font-bold text-cyan-400 mb-1">
                    {asset.name}
                  </div>
                  <div className="text-xs text-white font-medium mb-1">
                    {asset.desc}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    역할: {asset.role}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TWO PATHS (CHOOSE YOUR PATH) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-3">
            TWO PATHS: 나에게 맞는 경로 선택
          </h2>
          <p className="text-slate-400 text-sm">
            기업의 조직적 전환(B2B)과 개인의 일하는 방식 전환(B2C)을 명확히 구분하여 최적의 실행을 지원합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PATH 1: CONSULTING (B2B) */}
          <div className="glass-card p-8 rounded-3xl border border-blue-800/40 relative overflow-hidden flex flex-col justify-between group hover:border-blue-500/60 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-950 border border-blue-700/60 text-blue-400 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-blue-950 text-blue-300 rounded-full border border-blue-800">
                  CONSULTING (B2B)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                업무문제에서 투자판단까지
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-4">
                도구를 배우는 것, 들여오는 것만으로 AX가 시작되지 않습니다. 무엇을 바꿀지 먼저 정합니다.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                실제 업무를 분해하고 지식·데이터·업무흐름·시스템·전문성을 구조화해 AI와 사람의 역할, 권한, 승인을 설계합니다. 작은 범위의 Micro-PoC로 작동성과 성과를 검증하고 ROI를 판단합니다.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Priority AX Initiative 선정 (업무문제 출발)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>현업 Co-Build 방식으로 직접 업무 분석·설계</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Enterprise Trust 내장 (권한·보안·승인 통제)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>실제 업무성과 및 ROI 투자 가치 검증</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('consulting')}
                className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                Consulting 자세히 보기
              </button>
              <button
                onClick={openInquiryModal}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
              >
                기업 문의
              </button>
            </div>
          </div>

          {/* PATH 2: ACADEMY (B2C) */}
          <div className="glass-card p-8 rounded-3xl border border-indigo-800/40 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/60 transition-all">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-950 border border-indigo-700/60 text-cyan-400 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-indigo-950 text-cyan-300 rounded-full border border-indigo-800">
                  ACADEMY (B2C)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                진단에서 내 결과물까지 ‘퇴근 후 AI’
              </h3>
              <p className="text-xs font-semibold text-cyan-300 mb-4">
                사전진단으로 내 강점과 개발 우선순위를 알고, 두 번의 몰입으로 내 일과 아이디어를 완결합니다.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                ‘퇴근 후 AI'는 2DAYS 부트캠프입니다. AI COURSE와 CREATOR COURSE로 나뉩니다. DAY 1에서 첫 결과를 만들고 현장에서 써 본 뒤, DAY 2에서 피드백과 검증으로 완성도 높은 재사용 Workflow를 정리합니다.
              </p>

              <ul className="space-y-2.5 text-xs text-slate-300 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>사전진단으로 개인 역량 및 개발 영역 확인</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>내 과제 구조화 &amp; 2DAYS Split 체계</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>DAY 1 실습 후 현장 적용 ➔ DAY 2 피드백 보완</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>수업 후 완결 결과물 + 재사용 Template 증정</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveTab('academy')}
                className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                Academy 과정 보기
              </button>
              <button
                onClick={() => setActiveTab('academy')}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors"
              >
                개강 알림 신청
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FASOO PARTNERSHIP HIGHLIGHT */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            <div className="lg:col-span-2 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950 text-cyan-300 text-xs font-bold border border-blue-800">
                <Lock className="w-3.5 h-3.5" />
                SECURITY &amp; DATA PARTNERSHIP
              </div>
              <h3 className="text-3xl font-extrabold text-white">
                Fasoo × OMAZU AX 기술 연계
              </h3>
              <p className="text-sm font-semibold text-cyan-300">
                OMAZU의 업무 진단·설계·PM과 Fasoo의 기업 데이터·보안 기술을 연결합니다.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                AX 교육·컨설팅 협력 MOU를 바탕으로 진단에서 PoC와 기술 적용 검토까지 역할을 나눠 협의합니다. OMAZU는 고객의 업무문제와 실행준비도를 진단하고, 필요한 경우 Fasoo와 함께 데이터·보안 솔루션 적용 가능성과 기술 검증 범위를 구체화합니다.
              </p>
            </div>

            <div className="lg:col-span-1 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
              <div className="text-xs text-slate-400 font-medium">기업 보안 연계 컨설팅</div>
              <div className="text-xl font-bold text-white">
                안전한 Enterprise AX 도입
              </div>
              <button
                onClick={openInquiryModal}
                className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow-md transition-all"
              >
                Fasoo 연계 상담 신청
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="glass-card p-10 lg:p-14 rounded-3xl border border-blue-900/60 relative overflow-hidden">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
            우리 조직의 AX도, 나의 AI 역량도<br />
            <span className="gradient-text">지금 무엇이 가능한지 아는 것</span>에서 시작합니다.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openInquiryModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              기업 AX 진단·상담
            </button>
            <button
              onClick={() => setActiveTab('academy')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-cyan-400" />
              퇴근 후 AI 보기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
