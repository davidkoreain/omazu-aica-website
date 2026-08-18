OMAZU AI Consulting & Academy

웹사이트 개편 자료 전달 메모

수신  윤석준 기획이사   ·   2026-08-17   ·   OMAZU AICA 

웹사이트 개편 자료를 전달드립니다. 본 v2.1은 단순한 구조와 공개범위 원칙은 유지하되, OMAZU의 핵심 자산인 AX Framework·Diagnotics·현장 실행방법론의 전문성이 충분히 드러나도록 공개 수준을 보강하고, Consulting의 단계별 범위와 OMAZU FDE Co-Build를 추가한 개정본입니다.

1. 전달 자료와 효력

순서

자료

성격

1

본 문서 Part A · OMAZU AICA Website UI 기준선

시각 기준 · 구속력 있음

2

본 문서 Part B · Website Revision v2.1B 최종실행본

콘텐츠 기준 · 구속력 있음

3

본 문서 Part C · Website Revision v2.1A 검토·의사결정본

판단 근거 · 참조용

4

index.html / consulting.html / academy.html

UI·레이아웃 참조 구현본

2. 적용 원칙

•  시각 기준은 Part A, 콘텐츠 기준은 Part B를 따릅니다. 두 파트가 최종 효력을 가집니다.

•  첨부 HTML 3종은 v2.0 기준으로 제작된 UI·레이아웃 참조 구현본입니다. v2.1에서 보강된 Framework·Diagnotics·OMAZU FDE 콘텐츠와 충돌할 경우 반드시 v2.1B를 우선합니다.

•  OMAZU의 공개 원칙은 ‘구조·규모·근거·산출물은 보여주되, 실행 로직·채점·워크시트는 공개하지 않는다’입니다.

•  Fasoo와의 MOU 체결 및 로고 사용 승인이 완료되어 Partnership 섹션은 공개합니다. 다만 Fasoo를 OMAZU 소유 플랫폼 또는 유일 기술기반으로 표현하지 않으며, 고객 과제에 따라 다른 기술·도구·Custom Development를 함께 조합할 수 있습니다.

•  Preview 페이지는 검색엔진 색인을 차단하고, Production 도메인은 aica.omazu.ai를 사용합니다.

3. 코딩 착수 전 요청 산출물

•  최종 sitemap 및 URL 목록

•  재사용 컴포넌트와 폐기 컴포넌트 목록

•  문의·진단 폼 데이터 흐름 및 수신 경로

•  1차 오픈 범위와 일정

PART A

OMAZU AICA Website UI 기준선

시각 기준 · 구속력 있음

1. UI 방향

메인 UI Benchmark: Xebia

Xebia의 콘텐츠나 사업구조를 복제하지 않고, 밝고 절제된 B2B Technology Consulting의 시각적 문법을 기준으로 적용합니다.

항목

기준

전체 인상

밝고 정제된 B2B Technology Consulting 톤

배경

White / Off-white 중심, Navy·Blue는 포인트로 제한

Hero

Typography 중심, 최대 2줄, 장문 설명 금지

이미지

전형적 AI 네트워크·회로·로봇 이미지 금지. 필요한 경우 대형 Visual 1점씩 사용

여백

섹션 간 충분한 White Space 확보

카드

비교·선택이 필요한 경우에만 사용. 카드/박스 남발 금지

CTA

Primary 1개 우선, Secondary는 위계 낮게

Navigation

얇고 단정하게. 서비스보다 앞서 보이지 않도록 설계

Graphic

OMAZU 자체 Framework/ Diagnotics 을 웹용 Signature Graphic으로 단순화

2. Typography

요소

기준

기본 서체

Pretendard Variable 또는 동급의 현대적 Sans-serif

Hero

Desktop 60–72px 범위 / 최대 2줄

Hero 행간

약 1.20–1.30

Hero 자간

소폭 Negative Tracking

본문

약 17–18px / 행간 약 1.6–1.7

위계

Hero → Section Title → Subcopy → Body가 한눈에 구분되도록 설계

3. Color / Component

•  White / Off-white를 기본 면으로 사용하고 Navy를 브랜드 메인, Blue를 CTA·Link·핵심 강조에 제한적으로 사용합니다.

