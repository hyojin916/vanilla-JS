const rabbit = document.querySelector("#Rabbit");
const btn = document.querySelector("button");

// 1. onclick
const findRabbit = () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
};

// 2. eventListener
btn.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
