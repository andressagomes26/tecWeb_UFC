var prompt = require("prompt");
prompt.start();

/*Crie uma estrutura representando os alunos de um determinado curso. A estrutura
deve conter a matrícula do aluno, nome, nota da primeira prova, nota da segunda
prova e nota da terceira prova.
a) Permita ao usuário entrar com os dados de 5 alunos.
b) Encontre o aluno com maior nota da primeira prova informe o nome do aluno.
c) Encontre o aluno com maior média geral informe o nome do aluno.
d) Encontre o aluno com menor média geral informe o nome do aluno.
e) Para cada aluno diga se ele foi aprovado ou reprovado, considerando o valor 6 para
aprovação.*/


class Alunos {
    constructor(nome, matricula, nota1, nota2, nota3) {
      this.nome = nome;
      this.matricula = matricula;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.nota3 = nota3;

      this.arrayAlunos = [nome, matricula, curso]
    }
}
/*
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
*/
var meuArray= [0,12,13,2,1273,28,1];
var maior = Math.max.apply(null, meuArray );
console.log(maior)