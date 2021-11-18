/*  Aluna: Andressa Gomes Moreira  - 402305
    Disciplina: Tecnologias Web
    Aula - Introdução a JavaScript
    Atividade: Cálculo das áreas
*/

const quadrado = (lado) => {console.log(`Área do quadrado: ${lado ** 2}cm²`)}
const retangulo = (base, altura) => {console.log(`Área do retângulo: ${base * altura}cm²`)}
const triangulo = (base, altura) => {console.log(`Área do triângulo: ${(base * altura)/2}cm²`)}
const losangolo = (diagonal1, diagonal2) => {console.log(`Área do losangolo: ${(diagonal1 * diagonal2)/2}cm²`)}

quadrado(10)
retangulo(40, 4)
triangulo(40, 4)
losangolo(16, 12)
