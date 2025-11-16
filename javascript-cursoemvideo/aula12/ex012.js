var tempo = new Date()
var horas = tempo.getHours()
var minutos = tempo.getMinutes()
console.log(`Agora são ${horas} horas e ${minutos} minutos`)
if (horas <  18) {
    console.log('Boa tarde')
} else if (horas < 12) {
    console.log('Bom dia')
} else {
    console.log('Boa tarde')
}