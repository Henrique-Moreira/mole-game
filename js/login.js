$(document).ready(function() {
    $("#btnLogin").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        if($user && $pwd) {
            $.getJSON("http://localhost:8080/usuarios",
             function($registros) {
               if ($registros.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd).length > 0)
                        window.open("game.html", "_self")
                else alert("Usuário Inválido");
               });
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});