import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [receiptNo, setReceiptNo] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'consulting',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomReceipt = 'AICA-' + Math.floor(100000 + Math.random() * 900000);
    setReceiptNo(randomReceipt);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', company: '', email: '', phone: '', category: 'consulting', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">OMAZU AICA 프로젝트 &amp; 수강 상담</h3>
              <p className="text-xs text-slate-400">대표 메일: {BRAND.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">상담 구분</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="consulting">OMAZU AX Consulting (진단/Decision Sprint/Co-Build)</option>
                  <option value="academy">OMAZU Academy (퇴근 후 AI 2DAYS 과정)</option>
                  <option value="fasoo">Fasoo 파트너십 연계 기술상담</option>
                  <option value="other">기타 사업 제휴 및 일반 문의</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">성함 *</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">소속 / 회사명 *</label>
                  <input
                    type="text"
                    required
                    placeholder="오마주코리아"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">이메일 주소 *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">연락처 *</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">문의 내용 &amp; 해결하고자 하는 업무 문제 *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="조직의 AX 실행준비도 진단 또는 구체적인 업무 자동화 요구사항을 자유롭게 남겨주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="pt-2 text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                수집된 이메일 및 연락처는 상담 응대 및 안내 목적으로만 사용되며 법률에 따라 안전하게 처리됩니다.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                상담 접수하기
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto text-white shadow-xl shadow-cyan-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">상담 접수가 완료되었습니다!</h4>
              <p className="text-xs text-slate-300">
                접수번호: <strong className="font-mono text-cyan-400 text-sm">{receiptNo}</strong>
              </p>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                담당 AX 컨설턴트가 제출하신 정보를 바탕으로 검토 후 <span className="text-slate-200 font-semibold">{formData.email}</span> (또는 {formData.phone})로 신속히 안내 드리겠습니다.
              </p>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
              >
                확인 및 닫기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
