var numbox = document.getElementById('numbox')
var select = document.getElementById('select')
var res = document.getElementById('res')
var soma = 0
var MaiorValor = null
var MenorValor = null
var lista = []


function add() {
    var num = Number(numbox.value)
    option = document.createElement('option')

    res.innerText = ''

    if(isvalid(num) && isduplicated(lista, num)) {
        soma += num
        if(lista.length == 0) {
            MaiorValor = num
            MenorValor = num
        } else if(lista.length > 0) {
            if(MaiorValor < num) {
                MaiorValor = num
            }
            if(MenorValor > num) {
                MenorValor = num
            }
        }
        lista.push(num)
        option.text = `Valor ${num} foi adicionado`
        select.appendChild(option)
    } else {
        alert('ERRO. O valor inserido é inválido')
    }

    
}


function exibir() {
    if(lista.valueOf(lista) != 0) {
        res.innerHTML = `<p>A lista é: ${lista}</p><p>A quantidade de Elementos na lista é: ${lista.length}</p><p>A Soma de todos os valores é: ${soma}</p><p>A média de valores é: ${soma/lista.length}</p><p>O maior valor é: ${MaiorValor}</p><p>O Menor Valor é: ${MenorValor}</p>`
    } else {
        res.innerText = 'A lista está vazia'
    }
}

function pop() {
    lista = []
    soma = 0
    MaiorValor = null
    MenorValor = null
    select.innerText = ''
    res.innerText = 'A lista está vazia'

}


function isduplicated(lista, num) {
    if(lista.indexOf(num) == -1) {
        return true 
    } else {
        return false 
    }
}

function isvalid(num) {
    if(num > 0 && num <= 100) {
        return true 
    } else {
        return false
    }
} 
