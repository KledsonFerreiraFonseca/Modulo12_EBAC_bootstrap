$(document).ready(function(){
    /*aplicação da mascara (mask plugin)*/
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })

    /*validado o formulário (validate)*/
    $('form').validate({
        rules: {
            nome: {
                required: true
                },
            email: {
                required: true,
                email: true
                },
            telefone: {
                required: true
                }
            },
            messages:{
                nome: "Por favor, insira o seu nome",
                email: "Por favor, insira o seu email",
                telefone: "Por favor, insira o seu telefone"
                
            },
    })
})    