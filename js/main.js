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

  let items = Array.from(document.querySelectorAll("[data-page]"))

  

  items.forEach(anchor =>
    anchor.onclick = (e) => {
      e.preventDefault();
      let flag = $(".navigation-main").hasClass("hidden")
      if(!flag){
        $(".navigation-main").addClass("hidden") 
      }
      let page = document.querySelector(`#${e.target.dataset.page}`)
      let offset = page.offsetLeft
      $('#wrapper').animate({ scrollLeft: offset }, 1000)
    }
  )
}

/* Scroll Horizontal */
var item = document.querySelector("main");

var mc = new Hammer(item);

mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });

mc.get("swipe").set({ direction: Hammer.DIRECTION_ALL });

window.addEventListener("wheel", (e) => scrollHorizontal(e,item) );

mc.on("panup pandown swipeup swipedown", (e) => /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/.test(navigator.userAgent) ? scrollHorizontal(e,item) : null)

/* Reproductor Video */

let btnPlay = document.querySelector("#btnPlay");
let btnStop = document.querySelector("#btnStop");
let btnPause = document.querySelector("#btnPause");
let btnMute = document.querySelector("#btnMute");
let btnUp = document.querySelector("#btnUp");
let video = document.querySelector("#mafiesto");

btnPlay.onclick = (e) => {
  video.play()
  video.volume = .5
}
btnPause.onclick = (e) => {
  video.pause();
}

btnStop.onclick = (e) => {
  video.pause();
  video.currentTime = 0;
}

btnMute.onclick = (e) => {
  video.volume -= .25
}

btnUp.onclick = (e) => {
  video.volume += .25
}


/* Portfolio */

/* Iconos */

let icons = Array.from(document.querySelectorAll("#trabajos ul li[data-element]"))

icons.forEach(icon =>
  icon.onclick = (e) => {
    e.preventDefault();
    document.getElementById("trabajos").classList.remove("water");
    document.getElementById("trabajos").classList.remove("fire");
    document.getElementById("trabajos").classList.remove("earth");
    document.getElementById("trabajos").classList.remove("air");
    icons.forEach(icon => icon.classList.remove("active"));

    if(e.target.dataset.element === undefined){
      let element = e.target.parentElement.dataset.element;
      document.getElementById("trabajos").classList.add(element);
      e.target.parentElement.classList.add("active");

      if(element === "water"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Producción Audiovisual"
      }
      if(element === "fire"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Diseño Grafico"
      }
      if(element === "earth"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Modelado 3D"
      }
      if(element === "air"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Programación Web y VIdeojuegos"
      }

    }else{
      let element = e.target.dataset.element;
      document.getElementById("trabajos").classList.add(element);
      e.target.classList.add("active");
      if(element === "water"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Producción Audiovisual"
      }
      if(element === "fire"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Diseño Grafico"
      }
      if(element === "earth"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Modelado 3D"
      }
      if(element === "air"){
        document.getElementById("trabajos").querySelector("h3").innerHTML = "Programación Web y VIdeojuegos"
      }

    }


  }
)


/* Characters */




/*  360 */
