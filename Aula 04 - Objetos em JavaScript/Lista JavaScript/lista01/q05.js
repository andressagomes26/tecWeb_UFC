var readlineSync = require('readline-sync');

class Agenda {
    constructor(nome, email, endereco, telefone, aniversario, observacoes){
        this.nome = nome,
        this.email = email,
        this.endereco = endereco,
        this.telefone = telefone,
        this.aniversario = aniversario;
        this.observacoes = observacoes;

    }
}

/* ================= DADOS PARA A LISTA TELEFÔNICA ================= */
let dadosPessoas = {
    nome: ['Andressa', 'Andressa 2', 'Brenda', 'Camila',],
    email: ['a@gmail.com', 'b@hotmail.com', 'c@gmail.com', 'd@hotmail.com'],
    endereco: {
        rua: ['Rua A', 'Rua B', 'Rua C', 'Rua D'], 
        numero: [100, 101, 102, 104], 
        complemento: ['casa','ap', 'casa2', 'ap2'], 
        bairro: ['centro', 'estacao', 'acude', 'cristo'], 
        cep: [62230000, 62320000, 62420000, 62520000],
        cidade: ['solbral', 'ips', 'fort', 'por'], 
        estado: ['ceara', 'ce', 'CE','cear'],
        pais: ['brasil', 'br', 'bra', 'BR']
    },
    telefone: {
        ddd: [88, 87, 86, 85],
        num: [111111111, 222222222, 333333333, 444444444]
    },
    aniversario: {
        dia: [26, 16, 1, 26],
        mes: ['outubro', 'agosto', 'dezembro', 'outubro'],
        ano: [98, 96, 95, 94],
    },
    observacoes: ['obs1', 'obs2', 'obs3', 'obs4']
}

let exibirDados = {
    nome: [],
    email: [],
    endereco: {
        rua: [], 
        numero: [], 
        complemento: [], 
        bairro: [], 
        cep: [],
        cidade: [], 
        estado: [],
        pais: []
    },
    telefone: {
        ddd: [],
        num: []
    },
    aniversario: {
        dia: [],
        mes: [],
        ano: []
    },
    observacoes: []
}

/* ============================ CHAMADA ============================ */
let chamada = new Agenda(dadosPessoas.nome, dadosPessoas.email,
    dadosPessoas.endereco, dadosPessoas.telefone,
    dadosPessoas.aniversario, dadosPessoas.observacoes)


/* ========================== BUSCAR NOMES ========================= */
function buscarNome(chamada){
    let nomeBusca = readlineSync.question(`Qual nome desejado?  `).toLowerCase()

    for(let i = 0; i < chamada.nome.length; i++){
        //if(chamada.nome[i].toLowerCase().indexOf(nomeBusca) != -1){
        if(chamada.nome[i].toLowerCase().includes(nomeBusca)) mostrarDados(i)
    }
    console.log(exibirDados)
}

/* ===================== BUSCAR MÊS ANIVERSARIO ==================== */
function buscarMes(chamada){
    let mesBusca = readlineSync.question(`Qual mes desejado?  `).toLowerCase()

    for(let i = 0; i < chamada.aniversario.mes.length; i++){
        if(chamada.aniversario.mes[i].toLowerCase().includes(mesBusca)) mostrarDados(i)
    }
    console.log(exibirDados)
} 

/* ================== BUSCAR DIA E MÊS ANIVERSARIO ================== */
function buscarDiaMes(chamada){
    let diaBusca = Number(readlineSync.question(`Qual dia desejado?  `))
    let mesBusca = readlineSync.question(`Qual mes desejado?  `).toLowerCase()

    for(let i = 0; i < chamada.aniversario.mes.length; i++){
       if(chamada.aniversario.mes[i].toLowerCase().includes(mesBusca) && chamada.aniversario.dia[i] === diaBusca) {
           mostrarDados(i)
        }
    }
    console.log(exibirDados)
} 

/* ================== INSERE PESSOA NA ORDEM ALFAB ================== */
function inserirPessoa(chamada){
    console.log('Inserindo nova pessoa: ')
    
    let nomeNew = readlineSync.question(`Escolha um nome:  `).toLowerCase()

    for(let i = 0; i < chamada.nome.length; i++){
        let varAux = chamada.nome[i].toLowerCase() < nomeNew ? 1 : 0
        if(varAux == 0){
            acrescentarDados(dadosPessoas, i, nomeNew)
            break
        } else{
            acrescentarDados(dadosPessoas, chamada.nome.length, nomeNew)
            break
       }
    } 
    console.log(dadosPessoas)
    
    /*
    let arr1 = ['Andressa', 'Brenda', 'Dani']
    let arr2 = 'Carlos'
    for(let i = 0; i < 3; i++){
        console.log(arr1[i] < arr2 ? 'ordem ok' : 'ordem errada')
    }
    arr1.splice(2, 0, "drum")
    console.log(arr1)
    *///acrescentarDados(dadosPessoas)
    //console.log(dadosPessoas)
} 

/* ==================== REMOVE PESSOA ESCOLHIDA ===================== */
function removerPessoa(chamada){
    console.log('Removendo uma pessoa: ')
    
    let nomeNew = readlineSync.question(`Escolha um nome:  `).toLowerCase()

    for(let i = 0; i < chamada.nome.length; i++){
        let varAuxRemove = chamada.nome[i].toLowerCase() < nomeNew ? 1 : 0
        if(varAuxRemove == 0){
            removerDados(dadosPessoas, i+1)
            break
        } else{ 
            removerDados(dadosPessoas, chamada.nome.length - 1)
            break
       }
    } 
    console.log(dadosPessoas)
    
    /*
    let arr1 = ['Andressa', 'Brenda', 'Dani']
    let arr2 = 'Carlos'
    for(let i = 0; i < 3; i++){
        console.log(arr1[i] < arr2 ? 'ordem ok' : 'ordem errada')
    }
    arr1.splice(2, 0, "drum")
    console.log(arr1)
    *///acrescentarDados(dadosPessoas)
    //console.log(dadosPessoas)
} 