•  Rainbow Gradient, Neon/Cyan Glow, Glassmorphism, 과도한 Shadow·Gradient Button을 사용하지 않습니다.

•  모든 정보를 Card 안에 넣지 않습니다. Typography + White Space + Divider + Simple Grid를 기본 문법으로 사용합니다.

•  Hero와 핵심 섹션의 시각 리듬을 위해 필요한 곳에만 Large Visual 또는 OMAZU Signature Graphic을 배치합니다.

4. 금지 방향

•  AI SaaS Template 느낌

•  Cyber / Sci-Fi

•  Black Dashboard

•  Neon Blue·Glow

•  AI 생성 이미지 중심

•  Icon·Badge·Card 남용

•  PPT 내용을 그대로 웹페이지에 옮긴 듯한 구성

5. 최종 UI 기준

Xebia의 밝고 절제된 B2B Technology Consulting UI를 시각적 기준으로 삼되, 한글 Typography와 OMAZU Navy/Blue Brand Identity에 맞게 보정하고, 일반적인 AI 이미지 대신 Typography·White Space·OMAZU 자체 Graphic을 중심으로 전문성과 신뢰감을 구현합니다.

PART B

OMAZU AICA Website Revision v2.1B

최종 실행본 · 콘텐츠 기준 · 구속력 있음

0. v2.1 공개 기준

구분

공개 수준

홈페이지에 보여줄 것

비공개 경계

Framework 어휘

강하게 공개

AX 자산 5영역 이름 · 조건/설계/검증 3-Layer · 핵심 개념

각 영역의 상세 진단·구현 로직

Diagnotics 규모

공개

4대 진단영역 · AI 활용역량 7개 하위역량 · 28문항 · 결과지 2종

문항 전문 · 채점식 · 임계값 · 교차해석 로직

Reference 근거

요약 공개

국내 적용기준 · ISO/IEC · NIST · Enterprise AI Benchmark · 업무/역량 표준의 교차참조

Reference별 상세 매핑·판정 근거

산출물

이름 공개

Readiness Gap · Priority AX Initiative · To-Be Workflow · Micro-PoC · Business Value Assessment · AX Roadmap

작성 템플릿 · 평가표 · 산식

실행방법

범위만 공개

진단·교육 → Decision Sprint/Micro-PoC → OMAZU FDE Co-Build

AX-BPR 9요소 · Worksheet · Tool 원본 · 구축 상세 명세

핵심 원칙: OMAZU의 ‘무엇을 가지고 있고 무엇을 만들어내는지’는 명확히 보여주되, 경쟁사가 그대로 수행할 수 있는 실행 로직과 내부 도구는 공개하지 않습니다.

1. 현재 사이트 → v2.1 확정 수정사항

No.

위치

현재

조치

변경 후

01

GNB

HOME / CONSULTING B2B / ACADEMY B2C

수정

HOME / CONSULTING / ACADEMY

02

Header

AX 역량 진단 / 로그인 / 회원가입 / 기업 AX 문의

삭제·정리

상담 신청만 Primary CTA로 노출

03

Hero Headline

기존 Hero Headline

교체

기업의 AX를 설계하고, 사람의 일하는 방식을 바꿉니다.

04

Hero Subcopy

현재 장문 설명

교체

AI로 현장의 문제를 함께 풉니다.

05

Hero Body

Framework· Diagnotics ·Micro-PoC 등 장문 설명

축소

OMAZU는 자체 AX Framework와 Diagnotics 을 기반으로 기업의 업무 전환을 설계·검증하고, Academy에서는 실제 과제를 AI Workflow와 결과물로 연결한다는 1~2문장만 노출

06

HOME 사업구조

CONSULTING B2B / ACADEMY B2C

수정

CONSULTING / ACADEMY 두 경로만 동일 위계로 노출

07

HOME

TWO PATHS 장문 영역

삭제

삭제

08

HOME · OMAZU APPROACH

Diagnotics + Framework 개별 상세

통합·보강

Diagnotics 과 Framework를 하나의 실행체계로 표현. ‘현재 상태를 진단하고, 우선과제를 설계하고, 실제 업무에서 검증해 투자판단까지 연결’ 문장 노출

