// Set variables for canvas, grid-size and color

const canvas = document.querySelector("#pixelCanvas");
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWeight");
const color = document.querySelector("#colorPicker");

// Set variable for event

const sizePicker = document.querySelector("#sizePicker");

// code for building the grid

function makeGrid() {
    canvas.innerHTML = ""; //clear existing grid
    let tr, td;
    for (let i = 0; i < height.value; i++) {
        tr = document.createElement("tr");
        canvas.appendChild(tr);
        for (let j = 0; j < width.value; j++) {
            td = document.createElement("td");
            tr.appendChild(td);
        }
    }
}

// Let's shoot event

sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
})

// Add color to grid

canvas.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.nodeName === "TD") {
        e.target.style.backgroundColor = color.value;
    }
})

// Delete color from grid with right click

canvas.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    if (e.target.nodeName === "TD") {
        e.target.style.backgroundColor = "";
    }
})