//alert("i am awesome is that clear")
var change=document.getElementById('changecolor');
var bla=document.getElementById('inputresult');
var header=document.getElementById('header');

function redClicked(){
    header.style.backgroundColor="darkred";
}
function greenClicked(){
    header.style.backgroundColor="darkgreen";
}
function orangeClicked(){
    header.style.backgroundColor="darkorange"
}

function changeMe(){
    var colorFromText=bla.value;
    header.style.backgroundColor=colorFromText;
}
