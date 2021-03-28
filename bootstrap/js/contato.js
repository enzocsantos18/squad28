$('#form-contatos').submit(function(){
    var nome = $('#nome_aluno');
    var idadeAluno = $('#idadeAluno');
    var matricula_aluno = $('#matricula_aluno');
    var escola = $('#escola');
    var cepEscola = $('#cep-escola');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    //Validar Nome 
    if (nome.val() ==''){
        erro.removeClass('d-none');
        campo.html('Nome do Aluno');
        nome.focus();
        nome.addClass('is-invalid');
        return false;
    }
    //validar idade
    if (idadeAluno.val() ==''){
        erro.removeClass('d-none');
        campo.html('Idade do Aluno');
        idadeAluno.focus();
        idadeAluno.addClass('is-invalid');
        return false;
    }
    //validar Matricula
    if (matricula_aluno.val() ==''){
        erro.removeClass('d-none');
        campo.html('Matricula do Aluno');
        matricula_aluno.focus();
        matricula_aluno.addClass('is-invalid');
        return false;
    }
    //validar Escola
    if (escola.val() ==''){
        erro.removeClass('d-none');
        campo.html('Nome da Escola');
        escola.focus();
        escola.addClass('is-invalid');
        return false;
    }
    //validar CEP
    if (cepEscola.val() ==''){
        erro.removeClass('d-none');
        campo.html('CEP da Escola');
        cepEscola.focus();
        cepEscola.addClass('is-invalid');
        return false;
    }



return false;

});
