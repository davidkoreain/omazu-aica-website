import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  TrendingUp, 
  Lock,
  GitBranch,
  Database,
  Briefcase
} from 'lucide-react';
import { 
  FAILURE_POINTS, 
  DIAGNOSTIC_DOMAINS, 
  AX_ASSETS, 
  CONSULTING_STEPS 
} from '../data/content';

interface ConsultingViewProps {
  openDiagnosticModal: () => void;
  openInquiryModal: () => void;
}

export const ConsultingView: React.FC<ConsultingViewProps> = ({
  openDiagnosticModal,
  openInquiryModal,
}) => {
  return (
    <div className="space-y-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO */}
      <section className="pt-12 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-cyan-300 text-xs font-semibold mb-6">
          <Building2 className="w-4 h-4 text-cyan-400" />
          <span>OMAZU AX Framework &amp; Diagnostic 기반</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          AI 도입이 아니라, 우리 조직의<br />
          <span className="gradient-text">업무 전환과 투자판단</span>을 설계합니다.
        </h1>

        <p className="text-base sm:text-lg text-cyan-300 font-semibold mb-6">
          진단 → 설계 → Micro-PoC → 성과·Trust 검증 → Go / Conditional Go / No-Go
        </p>

        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8 max-w-3xl mx-auto">
          OMAZU AX Framework는 조직이 이미 가진 지식·데이터·업무흐름·업무시스템·전문성에서 출발합니다. 사람과 업무, 실행기반, Trust 조건을 분리해 진단하고, 최종 판단 기준은 “기술적으로 되는가”가 아니라 “실제로 성과가 나고, 안전하게 운영할 수 있으며, 투자할 가치가 있는가”입니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openInquiryModal}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
          >
            우리 조직 AX 진단·상담
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={openInquiryModal}
            className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Fasoo 연계 상담
          </button>
        </div>
      </section>

      {/* WHY DIAGNOSIS FIRST (FAILURE POINTS) */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-950 text-rose-400 text-xs font-mono font-bold mb-3 border border-rose-800/40">
            <AlertTriangle className="w-4 h-4" />
            WHY DIAGNOSIS FIRST
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            AI 도입이 실패하는 이유는 기술이 아닙니다.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            풀 문제를 정의하지 않았고, 데이터가 준비되지 않았고, 권한과 비용을 통제하지 못했기 때문입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {FAILURE_POINTS.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <div className="text-xs font-mono text-rose-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                실패 지점 0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

          {/* OMAZU Solution Box */}
          <div className="bg-gradient-to-br from-blue-950 to-cyan-950 p-6 rounded-2xl border border-cyan-800/60 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-cyan-300 font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                OMAZU의 대응 방식
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                진단 ➔ 현업 구조화 ➔ Micro-PoC ➔ Trust &amp; 성과 연결
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                진단으로 우선과제를 정하고, 현업이 직접 자기 업무를 구조화하여 작게 만든 뒤 데이터·보안·비용을 확인하고 투자 확산 근거로 연결합니다.
              </p>
            </div>
            <button
              onClick={openDiagnosticModal}
              className="mt-4 w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-lg transition-colors"
            >
              실행준비도 진단 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* 4 AX READINESS DOMAINS */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            1. AX 실행준비도 (진단영역)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            사람·업무·기반·Trust를 따로 보고 함께 판단합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIAGNOSTIC_DOMAINS.map((item, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 bg-blue-950 text-cyan-300 rounded border border-blue-800">
                    진단영역 0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    결과: {item.result}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.domain}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  핵심 질문: "{item.question}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 AX ASSETS */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            2. 기업이 이미 가진 AX 자산 5영역에서 시작합니다
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            "무엇을 AI에 맡길 것인가 ➔ 무엇을 근거로 일하게 할 것인가 ➔ 어떤 시스템과 연결할 것인가 ➔ 사람은 어디에서 판단·승인할 것인가 ➔ 무엇으로 성과를 검증할 것인가"를 연결합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {AX_ASSETS.map((asset, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-400 mb-2">
                  0{idx + 1}. {asset.name.split(' ')[0]}
                </div>
                <div className="text-sm font-bold text-white mb-1">
                  {asset.name}
                </div>
                <div className="text-xs text-slate-300 mb-3">
                  {asset.desc}
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                역할: {asset.role}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6-STEP EXECUTION PROCESS */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            3. 6단계 실행 로드맵 (Co-Build 방식)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            진단 결과가 교육·PoC·구축으로 끊기지 않고 이어집니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONSULTING_STEPS.map((s, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 relative">
              <div className="text-xs font-mono font-bold text-cyan-400 mb-2">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                {s.desc}
              </p>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-cyan-300 flex items-center gap-1.5 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>산출물: {s.output}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS VALUE VALIDATION & FASOO */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-950 text-cyan-300 text-xs font-mono font-bold border border-blue-800">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              BUSINESS VALUE VALIDATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              PoC 성공보다 Business Value를 검증합니다
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              PoC가 작동했다는 이유만으로 도입하지 않습니다. 기존 업무와 동일한 범위·입력자료·품질기준을 두고 As-Is Baseline과 비교해 실제 개선효과(처리시간, 품질, 위험)를 측정합니다.
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
              <div className="font-bold text-white flex justify-between">
                <span>필수 검증지표:</span>
                <span className="text-cyan-400">처리시간 · 품질 · 위험</span>
              </div>
              <div className="font-bold text-white flex justify-between">
                <span>선택·확장 지표:</span>
                <span className="text-cyan-400">비용 · 생산성 · 의사결정 품질</span>
              </div>
              <div className="font-bold text-white flex justify-between">
                <span>최종 판단 판정:</span>
                <span className="text-green-400 font-mono">Go · Conditional Go · No-Go</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950 p-8 rounded-2xl border border-slate-800 text-center space-y-6">
            <h4 className="text-xl font-bold text-white">
              우리 조직의 AX 전환 준비도를 확인하세요
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              OMAZU 전문 컨설턴트가 4대 실행준비도와 업무 자산을 바탕으로 1:1 진단과 맞춤형 로드맵을 제안해 드립니다.
            </p>
            <button
              onClick={openInquiryModal}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all"
            >
              기업 AX 진단 및 컨설팅 문의하기
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
