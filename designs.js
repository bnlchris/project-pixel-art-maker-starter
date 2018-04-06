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
    makeGrid;
})