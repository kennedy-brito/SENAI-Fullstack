//efeito de esconder formulário de cadastro

//iniciar o jquery
$(document).ready(function(){
    //todas as ações do jquery devem ser executadas aqui dentro

    $('#botao-cadastrar').click( function (){

            $("#form-cadastrar").slideToggle("slow");
            $("#section-login").slideToggle("slow");
            $("#botao-cadastrar").hide();
        }
    );

});