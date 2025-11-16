function calcular() {
    var txtnum = document.getElementById('txtnum')
    var num = Number(txtnum.value)
    var tab = document.getElementById('tab')
    var res = document.getElementById('res')


    var cont = 1
    tab.innerText = ''
    res.style.display='block'


    


    while(cont <= 10) {
        var item = document.createElement('option')
        item.text = `${num} X ${cont} = ${num*cont}`
        tab.appendChild(item)
        cont++ 
    }
}