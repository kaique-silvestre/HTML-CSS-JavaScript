/* 
    0 = Domingo
    1 = Segunda 
    2 = Terça
    3 = Quarta 
    4 = Quinta 
    5 = Sexta
    6 = Sabado
*/

var diaSemana = new Date().getDay()

// Forçar dia da semana 
// diaSemana = 0 

switch(diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('Não existe dia como tal, em nosso calendario, não sei que tipo de calendario que foi adotado no seu futuro, mas não é o meu. O tempo é relativo porque nos arbitriamente definimos como ele passa')
}