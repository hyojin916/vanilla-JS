const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const point = document.querySelector(".point");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  point.style.top = `${y}px`;
  point.style.left = `${x}px`;
  point.innerHTML = `${x}px, ${y}px `;
});
