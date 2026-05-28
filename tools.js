// 도구 모음 단일 소스(레지스트리). 도구를 추가하려면 이 배열에 항목 1개만 추가하세요.
// 메인 페이지(index.html)가 이 데이터로 카드와 접이식 목록을 그룹별로 렌더링합니다.
// group 값이 같은 도구끼리 한 묶음으로 표시되며, 그룹 순서는 배열에서 처음 등장한 순서를 따릅니다.
// name/desc/group은 한국어(ko), name_en/desc_en/group_en은 영어(en) 표시에 쓰입니다.
const TOOLS = [
  {
    icon: "🎂",
    name: "만 나이 계산기",
    desc: "생년월일로 만 나이와 다음 생일까지 D-day를 계산합니다.",
    name_en: "Age Calculator",
    desc_en: "Find your age and the D-day to your next birthday from a birth date.",
    slug: "age-calculator",
    href: "tools/age-calculator.html",
    group: "계산기 모음",
    group_en: "Calculators",
  },
  {
    icon: "💰",
    name: "연봉 실수령액 계산기",
    desc: "2026년 4대보험·세금 공제 후 월 실수령액을 계산합니다.",
    name_en: "Net Salary Calculator (KR)",
    desc_en: "Estimate monthly take-home pay after 2026 Korean insurance & taxes.",
    slug: "salary-calculator",
    href: "tools/salary-calculator.html",
    group: "계산기 모음",
    group_en: "Calculators",
  },
  {
    icon: "🔤",
    name: "글자수 세기",
    desc: "공백 포함/제외 글자수, 바이트, 단어 수를 실시간으로 카운트합니다.",
    name_en: "Character Counter",
    desc_en: "Count characters (with/without spaces), bytes, and words in real time.",
    slug: "char-counter",
    href: "tools/char-counter.html",
    group: "계산기 모음",
    group_en: "Calculators",
  },
  {
    icon: "🪜",
    name: "사다리 게임",
    desc: "이름과 도착지를 정하고 사다리타기로 결과를 뽑아요. 최대 20명.",
    name_en: "Ladder Game",
    desc_en: "Set names and destinations, then draw lots with a ladder. Up to 20 players.",
    slug: "ladder-game",
    href: "tools/ladder-game.html",
    group: "미니 게임",
    group_en: "Mini Games",
  },
];
