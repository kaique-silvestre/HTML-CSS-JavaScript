function gerar() {
    var num = document.getElementById('num')
    n = Number(num.value)
    var res = document.getElementById('res')

    res.innerText =''

    var c = 1
    if(n.valueOf(n.lenght) == 0) {
        window.alert('Erro')
    } else {
        for(var i = 1; c <= 10; i++) {
            res.innerText += `${n} x ${i} = ${n*i}\n`
            c++
        }
    }
    
}