/*Faça um programa que gerencie o estoque de um mercado e:
a) Crie e leia um vetor de 5 produtos, com os dados: código (inteiro), nome (máximo
15 letras), preço e quantidade.
b) Leia um pedido, composto por um código de produto e a quantidade. Localize este
código no vetor e, se houver quantidade suficiente para atender ao pedido
integralmente, atualize o estoque e informe o usuário. Repita este processo até ler um
código igual a zero.
Se por algum motivo não for possível atender ao pedido, mostre uma mensagem
informando qual erro ocorreu.*/
var prompt = require("prompt");
prompt.start();
// instalar pacote para recepção de dados via terminal npm install readline-sync
var readlineSync = require('readline-sync');

class Alunos2 {
    constructor(dadosAlunos1, dadosAlunos2, dadosAlunos3, dadosAlunos4, dadosAlunos5){

        this.dadosAlunos1 = dadosAlunos1; this.dadosAlunos2 = dadosAlunos2;
        this.dadosAlunos3 = dadosAlunos3; this.dadosAlunos4 = dadosAlunos4;
        this.dadosAlunos5 = dadosAlunos5;

        this.arrayAlunos = [
            [dadosAlunos1.nome, dadosAlunos1.matricula, dadosAlunos1.nota1, dadosAlunos1.nota2, dadosAlunos1.nota3],
            [dadosAlunos2.nome, dadosAlunos2.matricula, dadosAlunos2.nota1, dadosAlunos2.nota2, dadosAlunos2.nota3],
            [dadosAlunos3.nome, dadosAlunos3.matricula, dadosAlunos3.nota1, dadosAlunos3.nota2, dadosAlunos3.nota3],
            [dadosAlunos4.nome, dadosAlunos4.matricula, dadosAlunos4.nota1, dadosAlunos4.nota2, dadosAlunos4.nota3],
            [dadosAlunos5.nome, dadosAlunos5.matricula, dadosAlunos5.nota1, dadosAlunos5.nota2, dadosAlunos5.nota3],
        ]

        this.notas1 = []
        this.nomes = [] 
        this.arrayReprovados= [],
        this.arrayAprovados = [],
        this.sit = {}
    }

    get situacao(){
        // Define o aluno com a maior nota 1:
        for(let aluno of this.arrayAlunos){
            this.notas1.push(aluno[2])
            this.nomes.push(aluno[0])
        }
        let maiorNota1 = Math.max.apply(null, this.notas1)
        let index = this.notas1.indexOf(maiorNota1);
        let alunoMaiorNota = this.nomes[index]

        // Define o aluno com a maior e a menor média:
        function definirMedia(arrayAlunos) {
            let notasAluno = [arrayAlunos[2], arrayAlunos[3], arrayAlunos[4]]
            let mediaAluno = (notasAluno.reduce((mediaAluno, i) => mediaAluno + i))/3    
            return mediaAluno  
        }

        let medias = []
        for(let i = 0; i < 5; i++){
            medias.push(definirMedia(this.arrayAlunos[i]))
        }
        
        let maiorMedia =  Math.max.apply(null, medias)
        let indexMaiorMedia = medias.indexOf(maiorMedia)
        let menorMedia =  Math.min.apply(null, medias)
        let indexMenorMedia = medias.indexOf(menorMedia)
        
        // Define a situação do aluno como Aprovado ou Reprovado
        this.sit = {
            aluno1: medias[0] >= 6 ? "Aluno 1 Aprovado": 'Aluno 1 Reprovado',
            aluno2: medias[1] >= 6 ? "Aluno 2 Aprovado": 'Aluno 2 Reprovado',
            aluno3: medias[2] >= 6 ? "Aluno 3 Aprovado": 'Aluno 3 Reprovado',
            aluno4: medias[3] >= 6 ? "Aluno 4 Aprovado": 'Aluno 4 Reprovado',
            aluno5: medias[4] >= 6 ? "Aluno 5 Aprovado": 'Aluno 5 Reprovado',
        }

        return {
            alunoMaiorNota: alunoMaiorNota,
            nomeAlunoMaiorMedia: this.nomes[indexMaiorMedia],
            nomeAlunoMenorMedia: this.nomes[indexMenorMedia],
            sitAluno1: this.sit.aluno1, sitAluno2: this.sit.aluno2,
            sitAluno3: this.sit.aluno3, sitAluno4: this.sit.aluno4,
            sitAluno5: this.sit.aluno5 
        }
    }
}

