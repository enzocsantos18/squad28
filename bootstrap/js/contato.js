$('#form-contatos').submit(function(){
    var nome = $('#nome_aluno');
    var nasc_aluno = $('#data_nasc_aluno');
    var matricula_aluno = $('#matricula_aluno');
    var escola = $('#escola');
    var cepEscola = $('#cep-escola');
    var erro = $('.alert');
    var campo = $('#campo-erro');
    var avatar = $('#avatar');

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
    if (nasc_aluno.val() ==''){
        erro.removeClass('d-none');
        campo.html('Data de Nascimento');
        nasc_aluno.focus();
        nasc_aluno.addClass('is-invalid');
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

    if (avatar.val() ==''){
        erro.removeClass('d-none');
        campo.html('avatar');
        avatar.focus();
        avatar.addClass('is-invalid');
        return false;
    }


return false;

});
