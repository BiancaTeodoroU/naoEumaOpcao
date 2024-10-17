var bnt2 = document.querySelector('.bnt2')
var bloco1 = document.querySelector('.maior')
var bloco2 = document.querySelector('.maior2')
var main = document.querySelector('main')

function GerarNumero() {
  return Math.floor(Math.random() * 5) * 20
}

function Nao() {
    var n1 = GerarNumero()
    var n2 = GerarNumero()

    bnt2.style.position = 'absolute'
    bnt2.style.top = `${n1}%`
    bnt2.style.left = `${n2}%`
}

function Sim() {
    bloco1.style.display = 'none'
    bloco2.style.display = 'block'
    main.style.background = 'white'
    main.style.border = '5px solid black'
}

// Adicionando o evento mouseover para mover o botão quando o mouse passar sobre ele
bnt2.addEventListener('mouseover', Nao)