class Estoque {
    constructor(produtos, pedidos){
        this.produtos = produtos,
        this.pedidos = pedidos

        /*this.cod1 = pedidos[0][0]
        this.cod2 = pedidos[1][0]
        this.cod3 = pedidos[2][0]
        this.cod4 = pedidos[3][0]
        this.cod5 = pedidos[4][0]
        */
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

            /*if(pedido[0] == this.pedidos[0][0] || pedido[0] ==  this.pedidos[0][1]){
                    console.log(`Codigo pedido: ${pedido[0]}`)
                    //console.log(`Codigo pedido: ${this.produtos[i][1]}`)

                    //console.log(this.produtos[i][1])
                    ///this.produtos[i][3] = this.produtos[i][3] - pedido[1]
              
            }*/
        /*
        switch (pedido[0]) {
            case this.produtos[0][0]:
                console.log(this.produtos[0][0])
                break;
            case this.produtos[1][0]:
                console.log(this.produtos[1][0])
                break;
            default:
                break;
        }*/

           /* for(let i = 0; i < 2; i++){
                console.log(pedido[0])
                console.log(this.produtos[i][0])
             */
            /*if(pedido[0] == this.pedidos[0][0] || pedido[0] ==  this.pedidos[0][1]){
                    console.log(`Codigo pedido: ${pedido[0]}`)
                    //console.log(`Codigo pedido: ${this.produtos[i][1]}`)

                    //console.log(this.produtos[i][1])
                    ///this.produtos[i][3] = this.produtos[i][3] - pedido[1]
              
            }*/
        
        //console.log(this.produtos);
    }
}

let produtos = []
for(let i = 0; i < 2; i++){
    let codigProd = readlineSync.question(`codigo do produto ${i+1}: `)
    let nomeProd = readlineSync.question(`nome do produto ${i+1}: `)
    let precoProd = readlineSync.question(`preco do produto ${i+1}: `)
    let quantProd = readlineSync.question(`quantidade do produto ${i+1}: `)

    produtos[i] = [codigProd, nomeProd, precoProd, quantProd]
}

let pedidos = []
let codigoPedidoaux = 1
let index = 0
while(codigoPedidoaux != 0){
    let codigoPedido = readlineSync.question("codigo do pedido: ")
    let quantPedid = readlineSync.question("quant do produto : ")
    
    pedidos[index] = [codigoPedido, quantPedid]

    index = index + 1
    codigoPedidoaux = codigoPedido
}

console.log(new Estoque(produtos, pedidos).gerencia)

/*
let valor = 1
while(valor != 0){
    prompt.get(["codigoProd1", "nomeProd1", "precoProd1", "quantProd1",
    "codigoProd2", "nomeProd2", "precoProd2", "quantProd2",
    "codigoProd3", "nomeProd3", "precoProd3", "quantProd3",
    "codigoProd4", "nomeProd4", "precoProd4", "quantProd4",
    "codigoProd5", "nomeProd5", "precoProd5", "quantProd5",
    "codigoPedido", "quantPedido"], (err, res) => { 
 
    console.log(new Estoque(
            [
                [res.codigoProd1, res.nomeProd1, res.precoProd1, res.quantProd1],
                [res.codigoProd2, res.nomeProd2, res.precoProd2, res.quantProd2],
                [res.codigoProd3, res.nomeProd3, res.precoProd3, res.quantProd3],
                [res.codigoProd4, res.nomeProd4, res.precoProd4, res.quantProd4],
                [res.codigoProd5, res.nomeProd5, res.precoProd5, res.quantProd5]
            ],  [res.codigoPedido, res.quantPedido]
        ))
    valor = res.codigoPedido
})

}

process.exit();

 */


/*
let valor = 1
while(valor != 0){
    
    for(let i = 0; i < 5; i++){

    }
    let codigProd1 = readlineSync.question("Código produto 1: ")

    while(valor != 0){
        prompt.get(["codigoProd1", "nomeProd1", "precoProd1", "quantProd1",
        "codigoProd2", "nomeProd2", "precoProd2", "quantProd2",
        "codigoProd3", "nomeProd3", "precoProd3", "quantProd3",
        "codigoProd4", "nomeProd4", "precoProd4", "quantProd4",
        "codigoProd5", "nomeProd5", "precoProd5", "quantProd5",
        "codigoPedido", "quantPedido"], (err, res) => { 
     
        console.log(new Estoque(
                [
                    [res.codigoProd1, res.nomeProd1, res.precoProd1, res.quantProd1],
                    [res.codigoProd2, res.nomeProd2, res.precoProd2, res.quantProd2],
                    [res.codigoProd3, res.nomeProd3, res.precoProd3, res.quantProd3],
                    [res.codigoProd4, res.nomeProd4, res.precoProd4, res.quantProd4],
                    [res.codigoProd5, res.nomeProd5, res.precoProd5, res.quantProd5]
                ],  [res.codigoPedido, res.quantPedido]
            ))
        valor = res.codigoPedido
    })*/