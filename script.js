function buildCanvas(quantity = 16) {
  let container = document.querySelector("#container");
  container.innerHTML = "";
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
}

function validateInput() {
  let input
  while (input > 100 || input < 1 || !Number.isInteger(input)) {
    input = Number(prompt("canvas size? min: 1 - max: 100", 100));
  }
  return input
}

btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  buildCanvas(validateInput());
});

buildCanvas(16);