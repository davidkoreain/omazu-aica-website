import React from 'react';
import { BRAND } from '../data/content';

export const TermsView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-xs text-slate-300">
      <h1 className="text-2xl font-bold text-white">서비스 이용약관</h1>
      <p className="text-slate-400">최종 개정일: 2026년 8월 18일 | {BRAND.name}</p>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 leading-relaxed">
        <h2 className="text-sm font-bold text-white">제 1 조 (목적)</h2>
        <p>본 약관은 OMAZU AICA({BRAND.domain})가 제공하는 기업 AX 컨설팅, 아카데미 및 관련 제반 서비스 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

        <h2 className="text-sm font-bold text-white pt-2">제 2 조 (서비스의 제공)</h2>
        <p>회사는 이용자에게 기업 AX 실행준비도 진단, Decision Sprint 정보 안내, Academy 공개과정 모집 및 관련 상담 서비스를 제공합니다.</p>
      </div>
    </div>
  );
};
