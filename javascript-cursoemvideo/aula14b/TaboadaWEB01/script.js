function calcular() {
    var txtnum = document.getElementById('txtnum')
    num = Number(txtnum.value)
    var tab = document.getElementById('tab')

   tab.innerHTML=''
    var c = 1
    while(c <= 10) {
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        tab.appendChild(item)
        c++
    }
}