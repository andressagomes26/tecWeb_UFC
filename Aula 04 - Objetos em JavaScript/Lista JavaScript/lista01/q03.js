/*

Faça um programa que leia os dados de 10 alunos (Nome, matricula, Media Final),
armazenando em um vetor. Uma vez lidos os dados, divida estes dados em 2 novos
vetores, o vetor dos aprovados e o vetor dos reprovados, considerando a média
mínima para a aprovação como sendo 5.0. Exibir na tela os dados do vetor de
aprovados, seguido dos dados do vetor de reprovados.

 */


class Alunos2 {
    constructor(dadosAlunos1, dadosAlunos2, dadosAlunos3, dadosAlunos4, dadosAlunos5, 
                dadosAlunos6, dadosAlunos7, dadosAlunos8, dadosAlunos9,dadosAlunos10){

        this.dadosAlunos1 = dadosAlunos1; this.dadosAlunos2 = dadosAlunos2;
        this.dadosAlunos3 = dadosAlunos3; this.dadosAlunos4 = dadosAlunos4;
        this.dadosAlunos5 = dadosAlunos5; this.dadosAlunos6 = dadosAlunos6;
        this.dadosAlunos7 = dadosAlunos7; this.dadosAlunos8 = dadosAlunos8;
        this.dadosAlunos9 = dadosAlunos9; this.dadosAlunos10 = dadosAlunos10;

        this.arrayAprovados = []
        this.arrayReprovados = []

        this.arrayAlunos = [
            [dadosAlunos1.nome, dadosAlunos1.matricula, dadosAlunos1.nota],
            [dadosAlunos2.nome, dadosAlunos2.matricula, dadosAlunos2.nota],
            [dadosAlunos3.nome, dadosAlunos3.matricula, dadosAlunos3.nota],
            [dadosAlunos4.nome, dadosAlunos4.matricula, dadosAlunos4.nota],
            [dadosAlunos5.nome, dadosAlunos5.matricula, dadosAlunos5.nota],
            [dadosAlunos6.nome, dadosAlunos6.matricula, dadosAlunos6.nota],
            [dadosAlunos7.nome, dadosAlunos7.matricula, dadosAlunos7.nota],
            [dadosAlunos8.nome, dadosAlunos8.matricula, dadosAlunos8.nota],
            [dadosAlunos9.nome, dadosAlunos9.matricula, dadosAlunos9.nota],
            [dadosAlunos10.nome, dadosAlunos10.matricula, dadosAlunos10.nota]
        ]
    }

    get defineSituacao(){
        for(let aluno of this.arrayAlunos){
            if(aluno[2] >= 5) { this.arrayAprovados.push(aluno) }
            else{ this.arrayReprovados.push(aluno) }
        }
        console.log(`Aprovados: ${this.arrayAprovados.join(' || ')} 
        Reprovados: ${this.arrayReprovados.join(' || ')}`)
    }        
}
new Alunos2( 
    {nome: 'Aluno1', matricula: 1, nota: 10},
    {nome: 'Aluno2', matricula: 2, nota: 8},
    {nome: 'Aluno3', matricula: 3, nota: 5},
    {nome: 'Aluno4', matricula: 4, nota: 1},
    {nome: 'Aluno5', matricula: 5, nota: 6},
    {nome: 'Aluno6', matricula: 6, nota: 9},
    {nome: 'Aluno7', matricula: 7, nota: 4},
    {nome: 'Aluno8', matricula: 8, nota: 3},
    {nome: 'Aluno9', matricula: 9, nota: 10},
    {nome: 'Aluno10', matricula: 010, nota: 7}
).defineSituacao


