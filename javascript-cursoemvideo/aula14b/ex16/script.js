function gerar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    res.innerText = ''

    if(i.valueOf(i.lenght) == 0 || f.valueOf(f.lenght) == 0 || p.valueOf(p.lenght) == 0 || p < 0){
        window.alert('ERRO. Os valores inseridos não são válidos.')
    } else {
        if(i <= f) {
            for(i; i <= f; i += p) {
                res.innerText += ` ${i},`
            } 
        } else if (i > f) {
            for(i; f<=i; i -= p) {
                res.innerText += ` ${i}, `
            }
        }
        res.innerText += ' FIM'
    }    
}