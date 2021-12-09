/*  

Construa uma estrutura aluno com nome, número de matrícula e curso. Leia do
usuário informação de 5 alunos, armazene em vetor dessa estrutura e imprima os
dados na tela.  

*/

var readlineSync = require('readline-sync')
let nome = []; let matricula = []; let curso = [] 

/* =========================  Estrutura  ======================= */
class Aluno {
    constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
      this.alunos = [nome, matricula, curso]
    }
}

/* ====================  DEFINIR 5 ALUNOS  ==================== */
for(let i = 0; i < 5; i++){
    nome[i] = readlineSync.question(`Escolha o nome do aluno ${i+1}:  `)
    matricula[i] = readlineSync.question(`Escolha a matricula do aluno ${i+1}:  `)
    curso[i] = readlineSync.question(`Escolha o curso do aluno ${i+1}:  `)
}

/* ========================== CHAMADA ========================== */
let chamada = new Aluno(nome, matricula, curso).alunos
console.log(chamada)