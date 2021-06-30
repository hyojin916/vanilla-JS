const point = document.querySelector(".point");

point.addEventListener("click", (e) => {
  const domRect = point.getBoundingClientRect();
  console.log(domRect);
  console.log(`client: ${e.clientX}, ${e.clientY}`);
  console.log(`page: ${e.pageX}, ${e.pageY}`);
});

//방법 1. event listener 활용
const scrollBy = document.querySelector(".down");
const scrollTo = document.querySelector(".up");
const scrollInto = document.querySelector(".toPoint");

scrollBy.addEventListener("click", () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: "smooth",
  });
});

scrollTo.addEventListener("click", () => {
  window.scrollTo(0, 100);
});

scrollInto.addEventListener("click", () => {
  point.scrollIntoView();
});

//방법 2. button의 onclick 활용
const down = () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: "smooth",
  });
};

const up = () => {
  window.scrollTo(0, 100);
};

const toPoint = () => {
  point.scrollIntoView();
};
