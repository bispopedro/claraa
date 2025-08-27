 canvas = document.getElementById("coracoes");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let coracoes = [];

function criaCoracao() {
  coracoes.push({
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 0.5 + 1
  });
}

function desenhaCoracoes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  coracoes.forEach((c, i) => {
    ctx.fillStyle = "rgba(218, 31, 124, 0.7)";
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.arc(c.x - c.size / 2, c.y, c.size / 2, 0, Math.PI * 2);
    ctx.arc(c.x + c.size / 2, c.y, c.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(c.x - c.size, c.y);
    ctx.lineTo(c.x, c.y + c.size);
    ctx.lineTo(c.x + c.size, c.y);
    ctx.fill();

    c.y += c.speed;
    if (c.y > canvas.height) coracoes.splice(i, 1);
  });
}

function animar() {
  criaCoracao();
  desenhaCoracoes();
  requestAnimationFrame(animar);
}

animar();
