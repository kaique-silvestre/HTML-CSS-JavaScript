var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var diaHoje = data.getDate()
var mesHoje = data.getMonth()
var anoHoje = data.getFullYear()

var horasAgora = document.getElementById('horasAgora')
var saudacoes = document.getElementById('saudacoes')
var body = document.getElementById('body')
var imagem = document.getElementById('imagem')
var dia = document.getElementById('dia')

horas = 18

body.addEventListener('load', saudar())


horasAgora.innerText = `Agora são ${horas} horas e ${minutos} minutos`
dia.innerText = `Hoje é ${diaHoje}/${mesHoje}/${anoHoje}`

function saudar() {
    if (horas >= 0 && horas <= 5 ) {
        saudacoes.innerText = 'Boa noite'
        body.style.backgroundColor ='purple'
        imagem.style.backgroundImage="url('imagens/noite.jpg')"
    } else if (horas >= 6  && horas <= 11) {
        saudacoes.innerText = 'Bom dia'
        body.style.backgroundColor = 'bisque'
        imagem.style.backgroundImage="url('imagens/manhã.jpg')"
    } else if (horas >= 12 && horas <= 17) {
        saudacoes.innerText = 'Boa tarde'
        body.style.backgroundColor = 'orange'
        imagem.style.backgroundImage = "url('imagens/tarde.jpg')"
    } else if(horas >= 18 && horas <= 23){
        saudacoes.innerText = 'Boa noite'
        body.style.backgroundColor = 'purple'
        imagem.style.backgroundImage = "url('imagens/noite.jpg')"
    }
}

