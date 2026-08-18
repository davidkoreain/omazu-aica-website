import React from 'react';
import { BRAND } from '../data/content';

export const PrivacyView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6 text-xs text-slate-300">
      <h1 className="text-2xl font-bold text-white">개인정보처리방침</h1>
      <p className="text-slate-400">최종 개정일: 2026년 8월 18일 | {BRAND.name}</p>

      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 leading-relaxed">
        <h2 className="text-sm font-bold text-white">1. 수집하는 개인정보 항목 및 수집방법</h2>
        <p>OMAZU AICA는 기업 AX 프로젝트 상담, Academy 수강 신청 및 사전진단 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>수집항목: 성함, 소속/회사명, 이메일 주소, 연락처, 문의 내용</li>
          <li>수집방법: 홈페이지 상담 신청 폼 및 사전진단 신청 폼</li>
        </ul>

        <h2 className="text-sm font-bold text-white pt-2">2. 개인정보의 수집 및 이용목적</h2>
        <p>수집한 개인정보는 AX 컨설팅 안내, Academy 개강 알림, 정식 진단 결과 제공 및 고객 문의 응대를 위해 사용되며 목적 외 용도로 활용되지 않습니다.</p>

        <h2 className="text-sm font-bold text-white pt-2">3. 보유 및 이용기간</h2>
        <p>원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 일정 기간 보관합니다.</p>
      </div>
    </div>
  );
};
