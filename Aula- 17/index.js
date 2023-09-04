//=========================
//=======EXERCICIO 1=======
//=========================

// let continuar = true

// let numero
// let numeros = []

// let soma = 0

// while (continuar) {
//     numero = Number(prompt("Digite um número para somar ou 0 para sair"))


//     if (numero == 0){
//         console.log(numeros)
//         console.log(soma)

//         continuar = false
//     }
//     else {
//         numeros.push(numero)

//         soma = soma + numero
//     }
// }


//=========================
//=======EXERCICIO 2=======
//=========================

// let numeros = [11, 15, 18, 14, 17, 13]

// function maiorNumero(numeros) {
//     let numeroMaior = 0

//     for(let i = 0; i < numeros.length;i++) {
//         if (numeros[i] > numeroMaior){
//             numeroMaior = numeros[i]
//         }
//     }

//     return numeroMaior
// }

// console.log(maiorNumero(numeros))

//=========================
//=======EXERCICIO 3=======
//=========================

let listaDePalavras = ["oi", "sumido", "tudo", "bem?", "saudades"]

function imprimirFrase(listaDePalavras){
    let frase = ""

    for(let palavra of listaDePalavras){
        frase = frase + palavra + " "
    }

    console.log(frase)
}

imprimirFrase(listaDePalavras)