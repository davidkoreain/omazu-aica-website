import React, { useState } from 'react';
import { X, User as UserIcon, BookOpen, ShieldCheck, Download, LogOut, Award, CheckCircle2, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MyPageModalProps {
  isOpen: boolean;
  onClose: () => void;
  openDiagnosticModal: () => void;
}

export const MyPageModal: React.FC<MyPageModalProps> = ({
  isOpen,
  onClose,
  openDiagnosticModal,
}) => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | 'templates'>('profile');

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {user.name.slice(0, 1)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{user.name} 님</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-950 text-cyan-300 border border-blue-800">
                  {user.company || 'OMAZU 회원'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
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
          {/* Navigation Tabs */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 mb-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'profile' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              마이 프로필 &amp; 진단
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'courses' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              수강 &amp; 신청 현황
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'templates' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              자산 &amp; 템플릿 보관함
            </button>
          </div>

          {/* TAB 1: PROFILE & DIAGNOSTIC */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Diagnostic Status Box */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    AX Ready Diagnostic 실행준비도
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    {user.diagnosticScore ? `${user.diagnosticScore}점 / 100점` : '미진단 상태'}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {user.diagnosticScore 
                      ? '실행 체계화 단계: Priority AX 과제 및 Enterprise Trust 설계 권장' 
                      : '온라인 사전진단을 통해 현재 AI 활용역량을 측정해 보세요.'}
                  </p>
                </div>
                <button
                  onClick={() => { onClose(); openDiagnosticModal(); }}
                  className="px-4 py-2.5 bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 font-bold text-xs rounded-xl transition-all"
                >
                  {user.diagnosticScore ? '다시 진단하기' : '진단 시작하기'}
                </button>
              </div>

              {/* User Account Info */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 space-y-3">
                <h4 className="text-sm font-bold text-white mb-2">계정 상세 정보</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">회원 구분:</span>
                    <span className="text-slate-200 font-medium">B2B 파트너 회원</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">가입 일자:</span>
                    <span className="text-slate-200 font-mono">{user.createdAt}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">이메일 알림:</span>
                    <span className="text-cyan-400 font-medium">수신 동의됨</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Fasoo 솔루션 연계:</span>
                    <span className="text-slate-200 font-medium">상담 가능 파트너</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURSES & APPLICATIONS */}
          {activeTab === 'courses' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white mb-2">신청 및 수강 중인 코스</h4>
              {user.enrolledCourses.length > 0 ? (
                user.enrolledCourses.map((c, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-950 border border-indigo-800 text-cyan-400 flex items-center justify-center">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{c}</div>
                        <div className="text-xs text-slate-400">퇴근 후 AI 2DAYS SPLIT · 수강 예정</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-green-950 text-green-400 rounded-md border border-green-800">
                      수강 확정
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-slate-400 bg-slate-950 rounded-xl border border-slate-800">
                  수강 중인 과정이 없습니다. '퇴근 후 AI' 2DAYS Sprint 과정을 확인해 보세요.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TEMPLATES & ASSETS */}
          {activeTab === 'templates' && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white mb-2">OMAZU 회원 제공 재사용 템플릿</h4>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-bold text-white">OMAZU AX-BPR 9요소 업무분해 템플릿</div>
                    <div className="text-xs text-slate-400">Trigger, Input, Task, Decision, Human Approval 정의용</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold rounded-lg border border-slate-700 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  다운로드
                </button>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-sm font-bold text-white">Fasoo 연계 Enterprise Trust 통제 체크리스트</div>
                    <div className="text-xs text-slate-400">데이터 유출, 권한, 비용 통제 가이드라인</div>
                  </div>
                </div>
                <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-bold rounded-lg border border-slate-700 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" />
                  다운로드
                </button>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={() => { logout(); onClose(); }}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-rose-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              로그아웃
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
