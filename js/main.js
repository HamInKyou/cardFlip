const presentList = [
  {
    cardName: "모세",
    brand: "베스킨라빈스",
    presentName: "쿼터 아이스크림 (15500원)",
  },
  {
    cardName: "BHC",
    brand: "베스킨라빈스",
    presentName: "후라이드 반+양념 반+콜라 1.5L (18000원)",
  },
  {
    cardName: "베드로",
    brand: "던킨도너츠",
    presentName: "도너츠 10개팩 (15000원)",
  },
  {
    cardName: "아브라함",
    brand: "설빙",
    presentName: "티라미수 빙수 (11900원)",
  },
  {
    cardName: "요셉",
    brand: "KFC",
    presentName: "징거박스 (7800원)",
  },
  {
    cardName: "야곱",
    brand: "베스킨라빈스",
    presentName: "파인트 아이스크림 (8200원)",
  },
  {
    cardName: "다윗",
    brand: "파리바게트",
    presentName: "꽃 빙수 (딸기/망고) (8500원)",
  },
  {
    cardName: "세례요한",
    brand: "서브웨이",
    presentName: "이탈리안비엔티(15cm)+쿠키세트 (7300원)",
  },
  {
    cardName: "노아",
    brand: "맥도날드",
    presentName: "빅맥 세트 (5900원)",
  },
  {
    cardName: "에스더",
    brand: "파리바게트",
    presentName: "딸기&치즈케이크 (4900원)",
  },
  {
    cardName: "여호수아",
    brand: "설빙",
    presentName: "핫도그퐁당치즈떡볶이 (6900원)",
  },
  {
    cardName: "예레미야",
    brand: "이삭토스트",
    presentName: "트리플소세지 토스트 (4400원)",
  },
  {
    cardName: "기드온",
    brand: "던킨도너츠",
    presentName: "먼치킨 10개팩 (4000원)",
  },
  {
    cardName: "다니엘",
    brand: "이디야",
    presentName: "팥 인절미 1인 빙수 (5400원)",
  },
  {
    cardName: "에녹",
    brand: "서브웨이",
    presentName: "에그마요(15cm) (6200원)",
  },
  {
    cardName: "야고보",
    brand: "베스킨라빈스",
    presentName: "싱글킹 아이스크림 (4000원)",
  },
];
const innerEl = document.querySelector("#inner");

function paintFrontCard(present, containerEl) {
  const frontCardEl = document.createElement("div");
  frontCardEl.className = "card front";

  const imgEl = document.createElement("img");
  imgEl.src = "./images/present.png";
  frontCardEl.appendChild(imgEl);

  const h3El = document.createElement("h3");
  h3El.innerText = present.cardName;
  frontCardEl.appendChild(h3El);

  containerEl.appendChild(frontCardEl);
}

function paintBackCard(present, containerEl) {
  const backCardEl = document.createElement("div");
  backCardEl.className = "card back";

  const h2El = document.createElement("h2");
  h2El.innerText = "🎉축하합니다🎉";
  backCardEl.appendChild(h2El);

  const h3El = document.createElement("h3");
  h3El.innerText = present.brand;
  backCardEl.appendChild(h3El);

  const pEl = document.createElement("p");
  pEl.innerText = present.presentName;
  backCardEl.appendChild(pEl);

  containerEl.appendChild(backCardEl);
}

function paintPresents(present) {
  const containerEl = document.createElement("div");
  containerEl.className = "container";

  paintFrontCard(present, containerEl);
  paintBackCard(present, containerEl);

  containerEl.addEventListener("click", () => {
    containerEl.classList.add("active");
  });

  innerEl.appendChild(containerEl);
}

presentList.forEach((present) => {
  paintPresents(present);
});
