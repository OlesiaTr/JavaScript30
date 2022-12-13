const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let direction = true;
let lastX = 0;
let lastY = 0;
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.globalCompositeOperation = 'multiply'; // Colors blend when they go one above the other
// ctx.globalCompositeOperation = 'screen'; // Colors blend inverted when they go one above the other
ctx.globalCompositeOperation = 'copy'; // Only the new shape is shown, which looks like a ball

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY); //start from
  ctx.lineTo(e.offsetX, e.offsetY); //go to
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth <= 1 || ctx.lineWidth >= 100) direction = !direction;
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseleave', () => (isDrawing = false));
