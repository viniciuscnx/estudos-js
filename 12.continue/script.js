// Comando continue
// Pula a execução de um loop.
 
//Exemplo 01
/*Sempre que tiver números pares, ele pula para
número ímpar seguinte */
let x = 0

while(x < 11) {
    x = x + 1
    if(x % 2 == 0) {
        continue
    }
    console.log(x)
    x = x + 1
}

// Exemplo 02 

for(let i = 10; i > 0; i = i - 1) {
    if(i % 2 == 0) {
        console.log('Caiu no continue.')
        continue
    }
    console.log(i)
}

// Exemplo 03

for(let num = 0; num < 10; num += 1) {
    console.log(`O número é ${num}`)
}

// INCREMENTAÇÃO
// Exemplo 01

let numero = 5

while(numero < 50) {
    console.log(numero)
    numero += 10
}

for(let c = 0; c < 10; c++) {
    console.log(`O valor de c é ${c}`)
}