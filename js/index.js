const canvas = document.getElementById('canvas')
const contexto = canvas.getContext('2d');
const game = new Game(contexto)
const startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', () => {
    console.log('boton start pulsado')
    game.start()
})