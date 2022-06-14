class Cuadrado {
    constructor (contexto, x, y, ancho, alto, color) {
        this.contexto = contexto
        this.x = x
        this.y = y
        this.ancho = ancho
        this.alto = alto
        this.color = color

        this.vx = 1;
        this.vy = 0.8;
    }

    mover() {
        this.y += this.vy;
        this.x += this.vx;

        if (this.x + this.ancho >= this.contexto.canvas.width) {
            this.vx *= -1
          }
        if (this.y <= 0) {
            this.vy *= -1
        }
        if (this.y + this.alto >= this.contexto.canvas.height) {
            this.y = this.contexto.canvas.height - this.alto
            this.vy *= -1
        }
        if (this.x <= 0) {
            this.vx *= -1
        }
    }

    dibujar() {
        contexto.beginPath();
        contexto.fillStyle = this.color
        contexto.fillRect(this.x, this.y, this.ancho, this.alto)
        contexto.closePath();
    }
}