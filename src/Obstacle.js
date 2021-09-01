class Obstacle {

  static all = []

  constructor(){
    this.coords = {
      x: canvas.width,
      y: canvas.height - 40,
      width: 40,
      height: 40
    }
    this.dx = 5
    this.constructor.all.push(this)
  }

  checkCollision = () => intersect(game.player.coords, this.coords) && lose()

  update(){
    this.coords.x -= this.dx
  }

  render(){
    const { x, y, width, height } = this.coords
    ctx.fillStyle = "yellow"
    ctx.fillRect(x, y, width, height)
  }

  static update(){
    this.all.forEach(obstacle => obstacle.update())
  }

  static render(){
    this.all.forEach(obstacle => obstacle.render())
  }

  static clearOld(){
    this.all = this.all.filter(obstacle => obstacle.coords.x + obstacle.coords.width > 0)
  }

  static checkCollisions(){
    this.all.forEach(obstacle => obstacle.checkCollision())
  }

}
