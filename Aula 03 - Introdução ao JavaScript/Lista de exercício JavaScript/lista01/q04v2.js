/*Faça um programa que gerencie o estoque de um mercado e:
a) Crie e leia um vetor de 5 produtos, com os dados: código (inteiro), nome (máximo
15 letras), preço e quantidade.
b) Leia um pedido, composto por um código de produto e a quantidade. Localize este
código no vetor e, se houver quantidade suficiente para atender ao pedido
integralmente, atualize o estoque e informe o usuário. Repita este processo até ler um
código igual a zero.
Se por algum motivo não for possível atender ao pedido, mostre uma mensagem
informando qual erro ocorreu.*/

var readlineSync = require('readline-sync');
let produtos = []
let pedidos = []
let codigoPedidoaux = 1
let index = 0

class Estoque {
    constructor(produtos, pedidos){
        this.produtos = produtos,
        this.pedidos = pedidos
    }

    get gerencia(){
       for(let pedido of this.pedidos){
            for(let i = 0; i < 2; i++){
                if(pedido[0] == this.produtos[i][0]){
                    if(this.produtos[i][3] > pedido[1]){
                        this.produtos[i][3] = this.produtos[i][3] - pedido[1]
                    } else {
                       console.log(`A quantidade do produto ${pedido[0]} está indiponível!`) 
                    }  
                }
            }
        }
            
        console.log(this.produtos) 
    }
}


for(let i = 0; i < 2; i++){
    let codigProd = readlineSync.question(`codigo do produto ${i+1}: `)
    let nomeProd = readlineSync.question(`nome do produto ${i+1}: `)
    let precoProd =  readlineSync.question(`preco do produto ${i+1}: `)
    let quantProd =  readlineSync.question(`quantidade do produto ${i+1}: `)

    produtos[i] = [codigProd, nomeProd, precoProd, quantProd]

}


while(codigoPedidoaux != 0){
    let codigoPedido = Number(readlineSync.question("codigo do pedido: "))
    let quantPedid = Number(readlineSync.question("quant do produto : "))
    
    pedidos[index] = [codigoPedido, quantPedid]
    index = index + 1
    codigoPedidoaux = codigoPedido
}

if(produtos.length != 0 && pedidos.length != 0){
    console.log(new Estoque(produtos, pedidos).gerencia)

} 
