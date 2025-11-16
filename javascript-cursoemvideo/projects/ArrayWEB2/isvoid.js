function isvoid(lista) {
    var contador = 0
    for(item in lista) {
        contador ++
    }
    if(contador == 0) {
        return 0
    } else {
        return 1
    }
}  

var lista = [1, 2, 3]
console.log(isvoid(lista))