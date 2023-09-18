const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500;
canvas.heigth = 700;
const explosions = [];
let canvasPosition = canvas.getBoundingClientRect();

class Explosion {
    constructor(x, y){
        this.spriteWidth = 200
        this.spriteHeight = 179
        this.width = this.spriteWidth * 0.7;
        this.witdh = this.spriteHeight * 0.7;
        this.x = x;
        this.y = y
        this.image = new Image();
        this.image.src = 'boom.png'
        this.frame = 0
        this.timer = 0
        this.angle = Math.random() * 6.2
        this.sound = new Audio()
        this.sound.src = 'boom.wav'; 
    }
    update(){
        if (this.frame === 0) this.sound.play()
        this.timer++
    }
}