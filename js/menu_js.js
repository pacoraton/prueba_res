

function inicio(){
var btn_menu=document.getElementById('btn-menu');

var nave=document.getElementById("nave");

btn_menu.addEventListener("click",oculta);


function oculta(){
	alert("se cliqueo");
	nave.classList.toogle('mostrar');
}




}

document.addEventListener("DOMContentLoaded", inicio);

