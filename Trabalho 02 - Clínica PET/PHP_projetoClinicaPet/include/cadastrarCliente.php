<?php

?>

<div class="container">
    <div class="row">
        <div class="col-10">
            <form method="POST" action="">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email-cliente" aria-describedby="emailHelp" name="emailCliente" >
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="nome-cliente" aria-describedby="emailHelp" name="nomeCliente" >
                    <div id="emailHelp" class="form-text"></div>
                </div>

                <!-- Teste - Andressa - Acrescentar as informações de endereço e celular ao registro do cliente.-->
                <div class="form-group row">
                    <div class="col-sm-8 mb-3 mb-sm-0">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control form-control-user" id="exampleRua" name="end1Cliente" >
                    </div>
                    <div class="col-sm-4">
                        <label for="endereco" class="form-label">Número</label>
                        <input type="number" class="form-control form-control-user" id="exampleNumero" name="end2Cliente" >
                    </div>
                </div>
                <!-- Fim Teste - Andressa - Acrescentar as informações de endereço e celular ao registro do cliente.-->
                
                <div class="form-group">
                    <label for="endereco" class="form-label">Telefone</label>
                    <input type="text" class="form-control form-control-user" id="telefone">
                </div>
                <input type="hidden" name="formCadastrarCliente">
                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>
    </div>
</div>