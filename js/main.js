import init from './helpers/particular.js';
import scrollHorizontal from './helpers/scroll.js';
let btnMenu = document.querySelector("button#btn-menu")

btnMenu.onclick =  (e) =>{
  e.preventDefault();  
  document.querySelector(".navigation-main").classList.toggle("hidden")
} 

window.onload = () => {

  let pages = Array.from(document.querySelectorAll(".page"))
  pages.forEach(page => {
      let children = Array.from(page.children)
      let canvas = children.find(tag => tag.tagName == "CANVAS")
      if(canvas != undefined){
        var ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.onclick = (e) => init({ x: e.x, y: e.y },ctx)
      }
  });
  

}

/* Scroll Horizontal */
var item = document.querySelector("main");

var mc = new Hammer(item);

mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

window.addEventListener("wheel", (e) => scrollHorizontal(e,item) );

mc.on("panup pandown swipeup swipedown", (e) => /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/.test(navigator.userAgent) ? scrollHorizontal(e,item) : null)
