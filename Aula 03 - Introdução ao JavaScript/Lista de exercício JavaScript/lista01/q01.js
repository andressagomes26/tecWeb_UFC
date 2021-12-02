/*Construa uma estrutura aluno com nome, número de matrícula e curso. Leia do
usuário informação de 5 alunos, armazene em vetor dessa estrutura e imprima os
dados na tela.*/

var prompt = require("prompt");
prompt.start();

class Aluno {
    constructor(nome, matricula, curso) {
      this.nome = nome;
      this.matricula = matricula;
      this.curso = curso;
      this.arrayAlunos = [nome, matricula, curso]
    }
}

prompt.get(["Nome1", "Matricula1", "Curso1",
            "Nome2", "Matricula2", "Curso2",
            "Nome3", "Matricula3", "Curso3",
            "Nome4", "Matricula4", "Curso4",
            "Nome5", "Matricula5", "Curso5",], (err, res) => { 

  console.log(new Aluno(res.Nome1, res.Matricula1, res.Curso1).arrayAlunos) 
  console.log(new Aluno(res.Nome2, res.Matricula2, res.Curso2).arrayAlunos)
  console.log(new Aluno(res.Nome3, res.Matricula3, res.Curso3).arrayAlunos)
  console.log(new Aluno(res.Nome4, res.Matricula4, res.Curso4).arrayAlunos)
  console.log(new Aluno(res.Nome5, res.Matricula5, res.Curso5).arrayAlunos)
})


/*
console.log(new Aluno("Andressa", 402305, 'Engenharia da Coomputação').arrayAlunos)
console.log(new Aluno("Carlos", 12345, 'Engenharia da Coomputação').arrayAlunos)
console.log(new Aluno("Stefane", 54321, 'Engenharia da Coomputação').arrayAlunos)
console.log(new Aluno("Roni", 15243, 'Engenharia da Coomputação').arrayAlunos)
console.log(new Aluno("Michel", 112233, 'Engenharia da Coomputação').arrayAlunos)
console.log(new Aluno("Fabricio", 444555, 'Engenharia da Coomputação').arrayAlunos)

*/