// Exercício 11

let idade = 18
const cnh = false

if (idade >= 18 && cnh == false) {
    console.log('Você tem idade mas não tem CNH.')
} else if (idade >= 18 && cnh == true) {
    console.log('Tá liberado irmão. Pega o Celta e voa.')
} else {
    console.log('Não pode dirigir')
}