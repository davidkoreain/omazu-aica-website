import React from 'react';
import { 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Lock,
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { 
  BRAND,
  CONSULTING_SCOPES, 
  AX_ASSETS, 
  FRAMEWORK_3LAYERS, 
  CORE_CONCEPTS, 
  DIAGNOSTIC_DOMAINS 
} from '../data/content';

interface ConsultingViewProps {
  openInquiryModal: () => void;
}

export const ConsultingView: React.FC<ConsultingViewProps> = ({ openInquiryModal }) => {
  const failurePoints = [
    { title: "한 번의 IT 이벤트로 다룬다", desc: "프로세스 변화가 아니라 일회성 프로젝트로 접근하면 기존 결재·의사결정 흐름과 부딪칩니다." },
    { title: "목적과 지표가 없다", desc: "풀어야 할 업무 문제와 목표 지표를 정하지 않으면 시연에 그치고 효과가 측정되지 않습니다." },
    { title: "데이터가 준비되지 않았다", desc: "중복되고 정제되지 않은 문서가 오답과 환각을 만듭니다." },
    { title: "현업 맥락이 빠졌다", desc: "현장이 실제로 어떻게 일하는지 제외한 채 추진하면 방치됩니다." },
    { title: "보안과 비용을 통제하지 못한다", desc: "지식자산 유출 위험 및 운영비가 통제되지 않아 투자 성과를 증명하지 못합니다." }
  ];

  return (
    <div className="space-y-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* 01. HERO */}
      <section className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/60 text-cyan-300 text-xs font-semibold">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span>OMAZU AX Consulting</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            AI 도입이 아니라, 우리 조직의<br />
            <span className="gradient-text">업무 전환과 투자 판단</span>을 설계합니다.
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            OMAZU는 특정 플랫폼을 전제로 역산하지 않습니다. Enterprise AI·Data·Trust 기술, 외부 LLM·Agent Tool, 고객의 기존 시스템과 필요 시 Custom Development를 과제에 맞게 기술중립적으로 조합합니다.
          </p>

          <div className="pt-2">
            <button
              onClick={openInquiryModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              Consulting 상담 신청
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/10">
            <img 
              src="/images/b2b_ax_consulting.jpg" 
              alt="OMAZU AX Consulting Session" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02. WHY DIAGNOSIS FIRST */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-950 text-rose-400 text-xs font-mono font-bold border border-rose-800/40">
            <AlertTriangle className="w-4 h-4" />
            WHY DIAGNOSIS FIRST
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            AI 도입이 실패하는 이유는 기술이 아닙니다.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            문제·데이터·현업맥락·Trust·성과 기준이 선행되어야 합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          {failurePoints.map((fp, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800/80 space-y-2">
              <div className="text-xs font-mono text-rose-400 font-bold">실패지점 0{idx + 1}</div>
              <h3 className="font-bold text-white text-sm">{fp.title}</h3>
              <p className="text-slate-400 text-[11px] leading-relaxed">{fp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03. ENGAGEMENT SCOPE (3단계 확장 범위) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            ENGAGEMENT SCOPE (3단계 프로젝트 범위)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            고객의 준비도와 과제 범위에 따라 진단·교육 단계에서 시작해 FDE Co-Build까지 단계적으로 확장할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONSULTING_SCOPES.map((scope) => (
            <div key={scope.step} className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 px-3 py-1 bg-cyan-950 rounded-full border border-cyan-800">
                  SCOPE {scope.step}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  {scope.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {scope.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. OMAZU AX FRAMEWORK */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold px-3 py-1 bg-blue-950 text-cyan-300 rounded border border-blue-800">
            OMAZU AX FRAMEWORK
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            AX 자산 5영역 &amp; 3-Layer 실행구조
          </h2>
        </div>

        {/* 5 Asset Names */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          {AX_ASSETS.map((asset, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <div className="font-mono text-cyan-400 font-bold mb-1">0{idx + 1}. {asset.name}</div>
              <div className="text-white font-bold text-sm mb-1">{asset.label}</div>
              <div className="text-[11px] text-slate-400">{asset.desc}</div>
            </div>
          ))}
        </div>

        {/* 4 Core Concepts */}
        <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {CORE_CONCEPTS.map((c, idx) => (
            <div key={idx} className="bg-slate-950 p-5 rounded-2xl border border-slate-800">
              <div className="font-bold text-cyan-300 text-sm mb-1">{c.name}</div>
              <div className="text-slate-300 text-xs leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. OMAZU AX DIAGNOSTIC */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            OMAZU AX DIAGNOSTIC (4대 영역 &amp; 정밀도)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            AI 활용역량 진단은 7개 하위역량, 총 28문항 및 Practitioner / Executive 2종 결과지로 구성됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {DIAGNOSTIC_DOMAINS.map((d, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 space-y-2">
              <div className="font-bold text-cyan-400 text-sm">0{idx + 1}. {d.domain}</div>
              <p className="text-slate-300">{d.desc}</p>
              <div className="pt-2 text-[11px] text-slate-400 font-mono">결과 연결: {d.result}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 07. OMAZU FDE CO-BUILD */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold px-3 py-1 bg-cyan-950 text-cyan-400 rounded border border-cyan-800">
            OMAZU FDE CO-BUILD
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            현장밀착형 Forward Deployed Engineer 공동구축
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
            검증된 과제를 실제 데이터·문서·업무시스템과 연결해 현업과 함께 Agent·Workflow를 구현하고 구축 PM·운영·확산까지 연결하는 OMAZU의 고도 실행 Delivery Model입니다.
          </p>
        </div>
      </section>

      {/* 08. BUSINESS VALUE VALIDATION */}
      <section className="glass-card p-8 lg:p-12 rounded-3xl border border-blue-800/60 space-y-6 text-center">
        <h3 className="text-2xl font-extrabold text-white">
          Business Value Validation &amp; 최종 Gate
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
          As-Is 기준선 대비 시간, 품질, 위험, 비용 등의 개선효과와 선결조건을 종합 점검하여 최종 Gate 판정(Go / Conditional Go / No-Go)을 결정합니다.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-xs font-mono font-bold pt-2">
          <span className="px-4 py-2 bg-emerald-950 text-emerald-400 rounded-xl border border-emerald-800">Go (전사 확산)</span>
          <span className="px-4 py-2 bg-amber-950 text-amber-400 rounded-xl border border-amber-800">Conditional Go (조건부 보완)</span>
          <span className="px-4 py-2 bg-rose-950 text-rose-400 rounded-xl border border-rose-800">No-Go (보류 및 수정을 통한 보완)</span>
        </div>

        <div className="pt-4">
          <button
            onClick={openInquiryModal}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg"
          >
            Consulting 프로젝트 상담 신청하기
          </button>
        </div>
      </section>

    </div>
  );
};
