import init from './helpers/particular.js';
let btnMenu = document.querySelector("button#btn-menu")

btnMenu.onclick =  (e) =>{
  e.preventDefault();  
  document.querySelector(".navigation-main").classList.toggle("hidden")
} 

window.onload = () => {
  var c = document.getElementById("particulas");
  var ctx = c.getContext("2d");
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  c.onclick = (e) => init({ x: e.x, y: e.y },ctx)

}