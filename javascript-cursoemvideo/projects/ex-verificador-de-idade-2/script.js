
function verificar() {
    var gender = document.getElementsByName('gender')
    var respostas = document.getElementById('resposta')
    var imagem = document.getElementById('imagem')
    var nascimento = document.getElementById('nascimento')
    nascimento = nascimento.value
    nascimento = Number(nascimento)
    var data = new Date()
    data = data.getFullYear()
    var idade = data - nascimento

    if (nascimento < data) {
        if (gender[0].checked) {
            respostas.innerText = `Você é um homem com ${idade}`
            imagem.style.display='block'
            if (idade > 0 && idade <= 12) {
                imagem.style.backgroundImage="url('imagens/man/m-crianca.jpg')"
            } else if (idade <= 20) {
                imagem.style.backgroundImage="url('imagens/man/m-adolecente.jpg')"
            } else if (idade <= 60) {
               imagem.style.backgroundImage="url('imagens/man/m-adulto.jpg')"
            } else {
                imagem.style.backgroundImage="url('imagens/man/m-velho.jpg')"
            }

        } else if (gender[1].checked) {
            respostas.innerText = `Você é uma mulher com ${idade}`
            imagem.style.display='block'
            if (idade > 0 && idade <= 12) {
                imagem.style.backgroundImage="url('imagens/woman/w-crianca.jpg')"
            } else if (idade <= 20) {
                imagem.style.backgroundImage="url('imagens/woman/w-adolecente.jpg')"
            } else if (idade <= 60) {
                imagem.style.backgroundImage="url('imagens/woman/w-adulta.jpg')"
            } else {
                imagem.style.backgroundImage="url('imagens/woman/w-velha.jpg')"
            }
        }
    } else {
        window.alert('ERRO. Há algum dado invalido, tente novamente.')
    }
}

