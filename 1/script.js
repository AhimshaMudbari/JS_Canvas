const canvas = document.getElementById('canvas1');

const ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.heigth = window.innerHeight;

  ctx.fillStyle = 'orange';
  ctx.fillRect(100, 100, 70, 10);
});
ctx.fillStyle = 'white';
ctx.strokeStyle = 'yellow';
ctx.beginPath(); //compulsory to start drawing a circle
ctx.arc(200, 100, 50, 0, Math.PI * 2); //math.pi *2 will draw a 360 line
ctx.stroke();
ctx.fill();
