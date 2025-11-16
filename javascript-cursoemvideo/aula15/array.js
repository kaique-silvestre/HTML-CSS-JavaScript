let num = [5, 4, 3, 2]
console.log(num)
num[4] = 1
console.log(num)
num.push(0)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)

for(x=0; x<=num.length; x++) {
    console.log(num[x])
}

for( v in num ) {
    console.log(num[v])
}

// A função procura o valor e se encontrado retorna o indice da chave 
//Em python a mesma função é apenas ".index()"