09

OMAZU APPROACH Graphic

단순 텍스트 흐름

보강

4대 DiagnosticsLens → DIAGNOSE → DESIGN → VALIDATE의 OMAZU Signature Graphic

10

OMAZU APPROACH Output

없음 또는 약함

추가

Readiness Gap → Priority AX Initiative → To-Be Workflow → Micro-PoC → Business Value Decision을 결과 흐름으로 노출

11

HOME · WHY OMAZU

없음

추가

WHY OMAZU 독립 섹션 신설

12

WHY OMAZU

차별점이 분산됨

정리

① Framework + Diagnotics s② From Work to PoC ③ Trust + Business Value의 3개 차별점으로 정리

13

Reference-based Methodology

근거 노출 약함

추가

‘Built on multiple standards & enterprise benchmarks’ + 국내 적용기준·ISO/IEC·NIST·Microsoft·AWS·Google Cloud·Gartner·DigComp·BPMN/DMN 등을 ‘참조·교차검증’ 텍스트로만 표기. 인증·제휴처럼 보이는 로고 사용 금지

14

Framework · AX 자산

AX 자산 5영역 상세표

축소 공개

Knowledge · Data · Workflow · Application · Expertise의 5개 이름만 공개. 상세 질문·역할·구현방식은 비공개

15

Framework · 3-Layer

3-Layer 상세 실행구조

공개 강화

CONDITION — AI를 적용할 준비가 되어 있는가 / DESIGN — AI가 무엇을 알고, 어떻게 일하고, 어디까지 행동할 것인가 / VALIDATE — 실제로 작동하고, 안전하며, 투자할 가치가 있는가

16

Framework · 핵심 개념

일부 노출

공개

Enterprise Intelligence · Agentic Workflow · Enterprise Trust · Business Value Validation의 이름과 1문장 설명 공개

17

Framework · 실행 IP

AX-BPR 9요소·Worksheet·Tool

비공개 유지

이름 또는 존재만 언급 가능. 9요소 상세·템플릿·평가기준·도구 원본은 공개 금지

18

Diagnotics· 4대 영역

개별 또는 축약

공개 강화

AI 활용역량 / 업무 프로세스 / AX Execution Foundation / Enterprise Trust 4대 영역 공개

19

Diagnotics· 규모

정밀도 근거가 약함

추가

AI 활용역량 진단은 7개 하위역량, 총 28문항(H1~H7 + 21개 역량문항), Practitioner / Executive 2종 결과지로 구성된다는 규모 공개

20

Diagnotics· 결과 연결

영역 설명만 있음

추가

AI 활용역량 → 교육·인력 준비도 / 업무 프로세스 → Priority AX Initiative / AX Execution Foundation → 실행 Gap·선결조건 / Enterprise Trust → 통제 Gap·운영조건

21

Diagnotics· Quick Check

정식 진단과 경계 불명확

수정

Quick Check와 Formal Diagnostics을 명칭·설명·결과에서 명확히 분리

22

Quick Check

정식 진단으로 오인 가능

수정

상담 전 간이 확인용이며 정식 개인·조직 진단을 대체하지 않음을 명시

23

DiagnoticsForm

개인정보 안내

추가

수집항목·목적·보유기간·동의 거부 안내 및 필요한 동의 절차 적용

24

Diagnotics

결과 활용 안내

추가

조직개발·교육·AX 과제 설계를 위한 자료이며 개인의 단독 인사평가 기준으로 사용하지 않음을 명시

25

Consulting Hero

기존 장문 설명

축소

AI 도입이 아니라, 우리 조직의 업무 전환과 투자 판단을 설계합니다. + 핵심 설명

26

Consulting · Engagement Scope

교육형/구축형 범위가 불명확

신설

고객 준비도와 과제 범위에 따라 ① Diagnotics& Education Consulting ② AX Decision Sprint / Micro-PoC ③ OMAZU FDE Co-Build의 3개 범위로 단계적 진행 가능

27

OMAZU FDE Co-Build

명칭·역할 없음

신설

검증된 과제를 실제 데이터·문서·업무시스템과 연결해 현업과 함께 Agent·Workflow를 구현하고 구축 PM·운영·확산까지 연결하는 현장밀착형 공동구축 방식으로 정의

