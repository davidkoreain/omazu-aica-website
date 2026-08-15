export const BRAND = {
  name: "OMAZU AI Consulting & Academy",
  shortName: "OMAZU AICA",
  koreanName: "오마주 AI 컨설팅 & 아카데미",
  slogan: "Original Minds, Amplified by AI — From Zero to Unlimited.",
  sloganKo: "사람의 생각을 AI로, 제로에서 무한으로.",
  fasooMou: "Fasoo × OMAZU | AX 교육·컨설팅 협력 MOU"
};

export const LANDING_HERO = {
  headCopy: "기업의 AX를 진단·설계·검증하고, 개인의 AI 역량을 실제 결과물로 연결합니다.",
  midCopy: "기업에는 안전하고 검증 가능한 AX 실행을, 개인에게는 내일 바로 쓰는 AI 실무와 창작 역량을.",
  detail: "OMAZU AICA의 AX Framework와 Diagnostic을 기반으로 현재 수준과 실제 과제를 먼저 확인합니다. 기업은 업무·역량·데이터·시스템·Trust 조건을 진단하고, AI가 일할 구조를 설계한 뒤 교육이 결합된 Micro-PoC와 Business Value Validation으로 도입·확산 여부를 검증합니다. 개인은 사전진단과 2DAYS Sprint를 통해 실제 업무 또는 창작 결과물과 재사용 가능한 Workflow·Template까지 완성합니다."
};

export const FAILURE_POINTS = [
  {
    title: "한 번의 IT 이벤트로 다룬다",
    desc: "프로세스 변화가 아니라 일회성 프로젝트로 접근하면 기존 결재·의사결정 흐름과 부딪칩니다. 데모는 남고 일하는 방식은 그대로입니다."
  },
  {
    title: "목적과 지표가 없다",
    desc: "풀어야 할 업무 문제와 목표 지표를 정하지 않으면 예산은 시연에 쓰이고 효과는 측정되지 않습니다."
  },
  {
    title: "데이터가 준비되지 않았다",
    desc: "중복되고 낡고 불필요한 문서가 그대로 들어가 오답과 환각을 만듭니다."
  },
  {
    title: "현업 맥락이 빠졌다",
    desc: "현장이 실제로 어떻게 일하는지 빼놓은 채 위에서 밀어붙이면 쓰이지 않고 방치됩니다."
  },
  {
    title: "보안과 비용을 통제하지 못한다",
    desc: "지식자산·개인정보 유출 위험이 커지고 운영비가 통제되지 않아 투자 성과를 증명할 수 없습니다."
  }
];

export const DIAGNOSTIC_DOMAINS = [
  {
    domain: "AI 활용역량",
    question: "구성원이 AI를 이해하고 업무를 분해·활용·검증·안전하게 사용할 수 있는가",
    result: "역량 Profile · 교육계획"
  },
  {
    domain: "업무 프로세스",
    question: "어떤 업무에 병목·반복·오류·판단 부담이 있고 AI로 개선할 가치가 있는가",
    result: "AX 후보과제 · Priority AX Initiative"
  },
  {
    domain: "AX Execution Foundation",
    question: "문서·데이터·시스템·연계·운영조건으로 실제 PoC와 구축이 가능한가",
    result: "실행준비도 · 선결과제"
  },
  {
    domain: "Enterprise Trust",
    question: "AI·Agent의 데이터·권한·행동·비용·성과를 통제할 수 있는가",
    result: "Trust Gap · 통제요건"
  }
];

export const AX_ASSETS = [
  {
    name: "Knowledge (지식)",
    desc: "공식 문서·기준·매뉴얼",
    role: "AI 답변·분석·추천의 근거"
  },
  {
    name: "Data (데이터)",
    desc: "업무상태·성과를 판단하는 데이터",
    role: "분석·예측·성과측정의 기반"
  },
  {
    name: "Workflow (업무흐름)",
    desc: "순서·판단·승인·예외",
    role: "AI가 개입할 지점과 사람의 역할"
  },
  {
    name: "Application (업무시스템)",
    desc: "ERP·MES·CRM·메일 등 실제 실행환경",
    role: "Agent가 연결·실행할 대상"
  },
  {
    name: "Expertise (전문성)",
    desc: "숙련자의 판단기준·경험·예외처리",
    role: "사람의 암묵지와 의사결정 기준"
  }
];

