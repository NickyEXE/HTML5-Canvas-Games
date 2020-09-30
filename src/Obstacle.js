class Obstacle {

  static all = []

  constructor(){
    this.coords = {
      x: canvas.width,
      y: canvas.height - 60,
      height: 60,
      width: 30
    }
    this.constructor.all.push(this)
  }

  checkCollision(){
    if ( intersect(this.coords, player.coords) ){
      loseGame()
    }
  }

  update(){
    this.coords.x -= 5
    if (this.coords.x - this.coords.width < 0){
      score ++
      this.remove()
    }
  }

  render(){
    context.fillStyle = "yellow"
    context.fillRect( this.coords.x, this.coords.y, this.coords.width, this.coords.height )
  }

  remove(){
    const index = this.constructor.all.findIndex(item => item === this)
    this.constructor.all.splice(index, 1)
  }

  static updateAll(){
    this.all.forEach(obstacle => obstacle.update())
  }

  static renderAll(){
    this.all.forEach(obstacle => obstacle.render())
  }

  static checkCollisions(){
    this.all.forEach(obstacle => obstacle.checkCollision())
  }

}
