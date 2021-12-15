/* definindo cenário */
function definirCenario(){
    var form = document.querySelector('#form');
    //var botao = document.querySelector('#salvar');
    var wm_flappy = document.querySelector('[wm-flappy]');
    if(form.cenario.value == "noturno") wm_flappy.classList.add('noturno')
    else wm_flappy.classList.remove('noturno')

    //botao.addEventListener('click', function (event) {
    

    //})
    //wm_flappy.classList.add('noturno')

/*botao.addEventListener('click', function (event) {
    //event.preventDefault();
    console.log(form.cenario.value)
    //console.log(form.cenario.value); ss
    
});


*/

}


/* definindo cenário */
function definirCenario2(){
    //const form  = document.querySelector("#background").value
    //var form = document.querySelector('.cenario');
    const botao = document.querySelector('#salvar')
    var wm_flappy = document.querySelector('[wm-flappy]');
    
    //console.log(form);
    //document.getElementById("salvar").onclick = function() {
        var form = document.getElementsByName("cenario");

        function setLocalStorage(){
            botao.addEventListener('click', () => {
                for(var i = 0; i < form.length; i++) {
                    if (form[i].checked) {
                        localStorage.setItem('valor', form[i].value);
                        window.location.href = './index.html';
                    }
                }
            })
        }
        function getLocalStorage(){
            botao.addEventListener('click', () => {
                console.log(localStorage.getItem('valor'))
            })
          }

          
        setLocalStorage()
        //getLocalStorage()
        
    }

        
           //if(form[i].value == "noturno") ocalStorage.setItem('valor', form[i].value);
            ///wm_flappy.classList.add('noturno')
            //else wm_flappy.classList.add('diurno')
            /*if (form[i].checked) {
                localStorage.setItem('valor', form[i].value);
            }*/
            
        
    
/*
    botao.addEventListener('click', function (event) {
        event.preventDefault();
        //console.log(form.cenario.value);
        const form = document.querySelector('.cenario').value;
        console.log(form);
    });
*/
    /*botaoIniciar.addEventListener("click", function(event){
        event.preventDefault();
        console.log(form.cenario.value);
    })*/

    ///var form = document.querySelector('input[name="cenario"]:checked').value;

    //var wm_flappy = document.querySelector('[wm-flappy]');

    //console.log(form.value)
    /*if(form.value == "noturno") wm_flappy.classList.add('noturno')
    else wm_flappy.classList.remove('noturno')*/


//definirCenario2()



/* Definindo cor do cenário */
/*
function definirCenario3(){
    const botao = document.querySelector('#form')
    var wm_flappy = document.querySelector('[wm-flappy]');
    var valorCenario = window.localStorage.getItem('valor');

    botao.addEventListener('submit', function (e) {
        e.preventDefault();
        salvar()
        //console.log(localStorage.getItem('valor'))
        
        window.location.href = './index.html';
        // Remove o item
       // window.localStorage.removeItem('valor');


    })
   
}

definirCenario3()


function salvar(){
    var form = document.getElementsByName("cenario");

    for(var i = 0; i < form.length; i++) {
        if (form[i].checked) {
            localStorage.setItem('valor', form[i].value);
        }
    }
}*/

/* Iniciar Jogo */
function submitForm(){
    const formulario = document.querySelector('#form')

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        valueInputRadio("cenario", "valorCenario"),
        
        window.location.href = './index.html';
    })
}

/* Verifica o vlor do Input Radio */
function valueInputRadio(nameElemento, valor){
    var inputRadio = document.getElementsByName(nameElemento);

    for(var i = 0; i < inputRadio.length; i++) {
        if (inputRadio[i].checked) {
            localStorage.setItem(valor, inputRadio[i].value);
        }
    }
}

submitForm()