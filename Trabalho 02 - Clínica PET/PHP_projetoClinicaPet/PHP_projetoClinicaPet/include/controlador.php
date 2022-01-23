<?php

//Get
if (isset($_GET['rota'])) {
    switch ($_GET['rota']) {
        case "cadastrar_cliente":
            include("include/cadastrarCliente.php");
        break;
        
    }
}


//Post
if(isset($_POST['formCadastrarCliente'])){
   echo $_POST['emailCliente']; 
   echo $_POST['nomeCliente']; 
}


