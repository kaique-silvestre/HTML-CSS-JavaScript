
var array = []
var Global_MaiorValor = []
var Global_MenorValor = []

function adicionar() {
    var numtxt = document.getElementById('numtxt')
    var num = Number(numtxt.value)
    
    if (num.valueOf(num) == 0 || num > 100 || num < 1 || array.indexOf(num) != -1 ) {
        
        alert('ERRO')

    } else {

        var select = document.getElementById('select')
        var option = document.createElement('option')

        array.push(num)
        
        option.text = `Valor ${num} adicionado` 
        select.appendChild(option)

        

    }
}


function exibir(){
    var p = document.getElementById('p')
    if (array.length == 0) {
        p.innerText = 'O array está vazio'
    } else {
        p.innerHTML = `<p>Array: ${array}</p><p>Quantidade de elementos: ${array.length}</p>`
    }
    
}

function pop() {
    array = []
    var select = document.getElementById('select')
    if (array.length == 0) {
        select.innerText = ``
        p.innerText = 'O array está vazio'
    }
}
