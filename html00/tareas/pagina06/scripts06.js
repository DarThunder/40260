import { getImage } from "./imagen06.js";

let x = (document.getElementById("app").innerHTML =
  getImage(666, "tu papa w") + getImage(300, "tu mama w"));

function saludar() {
  alert("xxx");
}

const imgList = app.querySelectorAll("img");
console.log(imgList);
for (let i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", () => {
    imgList[i].classList.toggle("circle");
  });
}

export { x, saludar, imgList };
