// Select color input

const color = document.getElementById("colorPicker");

// Select size input

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWeight").value;

// Set a variable for the canvas

const canvas = document.getElementById("PixelCanvas");

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	// clear existing canvas
	canvas.empty();

	// set variables for rows and columns
	const newRow = "<tr></tr>";
	const newColumn = "<td></td>";

	// build rows
	for (i = 0; i < height; i++) {
		canvas.append(newRow);
	};

	// addlumns to rows
	let findRow = document.querySelector("tr");
	findRow.each(function(element) {
		for (j = 0; j < width; j++) {
			element.append(newColumn);
		}
	});
}

// Use makeGrid() on event "submit"
const event = document.getElementById("sizePicker");
event.on("submit", function(evt) {
	makeGrid();
	evt.preventDefault();
});