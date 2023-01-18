// Estruturas de Controle

/* Um programa é executado de cima para baixo
A estrutura de controle consegue alterar esse
fluxo de informação 


 if() => se algo ocorrer {
    [bloco]
} else => caso contrário {
    [bloco]
}
*/

let velocidade = 79

if (velocidade >= 80) {
    console.log('Multado!')
} else {
    console.log('Não foi multado!')
}

/* else if
Blocos de condição dentro de condições.
*/

// Exemplo 01
let a = 0 
let b = 3

if(a + b == 3) {
    console.log('O resultado foi 3')
} else if(a == 4) {
    console.log('O valor de a é 4')
} else if (b == 3) {
    console.log('O valor de b é 3')
} else {
    console.log('Nenhuma das condições foi atendida.')
}

// Exemplo 02

let nome = 'Matheus'

if (nome != undefined && nome == 'Joaquim') {
    console.log('Nome está definido.')
} else if (nome == 'Matheus' && nome.length > 8) {
    console.log('O nome é Matheus')
} else {
    console.log('Não é Matheus')
}