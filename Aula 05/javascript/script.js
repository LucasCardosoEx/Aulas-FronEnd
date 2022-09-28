// // + Soma
// // - Subtração
// // * Multiplicação
// // / Divisão
// // % Resto (divisões não exatas)

// document.getElementById("soma").onclick = function clique() {
//     var tipoOperacao = document.getElementById("tipoOperacao").value

//     var numero1 = document.getElementById("input1").value
//     var numero2 = document.getElementById("input2").value

//     if (numero == 1) {
//         console.log('Dois iguais')
//     }

//     if (numero == '1') {
//         console.log('Tres iguais')
//     }

//     //     if (numero <= 0 & numero2 <= 0) {
//     //         console.log('Adicione um numero valido')
//     //     }
//     //     else if (tipoOperacao == 'somar') {
//     //         soma(numero1, numero2)
//     //     } else if (tipoOperacao == 'subtrair') {
//     //         subtrair(numero1, numero2)
//     //     } else if (tipoOperacao == 'multiplicar') {
//     //         multiplicar(numero1, numero2)
//     //     } else if (tipoOperacao == 'dividir') {
//     //         dividir(numero1, numero2)
//     //     } else {
//     //         console.log('Essa operação não existe')
//     //     }

//     // }


//     function soma(n1, n2) {
//         console.log(Number(n1) + Number(n2))
//     }
//     function subtrair(n1, n2) {
//         console.log(Number(n1) - Number(n2))
//     }
//     function multiplicar(n1, n2) {
//         console.log(Number(n1) * Number(n2))
//     }
//     function dividir(n1, n2) {
//         console.log(Number(n1) / Number(n2))
//     }
// }


var botao = document.getElementById("botao").value

botao.onclick = clique;

function clique() {
    var texto = document.getElementById("texto").value

    // console.log(typeof texto)
    // console.log(typeof Number(texto))
    // console.log(parseInt(texto))
    // console.log(parseFloat(texto))
    //toFixed pra pegar casas decimais
    // console.log(Number(texto).toFixed(2))

    // console.log(texto.replace('maça','uva'))
    console.log(texto.lenght)

    var lista = [1, 2, 3]
    // console.log(lista)
    // lista.push(4)
    // lista.unshift(0)

    // lista.push([1,2,3])
    // console.log(lista)
    // consultar lista
    // console.log(lista[2])
    // console.log(lista[lista.length - 1])
    // lista.pop
    // lista.shift
    // console.log(lista)
    var pessoa = {
        nome: 'vinicius',
        sobrenome: 'schiffler',
        idade: 18,
        repositorios: [
            {
                nome: 'clone-tesla',
                descricao: 'Clonando o site da tesla'
            },
        ],
        filho: {
            nome: 'jose,',
            idade: 3
        }
    }
    console.log(pessoa.repositorios[0].nome)
}
