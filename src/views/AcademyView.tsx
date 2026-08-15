import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Workflow, 
  Video, 
  Briefcase, 
  Palette
} from 'lucide-react';
import { 
  ACADEMY_SPRINT, 
  DIFFERENCE_POINTS 
} from '../data/content';

interface AcademyViewProps {
  openDiagnosticModal: () => void;
  openInquiryModal: () => void;
}

export const AcademyView: React.FC<AcademyViewProps> = ({
  openDiagnosticModal,
  openInquiryModal,
}) => {
  const [selectedCourseTab, setSelectedCourseTab] = useState<'ai' | 'creator'>('ai');

  return (
    <div className="space-y-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO WITH VISUAL IMAGE */}
      <section className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-cyan-300 text-xs font-semibold">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>2DAYS SPLIT · 퇴근 후 AI (AI COURSE / CREATOR COURSE)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            퇴근 후 AI, <span className="gradient-text">내 수준을 알고</span><br />
            내 결과물을 만듭니다.
          </h1>

          <p className="text-base sm:text-lg text-cyan-300 font-semibold">
            사전진단 → DAY 1 첫 결과 → 실제 적용 → DAY 2 피드백과 완성 → 재사용 Workflow·Template
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            도구 사용법을 순서대로 배우는 과정이 아닙니다. 먼저 내가 해결할 업무나 만들고 싶은 아이디어를 정하고, AI가 일할 수 있도록 과제를 구조화합니다. DAY 1에서 첫 결과를 만든 뒤 실제로 써 보고, DAY 2에서 품질과 활용성을 검증·보완해 다시 사용할 수 있는 작업 구조로 완성합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={openDiagnosticModal}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              AI 활용역량 사전진단 하기
            </button>
            <button
              onClick={openInquiryModal}
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              개강 알림 소식 받기
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
            <img 
              src="/images/academy_ai_bootcamp.jpg" 
              alt="Academy After Work AI Workshop" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2DAYS SPRINT ROADMAP */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            2DAYS SPRINT 실행 과정
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            진단에서 결과물 완성까지 단계별로 남는 결과가 명확합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMY_SPRINT.map((item, idx) => (
            <div key={idx} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-indigo-950 text-cyan-300 rounded border border-indigo-800">
                    {item.stage}
                  </span>
                  <span className="text-xs text-slate-300 font-mono">
                    STEP 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800 text-xs text-cyan-400 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>남는 결과: {item.output}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE SELECTION & DETAILS */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            어떤 과정을 고를까요?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            나의 목적에 맞는 맞춤형 2DAYS 코스를 선택하세요.
          </p>
        </div>

        {/* Course Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex gap-2 max-w-md w-full">
            <button
              onClick={() => setSelectedCourseTab('ai')}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                selectedCourseTab === 'ai'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              AI COURSE (직장인/실무)
            </button>
            <button
              onClick={() => setSelectedCourseTab('creator')}
              className={`flex-1 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                selectedCourseTab === 'creator'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="w-4 h-4" />
              CREATOR COURSE (콘텐츠)
            </button>
          </div>
        </div>

        {/* Selected Course Card */}
        {selectedCourseTab === 'ai' ? (
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-blue-800/60 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 bg-blue-950 text-cyan-300 rounded-full border border-blue-800">
                AI COURSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                내 업무를 AI Workflow로
              </h3>
              <p className="text-sm font-semibold text-cyan-300">
                반복 업무를 줄이고 싶은 직장인·실무자·1인 기업가를 위한 코스
              </p>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <strong className="text-white block mb-1">대상 과제:</strong>
                  <span>문서 작성, 분석, 회의, 정보정리, 반복업무 등 실제 직장 실무</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">진행 과정:</strong>
                  <span>내 업무를 Task 단위로 분해 ➔ AI 담당 부분 구분 ➔ Prompt &amp; Context 및 Tool 적용 ➔ 1차 결과 생성 ➔ 현장 적용 후 검증·개선 ➔ 완결 Workflow 완성</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={openDiagnosticModal}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  AI COURSE 사전진단 신청
                </button>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Workflow className="w-5 h-5 text-cyan-400" />
                수강 후 최종 산출물
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">1. 실제 업무 결과물 1종</strong>
                    <span className="text-slate-300">보고서, 기획서, 데이터 분석 등 내 실무 결과물</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">2. 나만의 AI Workflow</strong>
                    <span className="text-slate-300">AI와 사람의 역할/검증 단계가 정의된 작업 구조</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">3. 재사용 Template</strong>
                    <span className="text-slate-300">내일 아침 바로 다시 쓸 수 있는 프롬프트 &amp; 컨텍스트 세트</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-indigo-800/60 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 bg-indigo-950 text-cyan-300 rounded-full border border-indigo-800">
                CREATOR COURSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                아이디어를 완성 콘텐츠로
              </h3>
              <p className="text-sm font-semibold text-cyan-300">
                콘텐츠를 계속 만들어야 하는 크리에이터·마케터·강사를 위한 코스
              </p>
              
              <div className="space-y-3 text-xs text-slate-300">
                <div>
                  <strong className="text-white block mb-1">대상 과제:</strong>
                  <span>아이디어를 기획·텍스트·이미지·영상의 지속 가능한 제작 파이프라인으로 연결</span>
                </div>
                <div>
                  <strong className="text-white block mb-1">진행 과정:</strong>
                  <span>한 번 생성으로 끝내지 않고 멀티모달 파이프라인을 구축 ➔ 각 제작 단계 결과물 연결 ➔ 실제 사용 관점 피드백 및 라이선스 검증 ➔ 반복 제작 Creator Workflow 완성</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={openDiagnosticModal}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-colors"
                >
                  CREATOR COURSE 사전진단 신청
                </button>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-cyan-400" />
                수강 후 최종 산출물
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">1. 완성 콘텐츠 패키지</strong>
                    <span className="text-slate-300">텍스트/이미지/영상 조합 완성 콘텐츠</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">2. Creator Workflow</strong>
                    <span className="text-slate-300">지속 가능한 기획 및 멀티모달 제작 파이프라인</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">3. Creator Template</strong>
                    <span className="text-slate-300">라이선스 가이드 및 재사용 제작 템플릿</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>

      {/* WHY '퇴근 후 AI' IS DIFFERENT */}
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-8 lg:p-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            퇴근 후 AI가 다른 이유
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            일반적인 일회성 AI 강의와 차별화된 OMAZU만의 결실 중심 교육체계
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-xs uppercase font-mono text-slate-400">
                <th className="py-4 px-4 font-semibold">구분</th>
                <th className="py-4 px-4 font-semibold text-rose-400">일반적인 AI 강의</th>
                <th className="py-4 px-4 font-semibold text-cyan-400">퇴근 후 AI 2DAYS SPLIT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-xs">
              {DIFFERENCE_POINTS.map((pt, idx) => (
                <tr key={idx} className="hover:bg-slate-950/50">
                  <td className="py-4 px-4 font-bold text-slate-300">포인트 0{idx + 1}</td>
                  <td className="py-4 px-4 text-slate-400">{pt.general}</td>
                  <td className="py-4 px-4 font-bold text-white bg-blue-950/20">{pt.omazu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="glass-card p-10 rounded-3xl border border-indigo-900/60">
          <h3 className="text-2xl font-bold text-white mb-3">
            지금 나의 AI 활용 역량을 진단하고 시작하세요!
          </h3>
          <p className="text-xs text-slate-300 mb-6">
            사전진단 결과 리포트와 권장 학습 실습 방향을 무료로 제공해 드립니다.
          </p>
          <button
            onClick={openDiagnosticModal}
            className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
          >
            AI 역량 사전진단 시작하기
          </button>
        </div>
      </section>
    </div>
  );
};
