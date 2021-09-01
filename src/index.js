const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")
ctx.textAlign = "center"

const game = {
  paused: false,
  player: new Player(),
  frame: 0,
}

game.nextFrame = getNextFrame()

document.body.addEventListener("keydown", handleKeyDown)
const obstacle = new Obstacle()

function loop(){
  const { paused, player } = game
  if (!paused){
    game.frame ++
    if (game.frame >= game.nextFrame){
      new Obstacle()
      game.nextFrame = getNextFrame()
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    Obstacle.update()
    player.render()
    Obstacle.render()
    Obstacle.clearOld()
    Obstacle.checkCollisions()
  }
  requestAnimationFrame(loop)
}
loop()

function handleKeyDown(e){
  e.keyCode == 13 && pauseGame()
  e.keyCode == 32 && game.player.jump()
}

function pauseGame(){
  game.paused = !game.paused
  if (game.paused){
    ctx.fillStyle = "white"
    ctx.font = "bold 24px 'Press Start 2P'"
    ctx.fillText("Paused", canvas.width/2, canvas.height/2)
  }
}

function getNextFrame(){
  return Math.floor(Math.random() * 40) + 80 + game.frame
}

function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}

function lose(){
  game.paused = true
  ctx.fillStyle = "red"
  ctx.font = "bold 24px 'Press Start 2P'"
  ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2)
  Obstacle.all = []
}
