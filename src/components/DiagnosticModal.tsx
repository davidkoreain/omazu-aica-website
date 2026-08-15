import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, RotateCcw, Building2, User } from 'lucide-react';
import { DIAGNOSTIC_DOMAINS } from '../data/content';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  openInquiryModal: () => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({
  isOpen,
  onClose,
  openInquiryModal,
}) => {
  const [type, setType] = useState<'b2b' | 'b2c'>('b2b');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questionsB2B = [
    {
      domain: "AI 활용역량",
      question: "우리 임직원들의 AI 활용 수준 및 프롬프트/업무분해 역량은 준비되어 있습니까?",
      options: ["도구 사용 경험 없음", "기본적인 파이썬/ChatGPT 사용 수준", "실무 프로세스에 적용 중", "자체 AI Workflow 및 템플릿 보유"]
    },
    {
      domain: "업무 프로세스",
      question: "AI를 적용하여 반복/병목을 해결할 핵심 업무과제(Priority Initiative)가 산출되었습니까?",
      options: ["과제 정의 안 됨", "아이디어 단계", "우선순위 3개 과제 도출 완료", "이미 PoC 진행 경험 있음"]
    },
    {
      domain: "AX Execution Foundation",
      question: "AI가 참조하고 일할 내부 기업 데이터, 문서, 시스템 API 연동 기반이 구축되어 있습니까?",
      options: ["문서가 파편화되어 있음", "기본 매뉴얼 존재하나 정제 안 됨", "주요 문서 디지털화 완료", "ERP/CRM 시스템 API 오픈 완료"]
    },
    {
      domain: "Enterprise Trust",
      question: "AI 도입 시 데이터 보안, 권한 통제, 비용 및 환각(Hallucination) 검증 체계가 마련되었습니까?",
      options: ["보안 가이드라인 없음", "기본 유출 금지 지침만 존재", "Fasoo 등 보안 솔루션 고려 중", "권한 기반 Trust 통제 체계 설계 완료"]
    }
  ];

  const questionsB2C = [
    {
      domain: "AI 이해 & 판단",
      question: "평소 일하거나 창작할 때 AI 도구를 얼마나 활용하고 계신가요?",
      options: ["거의 안 써봄", "단순 단순 질문/요약에만 사용", "업무 시 가끔 활용함", "매일 특정 작업에 깊게 활용"]
    },
    {
      domain: "업무 분해 능력",
      question: "내 업무나 아이디어를 AI가 일할 수 있는 단계(Task)별로 구조화해 본 적이 있나요?",
      options: ["경험 없음", "생각해 본 적만 있음", "간단히 순서를 나눠봄", "구체적인 프롬프트 체인으로 작성 가능"]
    },
    {
      domain: "Tool & Workflow",
      question: "AI 생성 결과물을 내 실무/콘텐츠에 적용할 때 재사용 가능한 템플릿으로 만들어 보셨나요?",
      options: ["템플릿 없음", "메모장에 기록해둠", "자주 쓰는 프롬프트 보유", "자동화/재사용 파이프라인 구축"]
    },
    {
      domain: "결과 검증 & 안전",
      question: "AI가 낸 오답이나 환각을 검증하고 보안/라이선스를 점검하는 자신만의 기준이 있나요?",
      options: ["검증 없이 그대로 씀", "눈으로 대충 확인함", "팩트체크 및 출처 확인", "검증 및 안전 가이드라인 준수"]
    }
  ];

  const currentQuestions = type === 'b2b' ? questionsB2B : questionsB2C;

  const handleSelectOption = (index: number) => {
    const nextAnswers = [...answers, index];
    setAnswers(nextAnswers);
    if (step < currentQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  const calculateScore = () => {
    if (answers.length === 0) return 0;
    const total = answers.reduce((a, b) => a + b, 0);
    return Math.round((total / (currentQuestions.length * 3)) * 100);
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                OMAZU AX Ready Diagnostic
                <span className="text-xs bg-cyan-900/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-700/50 font-mono">
                  실행준비도 진단
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                4대 관점에서 현재 AI 준비 수준과 우선 개발 영역을 확인합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isCompleted ? (
            <div>
              {/* Type Switcher */}
              <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 mb-6">
                <button
                  onClick={() => { setType('b2b'); handleReset(); }}
                  className={`flex-1 py-2 px-4 rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    type === 'b2b' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  기업 AX 진단 (B2B)
                </button>
                <button
                  onClick={() => { setType('b2c'); handleReset(); }}
                  className={`flex-1 py-2 px-4 rounded-md text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    type === 'b2c' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <User className="w-4 h-4" />
                  개인 AI 역량 진단 (B2C)
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>질문 {step + 1} / {currentQuestions.length}</span>
                  <span className="text-cyan-400 font-semibold">{currentQuestions[step].domain}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${((step + 1) / currentQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-white mb-2">
                  {currentQuestions[step].question}
                </h4>
                <p className="text-xs text-slate-400">
                  가장 가까운 상태를 선택해 주세요.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl bg-slate-800/60 hover:bg-blue-900/40 border border-slate-700 hover:border-cyan-500/50 transition-all text-sm font-medium text-slate-200 hover:text-white flex items-center justify-between group"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result View */
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-xl shadow-cyan-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">
                진단이 완료 되었습니다!
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                {type === 'b2b' ? '기업 AX 실행준비도 종합 분석' : '개인 AI 활용 역량 종합 분석'}
              </p>

              {/* Score Display */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-md mx-auto mb-6">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">
                  {score}점 <span className="text-sm font-normal text-slate-400">/ 100점</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {score < 40 && "초기 진단 단계 (Micro-PoC 및 기초 교육 권장)"}
                  {score >= 40 && score < 75 && "실행 체계화 단계 (Priority 과제 및 Trust 설계 필요)"}
                  {score >= 75 && "고도화 검증 단계 (Enterprise Trust & Fasoo 솔루션 연계)"}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {type === 'b2b' 
                    ? "OMAZU의 AX Framework에 따라 업무 프로세스 재설계(AX-BPR)와 Micro-PoC를 통해 투자 가치를 검증하는 것을 추천합니다."
                    : "사전진단 기반의 '퇴근 후 AI' 2DAYS Sprint 과정을 통해 내 업무를 완결형 Workflow와 재사용 템플릿으로 구조화할 수 있습니다."}
                </p>
              </div>

              {/* Next Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  다시 진단하기
                </button>
                <button
                  onClick={() => { onClose(); openInquiryModal(); }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  상세 진단 결과 및 맞춤 상담 신청
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
