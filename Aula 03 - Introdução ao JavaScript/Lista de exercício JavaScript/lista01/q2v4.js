/*Crie uma estrutura representando os alunos de um determinado curso. A estrutura
deve conter a matrícula do aluno, nome, nota da primeira prova, nota da segunda
prova e nota da terceira prova.
a) Permita ao usuário entrar com os dados de 5 alunos.  Ok
b) Encontre o aluno com maior nota da primeira prova informe o nome do aluno.
c) Encontre o aluno com maior média geral informe o nome do aluno.
d) Encontre o aluno com menor média geral informe o nome do aluno.
e) Para cada aluno diga se ele foi aprovado ou reprovado, considerando o valor 6 para
aprovação.*/

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

let alunos = new Alunos2( 
    {nome: 'Aluno1', matricula: 1, nota1: 10, nota2: 10, nota3: 10},
    {nome: 'Aluno2', matricula: 2, nota1: 8, nota2: 8, nota3: 8},
    {nome: 'Aluno3', matricula: 3, nota1: 5, nota2: 5, nota3: 5},
    {nome: 'Aluno4', matricula: 4, nota1: 1, nota2: 1, nota3: 1},
    {nome: 'Aluno5', matricula: 5, nota1: 6, nota2: 6, nota3: 6}
)

console.log(`Aluno com maior nota 1: ${alunos.situacao.alunoMaiorNota}`)
console.log(`Aluno com maior média: ${alunos.situacao.nomeAlunoMaiorMedia}`)
console.log(`Aluno com menor média: ${alunos.situacao.nomeAlunoMenorMedia}`)

console.log(`${alunos.situacao.sitAluno1}`)
console.log(`${alunos.situacao.sitAluno2}`)
console.log(`${alunos.situacao.sitAluno3}`)
console.log(`${alunos.situacao.sitAluno4}`)
console.log(`${alunos.situacao.sitAluno5}`)
