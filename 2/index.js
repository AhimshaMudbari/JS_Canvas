const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = { x: undefined, y: undefined };

canvas.addEventListener('click', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  //   drawCircle(e.x, e.y);
});
function drawCircle() {
  context.fillStyle = 'black';
  context.beginPath();
  context.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
  context.fill();
}

canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  // drawCircle(e.x,e.y);
});

function animation() {
  context.clearRect(0, 0, canvas.width, canvas.heigth);
  drawCircle();
  requestAnimationFrame(animation);
}
animation();
