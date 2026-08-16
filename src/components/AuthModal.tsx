import React, { useState } from 'react';
import { X, Mail, Lock, User as UserIcon, Building2, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'login',
}) => {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>(initialMode);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form state
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupCompany, setSignupCompany] = useState('');
  const [agreedTerms, setAgreedTerms] = useState(false);

  // Success state feedback
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return;
    login(loginEmail);
    setSuccessMsg('로그인되었습니다!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 600);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupName || !signupEmail || !signupPassword) return;
    signup(signupName, signupEmail, signupCompany);
    setSuccessMsg('회원가입이 완료되었습니다!');
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 600);
  };

  const handleSocialLogin = (provider: string) => {
    login(`${provider.toLowerCase()}@omazu.ai`, `${provider} 사용자`);
    setSuccessMsg(`${provider} 계정으로 로그인되었습니다!`);
    setTimeout(() => {
      setSuccessMsg('');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              {mode === 'login' && 'OMAZU AICA 로그인'}
              {mode === 'signup' && 'OMAZU AICA 회원가입'}
              {mode === 'reset' && '비밀번호 재설정'}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              {mode === 'login' && '기업 AX 진단 리포트 및 수강 내역을 확인하세요.'}
              {mode === 'signup' && 'OMAZU 통합 회원 계정을 생성합니다.'}
              {mode === 'reset' && '가입하신 이메일로 비밀번호 재설정 링크를 발송합니다.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {successMsg ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <p className="text-lg font-bold text-white">{successMsg}</p>
            </div>
          ) : (
            <>
              {/* Mode Switcher Tabs */}
              {mode !== 'reset' && (
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 mb-6">
                  <button
                    onClick={() => setMode('login')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      mode === 'login' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    로그인
                  </button>
                  <button
                    onClick={() => setMode('signup')}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                      mode === 'signup' ? 'bg-indigo-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    회원가입
                  </button>
                </div>
              )}

              {/* LOGIN FORM */}
              {mode === 'login' && (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      이메일 주소
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-medium text-slate-300">
                        비밀번호
                      </label>
                      <button
                        type="button"
                        onClick={() => setMode('reset')}
                        className="text-xs text-cyan-400 hover:underline"
                      >
                        비밀번호 찾기
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    로그인 하기
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Social Logins */}
                  <div className="pt-4 border-t border-slate-800 space-y-2">
                    <div className="text-[11px] text-center text-slate-400 mb-2">
                      간편 소셜 로그인
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Google')}
                        className="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
                      >
                        <span>Google 계정</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('Kakao')}
                        className="py-2.5 px-3 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 font-semibold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-yellow-500/30"
                      >
                        <span>카카오 계정</span>
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* SIGNUP FORM */}
              {mode === 'signup' && (
                <form onSubmit={handleSignupSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      이름 <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <UserIcon className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="홍길동"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      이메일 주소 <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      비밀번호 <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="password"
                        required
                        placeholder="8자 이상 입력"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      소속 기업 / 기관명
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        placeholder="OMAZU (개인 회원인 경우 빈칸)"
                        value={signupCompany}
                        onChange={(e) => setSignupCompany(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400">
                      <input
                        type="checkbox"
                        required
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-0"
                      />
                      <span>서비스 이용약관 및 개인정보 처리방침 동의 (필수)</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-500/25 transition-all text-xs sm:text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    회원가입 완료
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* RESET FORM */}
              {mode === 'reset' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      가입한 이메일 주소
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSuccessMsg('비밀번호 재설정 링크가 전송되었습니다!');
                      setTimeout(() => {
                        setSuccessMsg('');
                        setMode('login');
                      }, 1000);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm"
                  >
                    재설정 이메일 받기
                  </button>
                  <button
                    onClick={() => setMode('login')}
                    className="w-full py-2 text-xs text-slate-400 hover:text-white"
                  >
                    로그인 화면으로 돌아가기
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