28

Technology Basis

Fasoo 중심으로 오인 가능

수정

특정 플랫폼에 고정하지 않음. Enterprise AI·Data·Trust 기술 + 외부 LLM·Agent Tool + 고객 기존 시스템 + 필요 시 OMAZU/기술파트너 Custom Development를 과제별로 조합

29

Level 1 / Level 2

경계 약함

명확화

Level 1은 진단·교육·실습·기능 프로토타입과 투자판단까지. 실제 데이터·시스템을 연결한 운영 구축과 확산은 Level 2 Co-Build & Deployment 범위

30

Consulting · Execution Flow

6단계 상세 프로세스

축소

DIAGNOSE → PRIORITIZE & DESIGN → MICRO-PoC → VALIDATE & SCALE

31

Business Value

TCO·ROI 상세지표·산정식

축소

성과·위험·비용·선결조건을 검토해 다음 투자단계를 판단하는 구조만 공개. 최종 판정 Go / Conditional Go / No-Go 유지

32

Academy

ACADEMY B2C

수정

ACADEMY

33

Academy Hero

기존 장문

축소

실제 업무·아이디어 → 결과물 → 재사용 Workflow 중심으로 표현

34

Academy Sprint

BEFORE / DAY1 / BETWEEN / DAY2 상세

축소

DIAGNOSE → BUILD → APPLY & IMPROVE → REUSE

35

Academy Courses

AI COURSE / CREATOR COURSE

유지

두 과정 유지

36

Fasoo

Hero Trust Bar 및 반복 노출

수정

HOME 후반 Partnership 1개 섹션으로 노출. Hero Trust Bar 및 반복 노출은 사용하지 않음

37

Fasoo Partnership

MOU 체결 및 로고 사용 승인 완료

공개

Fasoo × OMAZU Partnership 섹션을 공개. OMAZU는 업무·AX 진단, 재설계, PoC 기획·PM을 담당하고, 필요 시 Fasoo의 Enterprise AI·Data·Trust 기술 적용 가능성과 기술검증 범위를 협의. Fasoo를 OMAZU의 기술기반 전체 또는 유일 기술로 동일시하지 않음

38

Preview Domain

*.vercel.app

변경

개발·검토용 Preview로만 사용하고 검색엔진 색인 방지

39

Production Domain

Vercel URL

변경

https://aica.omazu.ai

40

Footer

상세 방법론 및 불필요한 사업구분

정리

OMAZU / Framework / Diagnostics/ Partnership / 회사정보 / Privacy / Terms / Contact

2. HOME 최종 섹션 순서

순서

섹션

핵심 역할

01

HERO

OMAZU 정체성 + Consulting / Academy 진입

02

CONSULTING / ACADEMY

두 사업축을 동일 위계로 분리

03

OMAZU APPROACH

4대 Lens + DIAGNOSE → DESIGN → VALIDATE + 핵심 Output

04

WHY OMAZU

Framework + Diagnotics/ From Work to PoC / Trust + Business Value

05

REFERENCE-BASED METHODOLOGY

국내 기준·국제표준·Enterprise AI Benchmark 교차참조 근거

06

PARTNERSHIP

MOU 체결 및 로고 사용 승인 완료 — Fasoo × OMAZU Partnership 공개

07

FINAL CTA

상담 신청 / Academy

08

FOOTER

Secondary navigation / 법정 고지

3. CONSULTING 최종 섹션 순서

순서

섹션

핵심 역할

01

HERO

업무 전환과 투자판단을 설계한다는 포지셔닝

02

WHY DIAGNOSIS FIRST

문제·데이터·현업맥락·Trust·성과 기준 선행

03

ENGAGEMENT SCOPE

Diagnostics& Education Consulting → Decision Sprint / Micro-PoC → OMAZU FDE Co-Build

04

OMAZU AX FRAMEWORK

AX 자산 5영역 이름 + CONDITION / DESIGN / VALIDATE + 4개 핵심 개념

05

OMAZU AX DIAGNOSTIC

4대 영역 + AI 활용역량 진단의 규모 + 결과 활용

06

EXECUTION FLOW

