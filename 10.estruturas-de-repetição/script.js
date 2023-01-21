// Estruturas de Repetição

/* Basicamente a ideia é repetir a ação até
uma condição ser atingida. */

//Exemplo 01

let a = 1

while(a < 20) {
    console.log(a)
    a = a + 1
}

//Exemplo 02
let x = 10

while (x > 0) {
    console.log('O x é ' + x)
    x = x - 1
}


// Exemplo 03
let y = 0

while(y <= 10) {
    console.log('O y é ' + y)
    y = y + 1
}

/* do while
Semelhante ao while, mas não usado.
Método não muito utilizado. 
[o while e for (majoritariamente) são mais
usados!] */


/* comando 'for'
É semelhante ao while, porém mais simples de ser
utilizada */

// Exemplo 01

for(let i = 0; i < 100; i = i + 3) {
    console.log(`A soma de i com 2 é: ${i + 2}`)
}

// Exemplo 02 
for(let h = 3; h < 50; h = h + 1) {
    console.log(`Contador de 3 a 50: ${h}`)
}