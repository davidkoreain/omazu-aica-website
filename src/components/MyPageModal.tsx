import React, { useState } from 'react';
import { X, User as UserIcon, ShieldCheck, BookOpen, Download, LogOut, CheckCircle2, FileText, ArrowRight, Award } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | 'downloads'>('profile');

  if (!isOpen || !user) return null;

  const mockCourses = [
    { id: '1', title: '전문직 AI 역량 강화 2DAYS Sprint', date: '2026.08.20 ~ 2026.08.21', status: '수강 예정', progress: 0 },
    { id: '2', title: '기업 AX Decision Sprint & Micro-PoC', date: '2026.07.15 ~ 2026.07.16', status: '이수 완료', progress: 100 },
  ];

  const mockDownloads = [
    { id: 'd1', title: 'OMAZU AX-BPR 9요소 업무 분해 워크시트', type: 'PDF / 1.2MB', date: '2026.08.15' },
    { id: 'd2', title: 'Enterprise Trust 보안 & 환각 통제 가이드 v1.0', type: 'PDF / 3.4MB', date: '2026.08.10' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-slate-900 rounded-[15px] flex items-center justify-center text-cyan-400 font-bold text-lg">
                {user.name.slice(0, 1)}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{user.name}</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800">
                  {user.role}
                </span>
              </div>
              <p className="text-xs text-slate-400">{user.email} · {user.company || 'OMAZU AICA'}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'profile'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <UserIcon className="w-4 h-4" />
            내 프로필 &amp; 진단
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            수강 신청 내역
          </button>
          <button
            onClick={() => setActiveTab('downloads')}
            className={`px-4 py-3 text-xs font-bold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'downloads'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Download className="w-4 h-4" />
            자료 보관함
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Diagnotics Status Box */}
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white">AX Ready Diagnotics 실행준비도</span>
                  </div>
                  <div className="text-xl font-extrabold text-cyan-400">
                    {user.diagnosticScore ? `${user.diagnosticScore}점 / 100점` : '미진단 상태'}
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {user.diagnosticScore 
                      ? 'Decision Sprint & Priority 과제 선정 고려 단계'
                      : '상담 전 2분 AX Quick Check로 실행준비도를 점검해보세요.'}
                  </p>
                </div>
                <button
                  onClick={() => { onClose(); openDiagnosticModal(); }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-xl shadow shrink-0"
                >
                  {user.diagnosticScore ? '다시 진단하기' : '진단 시작하기'}
                </button>
              </div>

              {/* Profile Details */}
              <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <h4 className="font-bold text-white mb-2">기본 정보</h4>
                <div className="grid grid-cols-2 gap-3 text-slate-300">
                  <div><span className="text-slate-400">가입 계정:</span> {user.email}</div>
                  <div><span className="text-slate-400">소속 직군:</span> {user.role}</div>
                  <div><span className="text-slate-400">회사/기관:</span> {user.company || '미입력'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-3">
              {mockCourses.map((c) => (
                <div key={c.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white mb-1">{c.title}</div>
                    <div className="text-[11px] text-slate-400">{c.date}</div>
                  </div>
                  <span className={`px-2.5 py-1 rounded font-bold text-[11px] ${
                    c.status === '이수 완료' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-blue-950 text-cyan-300 border border-blue-800'
                  }`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'downloads' && (
            <div className="space-y-3">
              {mockDownloads.map((d) => (
                <div key={d.id} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white mb-1">{d.title}</div>
                    <div className="text-[11px] text-slate-400">{d.type} · 등록일: {d.date}</div>
                  </div>
                  <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-lg text-xs flex items-center gap-1">
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    다운로드
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 flex justify-between items-center">
          <button
            onClick={() => { logout(); onClose(); }}
            className="text-xs text-rose-400 hover:text-rose-300 font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-rose-950/40"
          >
            <LogOut className="w-4 h-4" />
            로그아웃
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
