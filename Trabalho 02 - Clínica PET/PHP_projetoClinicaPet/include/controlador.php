<?php
include_once("../classes/Cliente.php");
//Get
if (isset($_GET['rota'])) {
    switch ($_GET['rota']) {
        case "cadastrar_cliente":
            include("../include/cadastrarCliente.php");
            break;

        case "visualizar_cliente":
            include("../include/visualizarCliente.php");
            break;

        case "editar_cliente":
            include("../include/editarCliente.php");
            break;
     
    }
}


//Post
if (isset($_POST['formCadastrarCliente'])) {
    $objCliente = new Cliente();
    $objCliente->setNome($_POST['nomeCliente']);
    $objCliente->setCPF($_POST['cpfCliente']);
    $objCliente->setEmail($_POST['emailCliente']);
    $objCliente->setEndereco($_POST['enderecoCliente']);
    $objCliente->setCelular($_POST['celularCliente']);
    //echo"Nome: ".$objCliente->getNome()."<br/>";  // teste
    //echo"Endereco: ".$objCliente->getEndereco()."<br/>";
    //echo"Celular: ".$objCliente->getCelular()."<br/>";

    $objCliente->cadastrar();

} else if (isset($_POST['formEditarCliente'])) {
    $objCliente = new Cliente();
    $objCliente->setNome($_POST['nomeCliente']);
    $objCliente->setCPF($_POST['cpfCliente']);
    $objCliente->setEmail($_POST['emailCliente']);
    $objCliente->setEndereco($_POST['enderecoCliente']);
    $objCliente->setCelular($_POST['celularCliente']);
    $objCliente->setID($_POST['idCliente']);
    $objCliente->editar();

}
