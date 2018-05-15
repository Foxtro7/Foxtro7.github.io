// JavaScript Document

var m = "";

// Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	document.getElementById("d").value += val;
}

// Memory
function store_mem() {
	e();
	m = document.getElementById("d").value;
}

function clear_mem() {
	m = "";
}

// Rounding
function r(val) {
	e();
	document.getElementById("d").value = Math.round(document.getElementById("d").value * val) / val;
}

// Squaring
function s() {
	e();
	document.getElementById("d").value = document.getElementById("d").value * document.getElementById("d").value;
}

// Percentage
function per() {
	e();
	document.getElementById("d").value = document.getElementById("d").value / 100;
}

// Backspace
function b() {
	document.getElementById("d").value = document.getElementById("d").value.slice(0, -1);
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("quick not maths");
	}
}