DIAGNOSE → PRIORITIZE & DESIGN → MICRO-PoC → VALIDATE & SCALE

07

OMAZU FDE CO-BUILD

현업 공동구축·데이터/시스템 연계·구축 PM·운영 확산

08

BUSINESS VALUE VALIDATION

성과·위험·비용·선결조건 + Go / Conditional Go / No-Go

09

PARTNERSHIP

Fasoo × OMAZU Partnership 공개. 필요 시 Enterprise AI·Data·Trust 기술 적용·검증 연계

10

상담 CTA

고객 범위 선택 없이 상담으로 진입

4. ACADEMY 최종 섹션 순서

순서

섹션

01

HERO

02

사전진단

03

2DAYS Sprint

04

AI COURSE / CREATOR COURSE

05

과정 차별점

06

개강·상담 CTA

5. Consulting 공개용 핵심 카피

구분

확정 카피

Engagement Scope

고객의 준비도와 과제 범위에 따라 진단·교육 단계에서 종료하거나, Micro-PoC와 OMAZU FDE Co-Build까지 단계적으로 확장할 수 있습니다.

01 · Diagnotics & Education Consulting

4대 진단과 실제 업무분석을 바탕으로 AX 교육·워크숍, 우선과제 발굴과 실행계획까지 설계합니다.

02 · AX Decision Sprint / Micro-PoC

실제 업무를 재설계하고 핵심 범위의 Prototype을 구현해 가능성·Trust·Business Value를 검증합니다.

03 · OMAZU FDE Co-Build

검증된 과제를 실제 데이터·문서·업무시스템과 연결하고, 현업과 함께 Agent·Workflow를 구현해 구축·운영·확산까지 이어갑니다.

Technology-neutral Delivery

특정 플랫폼을 전제로 하지 않습니다. Enterprise AI·Data·Trust 기술, 외부 LLM·Agent Tool, 고객의 기존 시스템과 필요 시 Custom Development를 과제에 맞게 조합합니다.

Core IP Positioning

OMAZU의 핵심 자산은 특정 소프트웨어 플랫폼 자체가 아니라 AX Framework + Diagnostics+ 현장 실행방법론입니다.

Fasoo Partnership

OMAZU는 고객의 업무와 AX 실행조건을 진단하고 업무 재설계·PoC 기획·구축 PM을 수행합니다. Fasoo와의 MOU를 기반으로 필요한 경우 Enterprise AI·Data·Trust 기술의 적용 가능성과 기술검증 범위를 함께 검토합니다. 프로젝트의 기술 구성은 고객 환경과 과제 특성에 따라 다른 LLM·Agent Tool·기존 시스템·Custom Development와 조합할 수 있습니다.

6. Framework / Diagnotics 공개용 핵심 카피

구분

확정 카피

OMAZU APPROACH

OMAZU는 진단도구와 Framework를 별도로 사용하지 않습니다. 현재 상태를 진단하고, 우선과제를 설계하고, 실제 업무에서 검증해 투자판단까지 연결하는 하나의 실행체계입니다.

AX 자산 5영역

Knowledge · Data · Workflow · Application · Expertise

3-Layer

CONDITION — AI를 적용할 준비가 되어 있는가 → DESIGN — AI가 무엇을 알고, 어떻게 일하고, 어디까지 행동할 것인가 → VALIDATE — 실제로 작동하고, 안전하며, 투자할 가치가 있는가

4 Core Concepts

Enterprise Intelligence · Agentic Workflow · Enterprise Trust · Business Value Validation

Diagnotics 4 Domains

AI 활용역량 · 업무 프로세스 · AX Execution Foundation · Enterprise Trust

AI 활용역량 진단 규모

7개 하위역량 · 28문항 · Practitioner / Executive 2종 결과지

Output Chain

Readiness Gap → Priority AX Initiative → To-Be Workflow → Micro-PoC → Business Value Assessment → AX Roadmap

Reference Copy

Built on multiple standards & enterprise benchmarks. 국내 AI·개인정보·공공 적용기준, ISO/IEC·NIST, Microsoft·AWS·Google Cloud·Gartner 등 Enterprise AI Benchmark, DigComp·BPMN·DMN 등의 업무·역량 Framework를 목적별로 교차 참조해 설계합니다.

