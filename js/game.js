class Game {
    constructor(contexto) {
        this.contexto = contexto
        this.jugador = new Cuadrado(this.contexto, 200, 10, 30, 30, 'blue')
        this.enemigos = [
            new Cuadrado(this.contexto, 100, 100, 30, 30, 'red'),
            new Cuadrado(this.contexto, 250, 125, 30, 30, 'purple'),
            new Cuadrado(this.contexto, 300, 300, 30, 30, 'green'),
        ]
    }
    start() {
        this.intervalId = setInterval(() => {
            this.clear()
            this.dibujar()
            this.mover()
          }, 1000 / 900)
    }
    clear() {
        this.contexto.clearRect (
          0,
          0,
          this.contexto.canvas.width,
          this.contexto.canvas.height
        )
    }

    mover() {
        this.jugador.mover()
        this.enemigos.forEach((enemigo) => enemigo.mover())
    }
    dibujar() {
        this.enemigos.forEach(enemigo => {enemigo.dibujar()})
        this.jugador.dibujar()
    }
   
}