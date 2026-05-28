// 도구 모음 단일 소스(레지스트리). 도구를 추가하려면 이 배열에 항목 1개만 추가하세요.
// 메인 페이지(index.html)가 이 데이터로 카드와 접이식 목록을 모두 렌더링합니다.
const TOOLS = [
  {
    icon: "🎂",
    name: "만 나이 계산기",
    desc: "생년월일로 만 나이와 다음 생일까지 D-day를 계산합니다.",
    slug: "age-calculator",
    href: "tools/age-calculator.html",
  },
  {
    icon: "💰",
    name: "연봉 실수령액 계산기",
    desc: "2026년 4대보험·세금 공제 후 월 실수령액을 계산합니다.",
    slug: "salary-calculator",
    href: "tools/salary-calculator.html",
  },
  {
    icon: "🖼️",
    name: "이미지 포맷 변환기",
    desc: "PNG·JPG·WebP 변환과 압축, 업로드 없이 브라우저에서 처리합니다.",
    slug: "image-converter",
    href: "tools/image-converter.html",
  },
  {
    icon: "🔤",
    name: "글자수 세기",
    desc: "공백 포함/제외 글자수, 바이트, 단어 수를 실시간으로 카운트합니다.",
    slug: "char-counter",
    href: "tools/char-counter.html",
  },
  {
    icon: "🪜",
    name: "사다리 게임",
    desc: "이름과 도착지를 정하고 사다리타기로 결과를 뽑아요. 최대 20명.",
    slug: "ladder-game",
    href: "tools/ladder-game.html",
  },
];
