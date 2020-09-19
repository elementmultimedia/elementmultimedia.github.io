
let gradientRed = ["250", "85", "80"];
let gradientGreen = ["5", "250", "80"];
let gradientBlue = ["40", "180", "250"];
let gradientViolet = ["170", "120", "250"];
let colors = [gradientRed, gradientBlue, gradientGreen, gradientViolet];
let animation = null;
let runnig = false;

export default function init (pointer,ctx) { 

  console.clear()
  console.log(pointer,ctx)

  if(!runnig){ 
    let currentColor = colors[Math.floor(Math.random() * colors.length)];

    let particle = {};
    // Set how long we want our particle to animate for
    particle.animationDuration = 1000; // in ms

    // Set the speed for our particle
    particle.speed = pointer.y < ctx.canvas.height / 2 ? 3 : -3;

    // Size our particle
    particle.radius = 10;

    // Set a max time to live for our particle
    particle.life = 30 + Math.random() * 10;

    particle.x = pointer.x;

    particle.y = pointer.y;

    particle.color = currentColor;

    animation = setInterval(animate,30,particle,ctx)
  }
};

function animate (particle,ctx){
  if (particle.life > 0 && particle.radius > 0) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + particle.color[0] + "," + particle.color[1] + "," + particle.color[2] + ", 1)";
    ctx.fill();
    particle.life--;
    particle.radius -= 0.25;
    particle.x += particle.speed;
    particle.y += particle.speed;
    runnig = true;

  } else {
    clearInterval(animation);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    runnig = false;
  }

}


