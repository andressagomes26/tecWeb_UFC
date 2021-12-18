/* Iniciar Jogo */
function submitForm() {
    const formulario = document.querySelector('#form')

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        valueInputRadio("cenario", "valorCenario");
        valueInputRadio("intervaloAbertura", "valorIntervaloAbertura");
        valueInputRadio("distanciaCanos", "valorDistanciaCanos");
        valueInput("velocidade", "valorVelocidade")
        valueSelect("personagens", "valorPersonagem")
        valueInputRadio("tipoJogo", "valortipoJogo");
        valueInputRadio("velocidadePersonagem", "valorvelocidadePersonagem");
        valueInputRadio("potuacao", "valorPotuacao");
        valueInput("name", "valorName")

        window.location.href = './index.html';
    })
}

/* Verifica o valor do Input Radio */
function valueInputRadio(nameElemento, valor) {
    var inputRadio = document.getElementsByName(nameElemento);

    for (var i = 0; i < inputRadio.length; i++) {
        if (inputRadio[i].checked) {
            localStorage.setItem(valor, inputRadio[i].value);
        }
    }
}

/* Verifica o valor do Input Number - Text*/
function valueInput(nameElemento, valor) {
    var inputValue = document.querySelector(`#${nameElemento}`).value;
    localStorage.setItem(valor, inputValue);
}

/* Verifica o valor do Select */
function valueSelect(nameElemento, valor) {
    var select = document.querySelector(`#${nameElemento}`)
    var value = select.options[select.selectedIndex].value;
    localStorage.setItem(valor, value);
}

submitForm()