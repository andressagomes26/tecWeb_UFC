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
        this.maiormedia = []
        this.menormedia = []
    }

    get maiorNota1(){
        for(let aluno of this.arrayAlunos){
            this.notas1.push(aluno[2])
            this.nomes.push(aluno[0])
        }
        let maiorNota1 = Math.max.apply(null, this.notas1)
        let index = this.notas1.indexOf(maiorNota1);

        console.log(this.nomes[index])
    }

    get maiorMedia(){
        function definirMedia(arrayAlunos) {
            let notasAluno = [arrayAlunos[2], arrayAlunos[3], arrayAlunos[4]]
            let mediaAluno = (notasAluno.reduce((mediaAluno, i) => mediaAluno + i))/3
            
            return mediaAluno  
        }

        let medias = []

        for(let i = 0; i < 5; i++){
            medias.push(definirMedia(this.arrayAlunos[i]))
        }
        
        let maiorMedia = Math.max.apply(null, medias)
        let index = medias.indexOf(maiorMedia);
        
        for(let aluno of this.arrayAlunos){
            this.nomes.push(aluno[0])
        }

        console.log(this.nomes[index])

    }

    get menorMedia(){
        function definirMedia(arrayAlunos) {
            let notasAluno = [arrayAlunos[2], arrayAlunos[3], arrayAlunos[4]]
            let mediaAluno = (notasAluno.reduce((mediaAluno, i) => mediaAluno + i))/3
            
            return mediaAluno  
        }
        
        let medias = []

        for(let i = 0; i < 5; i++){
            medias.push(definirMedia(this.arrayAlunos[i]))
        }
        
        let maiorMedia = Math.min.apply(null, medias)
        let index = medias.indexOf(maiorMedia);
        
        for(let aluno of this.arrayAlunos){
            this.nomes.push(aluno[0])
        }

        console.log(this.nomes[index])

        for(let media of medias){
            if(media >= 6) { console.log(`Aprovado`) }
            else{  (`Reprovados`) }
        }
    }

    get defineSituacao(){
        for(let aluno of this.arrayAlunos){
            if(aluno[2] >= 6) { this.arrayAprovados.push(aluno) }
            else{ this.arrayReprovados.push(aluno) }
        }
        console.log(`Aprovados: ${this.arrayAprovados.join(' || ')} 
        Reprovados: ${this.arrayReprovados.join(' || ')}`)
    }        
}
new Alunos2( 
    {nome: 'Aluno1', matricula: 1, nota1: 10, nota2: 10, nota3: 10},
    {nome: 'Aluno2', matricula: 2, nota1: 8, nota2: 8, nota3: 8},
    {nome: 'Aluno3', matricula: 3, nota1: 5, nota2: 5, nota3: 5},
    {nome: 'Aluno4', matricula: 4, nota1: 1, nota2: 1, nota3: 1},
    {nome: 'Aluno5', matricula: 5, nota1: 6, nota2: 6, nota3: 6}
).menorMedia


//console.log(new Alunos("Andressa", 402305, 8).exibirSituacao)