/* ======================== IMPRIMIR AGENDA ======================== */
function imprimirAgeda(chamada){
    console.log(`O que deseja imprimir? :
            [1] - Nome: 
            [2] - Telefone e e-mail: 
            [3] - Todos os dados: 
        `)
     
    let optionImprimir = readlineSync.question(`Escolha um valor:  `)

    switch(optionImprimir){
        case '1':
            console.log(chamada.nome)
            break
        case '2':
            console.log(chamada.email)
            console.log(chamada.telefone)
        case '3':
            console.log(chamada)
    }
}

/* ================= MENU ================= */
console.log('*=*=*=* AGENDA TELOFÔNICA *=*=*=*')
console.log(`Menu:
            [1] - Buscar nomes: 
            [2] - Buscar mês de aniversário: 
            [3] - Buscar dia e mês de aniversário: 
            [4] - Inserir pessoa: 
            [5] - Remover pessoa: 
            [6] - Imprimir agenda: 
        `)

let option = readlineSync.question(`Escolha um valor:  `)
menu(option)

function menu(option) {
    switch (option){
        case '1':
            buscarNome(chamada)
            break
        case '2':    
            buscarMes(chamada)
            break
        case '3':    
            buscarDiaMes(chamada)
            break
        case '4':    
            inserirPessoa(chamada)
            break
        case '5':    
            removerPessoa(chamada)
            break
        case '6':    
            imprimirAgeda(chamada)
            break
        default:
            console.log('Escolha uma opção válida!')
            break
    }


}

function mostrarDados(i){
        exibirDados.nome.push(chamada.nome[i])
        exibirDados.email.push(chamada.email[i])

        exibirDados.endereco.rua.push(chamada.endereco.rua[i])
        exibirDados.endereco.numero.push(chamada.endereco.numero[i])
        exibirDados.endereco.complemento.push(chamada.endereco.complemento[i])
        exibirDados.endereco.bairro.push(chamada.endereco.bairro[i])
        exibirDados.endereco.cep.push(chamada.endereco.cep[i])
        exibirDados.endereco.cidade.push(chamada.endereco.cidade[i])
        exibirDados.endereco.estado.push(chamada.endereco.estado[i])
        exibirDados.endereco.pais.push(chamada.endereco.pais[i])

        exibirDados.telefone.ddd.push(chamada.telefone.ddd[i])
        exibirDados.telefone.num.push(chamada.telefone.num[i])

        exibirDados.aniversario.dia.push(chamada.aniversario.dia[i])
        exibirDados.aniversario.mes.push(chamada.aniversario.mes[i])
        exibirDados.aniversario.ano.push(chamada.aniversario.ano[i])
        exibirDados.observacoes.push(chamada.observacoes[i])
}

function acrescentarDados(dados, i, nomeNew) {
    dados.nome.splice(i, 0, nomeNew)
    dados.email.splice(i, 0, readlineSync.question(`Escolha um email:  `))
    
    console.log('Para o endereço: ')
    dados.endereco.rua.splice(i, 0, readlineSync.question(`Escolha uma rua:  `))
    dados.endereco.numero.splice(i, 0, Number(readlineSync.question(`Escolha um numero:  `)))
    dados.endereco.complemento.splice(i, 0, readlineSync.question(`Escolha um complemento:  `))
    dados.endereco.bairro.splice(i, 0, readlineSync.question(`Escolha um bairro:  `))
    dados.endereco.cep.splice(i, 0, Number(readlineSync.question(`Escolha um cep:  `)))
    dados.endereco.cidade.splice(i, 0, readlineSync.question(`Escolha um cidade:  `))
    dados.endereco.estado.splice(i, 0, readlineSync.question(`Escolha um estado:  `))
    dados.endereco.pais.splice(i, 0, readlineSync.question(`Escolha um pais:  `))
 
    console.log('Para o telefone: ')
    dados.telefone.ddd.splice(i, 0, Number(readlineSync.question(`Escolha um ddd:  `)))
    dados.telefone.num.splice(i, 0, Number(readlineSync.question(`Escolha um numero:  `)))
   
    console.log('Para o aniversário: ')
    dados.aniversario.dia.splice(i, 0, Number(readlineSync.question(`Escolha um dia:  `)))
    dados.aniversario.mes.splice(i, 0, readlineSync.question(`Escolha um mes:  `))
    dados.aniversario.ano.splice(i, 0, Number(readlineSync.question(`Escolha um ano:  `)))

    console.log('Para as observações: ')
    dados.observacoes.splice(i, 0, readlineSync.question(`Escolha uma observacao:  `))
}

function removerDados(dados, i) {
    dados.nome.splice(i, 1)
    dados.email.splice(i, 1)
    dados.endereco.rua.splice(i, 1)
    dados.endereco.numero.splice(i, 1)
    dados.endereco.complemento.splice(i, 1)
    dados.endereco.bairro.splice(i, 1)
    dados.endereco.cep.splice(i, 1)
    dados.endereco.cidade.splice(i, 1)
    dados.endereco.estado.splice(i, 1)
    dados.endereco.pais.splice(i, 1)
    dados.telefone.ddd.splice(i, 1)
    dados.telefone.num.splice(i, 1)
    dados.aniversario.dia.splice(i, 1)
    dados.aniversario.mes.splice(i, 1)
    dados.aniversario.ano.splice(i, 1)
    dados.observacoes.splice(i, 1)
}