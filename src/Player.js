class Player {

  constructor(){
    this.coords = {
      x: 25,
      y: canvas.height - 80,
      width: 40,
      height: 80
    }
    this.dy = 0
  }

  get groundHeight(){
    return canvas.height - this.coords.height
  }

  jump(){
    this.dy = 30
  }

  update(){
    if (this.coords.y < this.groundHeight){
      this.dy -= 1
    }
    if (this.coords.y > this.groundHeight){
      this.dy = 0
      this.coords.y = this.groundHeight
    }
    this.coords.y -= this.dy
  }

  render(){
    const { x, y, width, height } = this.coords
    ctx.fillStyle = "red"
    ctx.fillRect(x, y, width, height)
  }


}
