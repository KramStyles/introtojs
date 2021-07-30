// VARIABLES
// ARRAYS
// CONDITIONS
// LOOPS
// FUNCTIONS
// OBJECTS
// CLASSES

box = document.getElementById('container');
txt_color = document.getElementById('txtColor');
btn1 = document.getElementById('btnColor');
btn2 = document.getElementById('btn2');

function changeToCrim(){
	box.style.background = 'crimson';
}

function changeToChoco () {
	box.style.backgroundColor = 'chocolate';
}

function changeColor () {
	color = txt_color.value;
	box.style.backgroundColor = color;
}

btn1.onclick = function () {
	changeColor();
}

// btn2.onclick = function () {

// }


btn2.addEventListener('mouseover', function () {
	console.log('Hover has happend');
});

// ASSIGNMENT OPERATOR =
// ARITHMETIC OPERATORS + - / * % ++ --
// LOGICAL OPERATORS < > == <= >= != XOR !||, XAND !&&, AND &&, OR ||, NOT !
// 