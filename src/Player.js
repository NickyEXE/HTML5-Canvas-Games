console.log("hello from Player")
class Player {
  constructor(){
    this.coords = {
      x: 30,
      y: canvas.height - 80,
      height: 80,
      width: 40
    }
    this.dy = 0
    this.jumping = false
  }

  jump(){
    if (!this.jumping){
      this.jumping = true
      this.dy = 30
    }
  }

  update(){
    if (this.coords.y < canvas.height - this.coords.height){
      this.dy --
    }
    if (this.coords.y > canvas.height - this.coords.height){
      this.coords.y = canvas.height - this.coords.height
      this.dy = 0
      this.jumping = false
    }
    this.coords.y -= this.dy
  }

  render(){
    context.fillStyle = "red"
    context.fillRect( this.coords.x, this.coords.y, this.coords.width, this.coords.height )
  }

}