export const CONSULTING_STEPS = [
  { step: "01 DIAGNOSE", title: "진단", desc: "4대 실행준비도와 실제 업무를 진단", output: "역량·업무·기반·Trust Gap" },
  { step: "02 PRIORITIZE", title: "우선순위", desc: "효과와 실행 가능성이 높은 과제 선정", output: "Priority AX Initiative" },
  { step: "03 DESIGN", title: "설계", desc: "업무·자산을 구조화하고 To-Be Workflow와 Trust 설계", output: "업무 구조 · Agent/Workflow 초안" },
  { step: "04 CO-BUILD", title: "공동구축", desc: "현업 교육과 함께 핵심 범위의 Micro-PoC 구현", output: "실제 AI·Agent Prototype" },
  { step: "05 VALIDATE", title: "검증", desc: "As-Is 기준선 대비 성과와 위험을 측정", output: "시간·품질·위험·비용 등 개선효과" },
  { step: "06 DECIDE", title: "투자판단", desc: "Business Value와 선결조건을 종합 판단", output: "Go / Conditional Go / No-Go · Roadmap" }
];

export const ACADEMY_SPRINT = [
  { stage: "BEFORE", title: "사전진단", desc: "현재 역량과 실제 과제를 확인하고 과정 목표를 정합니다.", output: "개인 진단 결과 · 실습과제" },
  { stage: "DAY 1", title: "과제 구조화", desc: "업무 또는 아이디어를 Task 단위로 나누고 목표·입력·판단기준·결과물을 정합니다.", output: "AI가 일할 수 있는 과제 구조" },
  { stage: "DAY 1", title: "첫 결과 창출", desc: "필요한 Prompt & Context, Tool을 사용해 실제 첫 결과를 만듭니다.", output: "업무 결과물 또는 콘텐츠 1차본" },
  { stage: "BETWEEN", title: "실제 현장 적용", desc: "첫 결과를 실제 업무나 창작에 써 보고 부족한 점, 반복되는 수정, 실패지점을 확인합니다.", output: "실제 사용 피드백" },
  { stage: "DAY 2", title: "검증 및 개선", desc: "결과의 품질과 활용성을 점검하고 실패원인과 개선방법을 보완합니다.", output: "완성도 높은 최종 결과" },
  { stage: "DAY 2", title: "재사용 구조화", desc: "반복해서 쓸 수 있도록 Workflow와 Template로 정리합니다.", output: "나만의 재사용 AI 작업체계" }
];

export const COURSE_COMPARISON = [
  {
    feature: "한 줄 정의",
    aiCourse: "내 업무를 AI Workflow로",
    creatorCourse: "아이디어를 완성 콘텐츠로"
  },
  {
    feature: "추천 대상",
    aiCourse: "반복 업무를 줄이고 싶은 직장인·실무자·1인 기업가",
    creatorCourse: "콘텐츠를 계속 만들어야 하는 크리에이터·마케터·강사"
  },
  {
    feature: "주요 내용",
    aiCourse: "업무 분해, Workflow 설계, 도구·API 연결, 결과 검증",
    creatorCourse: "콘텐츠 기획, 멀티모달 제작, 파이프라인 구성, 라이선스"
  },
  {
    feature: "수강 후 남는 것",
    aiCourse: "작동하는 업무 Workflow와 재사용 Template",
    creatorCourse: "완성 콘텐츠 패키지와 제작 파이프라인"
  }
];

export const DIFFERENCE_POINTS = [
  { general: "도구 기능과 사용법 중심", omazu: "내 실제 업무·아이디어에서 시작" },
  { general: "한 번 따라 해보고 종료", omazu: "DAY 1 결과를 실제로 써 본 뒤 DAY 2에서 개선" },
  { general: "Prompt 예제 중심", omazu: "업무 구조 · Context · Workflow · 검증까지 연결" },
  { general: "수강 후 무엇이 남는지 불명확", omazu: "완성 결과물 + 재사용 Workflow·Template가 남음" },
  { general: "모두에게 같은 내용", omazu: "사전진단으로 강점과 개발 우선순위를 확인" }
];
