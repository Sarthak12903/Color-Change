const bgColor = document.querySelector("body");
const font = document.querySelector("h1");

for (let i = 0; i < 6; i++) {
  let color = document.querySelectorAll("button")[i];
  color.addEventListener("click", () => {
    if (color.getAttribute("title") === "Red") {
      bgColor.style.backgroundColor = "red";
      font.style.color = "black";
    } else if (color.getAttribute("title") === "Blue") {
      bgColor.style.backgroundColor = "blue";
      font.style.color = "black";
    } else if (color.getAttribute("title") === "Green") {
      bgColor.style.backgroundColor = "green";
      font.style.color = "black";
    } else if (color.getAttribute("title") === "Black") {
      bgColor.style.backgroundColor = "black";
      font.style.color = "White";
    } else if (color.getAttribute("title") === "Orange") {
      bgColor.style.backgroundColor = "orange";
      font.style.color = "black";
    } else {
      bgColor.style.backgroundColor = "white";
      font.style.color = "black";
    }
  });
}
