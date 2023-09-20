
const hoverElement = document.querySelector(".linka");

hoverElement.addEventListener("mouseover", () => {
  hoverElement.style.fontSize = "30px";
  hoverElement.style.color = "white";
});

hoverElement.addEventListener("mouseout", () => {
  hoverElement.style.fontSize = "26px";
});
