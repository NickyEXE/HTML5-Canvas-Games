const canvas = document.getElementById("game")
const context = canvas.getContext("2d")
let paused = false
let frame = 0
let nextObstacleFrame = getNextObstacleFrame()
let score = 0

const player = new Player()

function loop(){
  if (!paused){
    frame ++
    if (frame >= nextObstacleFrame){
      new Obstacle()
      nextObstacleFrame = getNextObstacleFrame()
    }
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "white"
    context.textAlign = "center-top"
    context.font= "bold 20px 'Press Start 2P'";
    context.fillText(score, canvas.width/2, canvas.height/2)
    player.update()
    Obstacle.updateAll()
    player.render()
    Obstacle.renderAll()
    Obstacle.checkCollisions()
  }
  window.requestAnimationFrame(loop)
}

function pauseGame(){
  paused = !paused
  context.fillStyle = "white"
  context.textAlign = "center"
  context.font= "bold 48px 'Press Start 2P'";
  context.fillText("Paused", canvas.width/2, canvas.height/2)
}

function handleKeyDown(e){
  e.keyCode === 13 && pauseGame()
  e.keyCode === 32 && player.jump()
}

function getNextObstacleFrame(){
  return Math.floor(Math.random() * 80) + 40 + frame
}

function intersect(r1, r2) {
  return !(r2.x > r1.x + r1.width ||
    r2.x + r2.width < r1.x ||
    r2.y > r1.y + r1.height ||
    r2.y + r2.height < r1.y)
}

function loseGame(){
  paused = true
  context.fillStyle = "white"
  context.textAlign = "center"
  context.font= "bold 48px 'Press Start 2P'";
  context.fillText("Game Over", canvas.width/2, canvas.height/2)
  Obstacle.all = []
  score = 0
}

document.addEventListener("keydown", handleKeyDown)

loop()
