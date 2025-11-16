var masculino = document.getElementById('masculino')
var feminino = document.getElementById('feminino')
var resultado = document.getElementById('resultado')
var imagem = document.getElementById('imagem')
var data = new Date().getFullYear()


function gerarM() {
    var nascimento = document.getElementById('nascimento')
    nascimento = Number(nascimento.value)
    idade =  data - nascimento
    if (nascimento >= data || idade <= 0 || nascimento == 0 ){
        alert('ERRO. data invalida')
    } else {
        resultado.style.textAlign='center'
        resultado.innerHTML=`Você é um homem com ${idade}`
        imagem.style.height='300px'
        imagem.style.width='300px'
        imagem.style.borderRadius='150px'
        imagem.style.border='1px black solid'
        imagem.style.margin='auto'
        imagem.style.backgroundSize='cover'
        if (idade >= 60) {
            imagem.style.backgroundImage="url('imagens/homens/hvelho.jpg')"
        } else if (idade >= 30) {
            imagem.style.backgroundImage="url('imagens/homens/hadulto.jpg')"
        } else if (idade >= 18 ) {
            imagem.style.backgroundImage='url(imagens/homens/hjovem.jpg)'
        } else if (idade >= 13) {
            imagem.style.backgroundImage="url('imagens/homens/hadolecente.jpg')"  
        } else {
            imagem.style.backgroundImage="url('imagens/homens/hcrianca.jpg')"
        }
     }
}     

function gerarW() {
    var nascimento = document.getElementById('nascimento')
    nascimento = Number(nascimento.value)
    idade =  data - nascimento
    if (nascimento >= data || idade <= 0 || nascimento == 0 ){
        alert('ERRO. data invalida')
    } else {
        resultado.style.textAlign='center'
        resultado.innerHTML=`Você é uma mulher com ${idade}`
        imagem.style.height='300px'
        imagem.style.width='300px'
        imagem.style.borderRadius='150px'
        imagem.style.border='1px black solid'
        imagem.style.margin='auto'
        imagem.style.backgroundSize='cover'
        if (idade >= 60) {
            imagem.style.backgroundImage="url('imagens/mulheres/mvelha.jpg')"
        } else if (idade >= 30) {
            imagem.style.backgroundImage="url('imagens/mulheres/madulta.jpg')"
        } else if (idade >= 18 ) {
            imagem.style.backgroundImage='url(imagens/mulheres/mjovem.jpg)'
        } else if (idade >= 13) {
            imagem.style.backgroundImage="url('imagens/mulheres/madolecente.jpg')"  
        } else {
            imagem.style.backgroundImage="url('imagens/mulheres/mcrianca.jpg')"
        }
     }
}  


