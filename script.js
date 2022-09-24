let container = document.querySelector("#container");
let quantity = 16;

for (let i = quantity; i > 0; i--) {
  let line = document.createElement("div");
  line.classList.add("line");
  for (let j = quantity; j > 0; j--) {
    let div = document.createElement("div");
    div.classList.add("pixel");
    line.appendChild(div);
  }
  container.appendChild(line);
}

pixel = document.querySelectorAll("div.pixel");

pixel.forEach((element) =>
  element.addEventListener("mouseover", (e) => {
    e.toElement.style.backgroundColor = "black";
  })
);
