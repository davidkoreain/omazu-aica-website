import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, RotateCcw, AlertCircle } from 'lucide-react';

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
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const questions = [
    {
      domain: "AI 활용역량",
      question: "평소 업무에서 AI 도구를 얼마나 활용하고 계신가요?",
      options: [
        "업무에서 AI를 거의 사용하지 않음",
        "검색·요약·초안 작성에 개별적으로 사용",
        "실제 업무의 여러 단계에 반복 사용",
        "재사용 Workflow·Template 또는 자동화 구조를 보유"
      ]
    },
    {
      domain: "업무 프로세스",
      question: "개선하려는 업무가 AI가 실행 가능한 단계(Task)로 분해되어 있습니까?",
      options: [
        "업무 분해 경험 없음",
        "아이디어 수준으로 순서만 생각해 봄",
        "Trigger -> Task -> Approval 단계로 일부 구조화해 봄",
        "AX-BPR 9요소 기반으로 완결형 To-Be Workflow 설계 보유"
      ]
    },
    {
      domain: "AX Execution Foundation",
      question: "AI가 일하는 데 필요한 기초 지식 및 내부 문서/데이터 준비 상태는 어떠한가요?",
      options: [
        "문서가 파편화되어 있고 정제되어 있지 않음",
        "기존 매뉴얼이 존재하나 텍스트 정제가 필요함",
        "핵심 업무 문서 디지털화 및 지식베이스 분류 완료",
        "ERP/CRM 등 내부 시스템 연계 API 준비 완료"
      ]
    },
    {
      domain: "Enterprise Trust",
      question: "AI 활용 시 데이터 보안, 권한 통제 및 오답 검증 가이드라인이 존재합니까?",
      options: [
        "별도 보안/검증 기준 없음",
        "기본 정보유출 주의 정도의 유의사항만 존재",
        "Fasoo 등 보안 솔루션 적용 및 검증 절차 고려 중",
        "권한 통제, 환각 검증, Human-in-the-Loop 승인 체계 설계 보유"
      ]
    }
  ];

  const handleSelectOption = (index: number) => {
    const nextAnswers = [...answers, index];
    setAnswers(nextAnswers);
    if (step < questions.length - 1) {
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
    return Math.round((total / (questions.length * 3)) * 100);
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                2분 AX Quick Check
                <span className="text-[10px] bg-cyan-900/60 text-cyan-300 px-2 py-0.5 rounded border border-cyan-700/50 font-mono">
                  간이 자기점검
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                상담 전 4대 관점에서 현재 AI 활용역량과 준비 상태를 빠르게 점검합니다.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Mandatory Notice */}
          <div className="mb-6 bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-start gap-2 text-[11px] text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              본 Quick Check는 상담 전 간이 자기점검입니다. 정식 AI 활용역량 및 조직 AX 실행준비도는 별도 정식 진단과 조직 단위 분석을 통해 확인합니다.
            </span>
          </div>

          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>질문 {step + 1} / {questions.length}</span>
                  <span className="text-cyan-400 font-semibold">{questions[step].domain}</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full transition-all duration-300"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <h4 className="text-base font-bold text-white mb-2">
                  {questions[step].question}
                </h4>
                <p className="text-xs text-slate-400">
                  현재 상황과 가장 유사한 상태를 선택해 주세요.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[step].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl bg-slate-800/60 hover:bg-blue-900/40 border border-slate-700 hover:border-cyan-500/50 transition-all text-xs sm:text-sm font-medium text-slate-200 hover:text-white flex items-center justify-between group"
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
                2분 Quick Check 점검 완료!
              </h4>
              <p className="text-xs text-slate-400 mb-6">
                간이 점검 점수 및 권장 로드맵
              </p>

              {/* Score Display */}
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 max-w-md mx-auto mb-6">
                <div className="text-3xl font-extrabold text-cyan-400 mb-1">
                  {score}점 <span className="text-sm font-normal text-slate-400">/ 100점</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {score < 40 && "기초 역량 강화 권장"}
                  {score >= 40 && score < 75 && "Decision Sprint & Priority 과제 선정 단계"}
                  {score >= 75 && "Co-Build 고려 단계"}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  OMAZU 정식 진단(28문항 개인진단 및 조직진단 리포트)을 통해 실제 업무 문제와 Agentic Workflow, Enterprise Trust 보완요건을 구체적으로 도출해 보실 수 있습니다.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  다시 체크하기
                </button>
                <button
                  onClick={() => { onClose(); openInquiryModal(); }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  정식 조직 진단 &amp; 프로젝트 상담 신청
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