7. 개발 적용 시 금지사항

•  B2B / B2C 표기 재사용 금지

•  전문직 Academy로 변경 금지

•  GNB에 AX 진단·Framework·Partner 메뉴 추가 금지

•  AX 자산 5영역의 상세 질문·기술구현표 재삽입 금지

•  AX-BPR 9요소, 우선과제 평가기준, Worksheet·Template 원문 공개 금지

•  진단 문항 전문·채점식·Level 기준·Champion 임계값·Response Consistency Flag 공개 금지

•  TCO·ROI 산식 및 상세 평가표 공개 금지

•  Fasoo를 OMAZU 소유 플랫폼 또는 유일 기술기반처럼 표현 금지

•  Fasoo Partnership은 MOU 및 로고 사용 승인 범위 내에서 공개하되, Fasoo를 OMAZU의 유일 기술기반 또는 모든 프로젝트의 기본 적용 기술처럼 표현 금지

•  Palantir 및 타사 FDE 비교 문구를 공개 홈페이지에 삽입 금지

•  Reference 기업·표준명을 인증·제휴·공식 채택처럼 표현하거나 로고월로 구성 금지

•  Preview Vercel 페이지 검색엔진 색인 허용 금지

•  본 문서에 없는 대체 카피를 AI가 임의 생성하여 적용 금지

PART C

OMAZU AICA Website Revision v2.1A

검토·의사결정본 · 판단 근거 · 참조용

1. 이번 개정의 핵심 판단

의사결정

판단 근거

v2.0의 단순 구조 유지

HOME / CONSULTING / ACADEMY 3개 GNB는 유지한다. Diagnotics·Framework·Partnership을 사업축과 같은 레벨로 다시 올리지 않는다.

Framework / Diagnotics공개량 20~30% 보강

v2.0은 세부 IP 보호에는 성공했지만 OMAZU만의 자산이 약하게 보였다. 이번에는 어휘·규모·근거·산출물은 공개해 전문성을 증명하고 실행 로직은 계속 비공개한다.

OMAZU의 핵심 IP 명확화

현재 OMAZU의 핵심 IP는 특정 소프트웨어 플랫폼 자체가 아니라 AX Framework + Diagnostics+ 현장 실행방법론이다. 웹사이트는 이 자산을 브랜드 중심에 배치한다.

Framework 3-Layer 공개

조건 → 설계 → 검증은 방법론의 철학과 체계를 보여주는 수준이며, 상세 구성요소를 펼치지 않으면 복제 리스크가 낮다.

AX 자산 5영역 이름 공개

Knowledge · Data · Workflow · Application · Expertise라는 어휘는 Framework가 존재한다는 강한 신호지만, 이름만으로 실행할 수 없으므로 공개한다.

Diagnotics규모 공개

4대 진단영역과 AI 활용역량 진단의 7개 하위역량·28문항·2종 결과지는 로직이 아니라 정밀도와 완성도를 보여주는 근거이므로 공개한다.

Reference 근거 공개

Reference Architecture는 단일 모델 번역이 아니라 P0~P3로 국내 적용성·Assessment 설계·시장 Coverage·국제표준 정합성을 교차 검증하는 구조다. 공개 시에는 대표 기준만 요약하고 세부 매핑은 비공개한다.

WHY OMAZU 신설

현재 사이트는 무엇을 하는지는 보이지만 왜 OMAZU인지가 약하다. Framework + Diagnotics/ From Work to PoC / Trust + Business Value를 3개 차별점으로 명료하게 제시한다.

Consulting을 범위별로 제시

모든 고객이 구축까지 갈 필요는 없다. 진단·교육형 Consulting, Decision Sprint/Micro-PoC, FDE Co-Build로 범위를 나눠 고객 준비도와 과제에 따라 단계적으로 확장할 수 있게 한다.

OMAZU FDE Co-Build 도입

Level 2의 현장밀착형 공동구축을 OMAZU FDE Co-Build로 명명한다. 실제 데이터·시스템 연계, Agent·Workflow 구현, 구축 PM과 확산까지 수행하는 고도 실행 Delivery Model로 정의한다.

