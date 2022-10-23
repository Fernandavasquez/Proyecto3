
const btn=document.querySelector('button');
const body=document.querySelector('body');
const lcolor = document.getElementById('lcolor');

const colores= ['blue', 'pink', 'yellow', 'black', 'green', 'violet', 'red', 'gray', 'orange', 'purple', 'turquoise', 'brown', 'mustard', 'terracotta']

btn.addEventListener('click', fondo);

function fondo()
{
var indice=parseInt(Math.random()*colores.length);
body.style.backgroundColor=colores[indice];
lcolor.innerText = colores[indice];
}