const size = document.querySelector(".size");

updateSize = () => {
  size.innerHTML = `
  window.screen: ${window.screen.width}, ${window.screen.height} </br>
  window.outer: ${window.outerWidth}, ${window.outerHeight} </br>
  window.inner: ${window.innerWidth}, ${window.innerHeight} </br>
  documentElement.clientWidth: ${document.documentElement.clientWidth} </br>
  `;
};

window.addEventListener("resize", () => {
  updateSize();
});
updateSize();
