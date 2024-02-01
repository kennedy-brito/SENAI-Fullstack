//efeito do botão voltar ao Topo

function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    );
}

//Validação de Login
function login(){
    let logado = 0;
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '123456'){
        window.location = 'index.html';
        logado = 1;
    }

    if(logado == 0 ){
        alert("Acesso negado. Dados incorretos");
    }

}
//Ativar alert no botão cadastrar
function cadastro(){
    alert("Cadastrado com sucesso!");

    window.location.href = "index.html"
}