기술중립성 명시

원본 Framework도 Level 2 수행방식·인력·기술파트너·제품·보안솔루션을 고객·과제 특성에 따라 설계하고 특정 방식이나 제품에 고정하지 않는다. 따라서 OMAZU FDE 역시 특정 플랫폼 종속 모델로 표현하지 않는다.

Fasoo 역할 정리

Fasoo와의 MOU 체결 및 로고 사용 승인이 완료되어 Partnership을 공개한다. Fasoo는 OMAZU의 주요 Enterprise AI·Data·Trust 기술 협력 파트너이지만 OMAZU 소유 플랫폼이나 유일 기술기반은 아니다. 고객 과제에 따라 외부 LLM·Agent Tool·기존 시스템·Custom Development 등과 함께 조합한다.

Reference 기업명 표현 제한

Microsoft·AWS·Google Cloud·Gartner 등은 P2 Maturity & Market Benchmark의 교차검증 Reference다. 파트너·인증·채택사로 오인되지 않도록 텍스트 참조로만 표기한다.

HTML 3종의 효력 조정

기존 HTML은 UI·레이아웃 참고자료로 유지한다. 콘텐츠는 v2.1B가 우선하며, Framework·Diagnotics·FDE 보강분은 개발 시 HTML에 새로 반영한다.

2. 공개 / 비공개 최종 선

공개

비공개

OMAZU AX Framework 명칭과 역할

Framework 상세 실행 매뉴얼

AX 자산 5영역 이름

5영역별 상세 질문·기술 구현 방향

조건 → 설계 → 검증 3-Layer

3-Layer 내부 Tool·판정 기준

Enterprise Intelligence / Agentic Workflow / Enterprise Trust / Business Value Validation

AX-BPR 9요소 상세 및 Worksheet

4대 Diagnotics영역

진단 문항 전문·채점식·N/A·Level 산정

AI 활용역량 7개 하위역량·28문항·결과지 2종이라는 규모

Champion 임계값·교차해석식·Response Consistency Flag

대표 Reference와 P0~P3 교차참조 원칙

Reference별 상세 매핑·사용제한 내부 메모

Priority AX Initiative / To-Be Workflow / Micro-PoC / Business Value Assessment / AX Roadmap 등 산출물 이름

산출물 양식·Template·검증표 원본

Consulting 3개 범위와 OMAZU FDE Co-Build 역할

실제 프로젝트 SOW·인력구성·기술아키텍처 상세

Go / Conditional Go / No-Go 최종 Gate

TCO·ROI 산식·점수 임계값·판정표

3. 기준 문서

•  Omazu AX Framework v2 — 상세 실행본

•  Omazu AX Framework & Diagnotics— 핵심 요약 (SUM v1.1, 2026.08.12)

•  AI 활용역량 진단 질문지·Practitioner/Executive 결과지·운영매뉴얼 v0.7

•  Omazu AX DiagnoticsReference Structure v1.1

•  OMAZU AICA Website Revision v2.0 통합전달본

4. 최종 원칙

•  홈페이지는 방법론 매뉴얼이 아니라 전문성을 증명하고 고객이 다음 행동을 선택하게 만드는 영업 사이트로 설계합니다.

•  Consulting / Academy 두 사업축은 유지하고 Diagnotics·Framework·Partnership은 차별성을 증명하는 자산으로 배치합니다.

•  OMAZU는 ‘깔끔한 AI 컨설팅 회사’가 아니라 자체 Framework·Diagnotics·Execution Methodology를 가진 AX 실행회사로 보여야 합니다.

•  설명은 줄이되 증거는 강화합니다. 구조·규모·근거·산출물은 공개하고 실행 로직은 보호합니다.

•  Consulting은 고객 상황에 따라 진단·교육에서 종료할 수도 있고, Micro-PoC와 OMAZU FDE Co-Build까지 단계적으로 확장할 수 있습니다.

•  OMAZU FDE는 특정 플랫폼 판매모델이 아니라, Framework와 Diagnotics을 바탕으로 필요한 기술을 조합해 현업과 함께 실제 업무를 구현하는 Delivery Model입니다.

OMAZU AICA · Website Revision v2.1 · 2026-08-17