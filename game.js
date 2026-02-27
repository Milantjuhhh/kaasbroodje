const startBtn = document.getElementById('start-btn');
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

startBtn.addEventListener('click', () => {
  menuScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  startGame();
});

function startGame() {
  console.log("Game started!");
  requestAnimationFrame(gameLoop);
}

function gameLoop() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // TODO: hier animatronics, camera, jumpscares etc. tekenen

  requestAnimationFrame(gameLoop);
}