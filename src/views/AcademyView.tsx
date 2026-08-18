import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Workflow, 
  Video, 
  Briefcase, 
  Palette,
  MapPin
} from 'lucide-react';
import { 
  ACADEMY_SPRINT_V2, 
  ACADEMY_COURSES,
  BRAND,
  VENUE_INFO
} from '../data/content';

interface AcademyViewProps {
  openInquiryModal: () => void;
}

export const AcademyView: React.FC<AcademyViewProps> = ({ openInquiryModal }) => {
  const [selectedTab, setSelectedTab] = useState<'ai' | 'creator'>('ai');

  const diffPoints = [
    { general: "도구 기능과 사용법 중심", omazu: "내 실제 업무·아이디어에서 시작" },
    { general: "한 번 따라 해보고 종료", omazu: "DAY 1 결과를 실제로 써 본 뒤 DAY 2에서 개선" },
    { general: "Prompt 예제 중심", omazu: "업무 구조 · Context · Workflow · 검증까지 연결" },
    { general: "수강 후 무엇이 남는지 불명확", omazu: "완성 결과물 + 재사용 Workflow·Template가 남음" },
    { general: "모두에게 같은 내용", omazu: "사전진단으로 강점과 개발 우선순위를 확인" }
  ];

  return (
    <div className="space-y-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 01. HERO */}
      <section className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-cyan-300 text-xs font-semibold">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>OMAZU ACADEMY · 퇴근 후 AI</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            퇴근 후 AI, <span className="gradient-text">내 수준을 알고</span><br />
            내 결과물을 만듭니다.
          </h1>

          <p className="text-base sm:text-lg text-cyan-300 font-semibold">
            사전진단 → DAY 1 첫 결과 → 실제 적용 → DAY 2 피드백과 완성 → 재사용 Workflow·Template
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            도구 사용법을 순서대로 배우는 과정이 아닙니다. 사전진단으로 내 강점과 개발 우선순위를 확인하고, 내 실제 업무와 아이디어를 손에 잡히는 결과물과 다시 쓸 수 있는 작업 구조로 완성합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={openInquiryModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              수강 및 개강 알림 신청
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
            <img 
              src="/images/academy_ai_bootcamp.jpg" 
              alt="OMAZU Academy After Work AI Workshop" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 02. 사전진단 */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-cyan-400">02. AI 활용역량 사전진단</span>
          <h2 className="text-xl font-bold text-white">시작 전에 — 내 AI 활용역량부터 확인합니다</h2>
          <p className="text-xs text-slate-300">
            사전진단(28문항)으로 현재 활용 수준, 강점, 우선 개발역량을 확인하고 개인 결과 리포트를 제공합니다.
          </p>
        </div>
        <button
          onClick={openInquiryModal}
          className="px-6 py-3 bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 font-bold text-xs rounded-xl shadow shrink-0"
        >
          사전진단 신청하기
        </button>
      </section>

      {/* 03. 2DAYS SPRINT (DIAGNOSE ➔ BUILD ➔ APPLY & IMPROVE ➔ REUSE) */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            2DAYS SPRINT 실행 체계
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            DIAGNOSE ➔ BUILD ➔ APPLY &amp; IMPROVE ➔ REUSE 4단계 흐름
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_SPRINT_V2.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">{item.stage}</span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04. COURSES (AI COURSE / CREATOR COURSE) */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            AI COURSE &amp; CREATOR COURSE
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            나의 목적에 맞는 2DAYS 코스를 선택하세요. (장소: {VENUE_INFO.seoul.title})
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACADEMY_COURSES.map((c, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-950 text-cyan-300 rounded-full border border-indigo-800">
                    {c.name}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">SPARK 여의도</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{c.sub}</h3>
                
                <div className="space-y-2 text-xs text-slate-300">
                  <div><strong className="text-white">추천 대상:</strong> {c.target}</div>
                  <div><strong className="text-white">주요 내용:</strong> {c.content}</div>
                  <div><strong className="text-white">수강 후 남는 것:</strong> {c.output}</div>
                </div>
              </div>

              <button
                onClick={openInquiryModal}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                {c.name} 신청 및 개강 알림
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 05. 과정 차별점 */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            퇴근 후 AI가 다른 이유
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 font-mono text-slate-400">
                <th className="py-3 px-4">구분</th>
                <th className="py-3 px-4 text-rose-400">일반적인 AI 강의</th>
                <th className="py-3 px-4 text-cyan-400">퇴근 후 AI 2DAYS SPLIT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {diffPoints.map((pt, idx) => (
                <tr key={idx}>
                  <td className="py-3.5 px-4 font-bold text-slate-300">포인트 0{idx + 1}</td>
                  <td className="py-3.5 px-4 text-slate-400">{pt.general}</td>
                  <td className="py-3.5 px-4 font-bold text-white bg-blue-950/20">{pt.omazu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 06. FINAL CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="glass-card p-10 rounded-3xl border border-indigo-900/60 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            지금 나의 AI 활용 역량을 진단하고 시작하세요!
          </h3>
          <button
            onClick={openInquiryModal}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-xs rounded-xl shadow-lg"
          >
            수강 신청 및 상담 접수하기
          </button>
        </div>
      </section>

    </div>
  );
};
