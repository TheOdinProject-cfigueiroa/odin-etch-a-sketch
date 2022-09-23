let container = document.querySelector("#container")
let quantity = 16*16

for (let i = quantity; i > 0; i--){
    let div = document.createElement('div');
    div.classList.add("pixel");
    container.appendChild(div);
}


