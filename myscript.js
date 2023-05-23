function changeColor() {
	var red = document.getElementById("red").value;
	var green = document.getElementById("green").value;
	var blue = document.getElementById("blue").value;
	var colorBox = document.getElementById("color-box");

	var rgbColor = "rgb(" + red + "," + green + "," + blue + ")";
	colorBox.style.backgroundColor = rgbColor;

	document.getElementById("color-values").innerText = "RGB: (" + red + ", " + green + ", " + blue + ")";
	document.getElementById("hex-value").innerText = "Hex: " + rgbToHex(red, green, blue);
}

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) | ((+r << 16) | (+g << 8) | +b)).toString(16).slice(1).toUpperCase();
}

// Initialize with black color
changeColor();