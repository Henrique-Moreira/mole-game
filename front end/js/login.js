$(document).ready(function () {
    $("#btnLogin").click(function () {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        if ($user && $pwd) {
            $.getJSON("https://backend-molegame.herokuapp.com/usuarios",
                function ($registros) {
                    if ($registros.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd).length > 0) {
                        localStorage.setItem("user", $user);
                        window.open("game.html", "_self");
                    }                  
                    else {
                        alert("Usuário Inválido");
                    }
                });
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});