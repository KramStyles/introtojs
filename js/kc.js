// BOM, DOM 

	// console.log('This is a statment that would not show');
	// alert('This is a statment that would not show'); 
	// document.write('This is a statement');

	// Browser object module, 
	// document 
	// VARIABLES
	// ARRAYS
	// FUNCTIONS
	// CONDITIONS
	// LOOPS
	// OBJECTS 
	// CLASSES OR MODULES

	//DOM

	var name = 'Mr KC Glass Watch'; 
	kc = 'Mr KC';
	console.log(name);

var contain = document.getElementById('container');

function mr(){
	hello();
	how();
	good();
	hello();
}

function hello (argument) {
	console.log('hello') ;
}

function good (argument) {
	console.log('good morning') ;
}
function how (argument) {
	console.log('how are you doing') ;
}

function change() {
	contain.style.background = 'yellow';
	contain.style.color = '#d00';
}


var button2 = document.getElementById('mybutton');
var container2 = document.getElementById('mycontainer');
var input2 = document.getElementById('myinput');

button2.onclick = function () {
	var newColour = input2.value;
	container2.style.background = newColour;
}