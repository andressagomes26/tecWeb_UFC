<?php
include_once("../classes/Cliente.php");
$objCliente = new Cliente();

if(isset($_POST['idClienteDeletar'])){
    $objCliente = new Cliente();
    $objCliente->deletar($_POST['idClienteDeletar']);
}

