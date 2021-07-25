const presentList = [
  {
    cardName: "카드이름1",
    presentName: "선물내용1",
  },
  {
    cardName: "카드이름2",
    presentName: "선물내용2",
  },
  {
    cardName: "카드이름3",
    presentName: "선물내용3",
  },
  {
    cardName: "카드이름4",
    presentName: "선물내용4",
  },
  {
    cardName: "카드이름1",
    presentName: "선물내용1",
  },
  {
    cardName: "카드이름2",
    presentName: "선물내용2",
  },
  {
    cardName: "카드이름3",
    presentName: "선물내용3",
  },
  {
    cardName: "카드이름4",
    presentName: "선물내용4",
  },
  {
    cardName: "카드이름1",
    presentName: "선물내용1",
  },
  {
    cardName: "카드이름2",
    presentName: "선물내용2",
  },
  {
    cardName: "카드이름3",
    presentName: "선물내용3",
  },
  {
    cardName: "카드이름4",
    presentName: "선물내용4",
  },
  {
    cardName: "카드이름1",
    presentName: "선물내용1",
  },
  {
    cardName: "카드이름2",
    presentName: "선물내용2",
  },
  {
    cardName: "카드이름3",
    presentName: "선물내용3",
  },
  {
    cardName: "카드이름4",
    presentName: "선물내용4",
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

  const h3El = document.createElement("h3");
  h3El.innerText = "🎉축하합니다🎉";
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
