$(document).ready(function () {
    $("#btnCadastro").click(function () {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        let data = { "user": $user, "pwd": $pwd };
        let url = "http://localhost:8080/usuarios/new-user";

        if ($user && $pwd) {
            $.getJSON("http://localhost:8080/usuarios",
                function ($registros) {
                    if ($registros.find($usuario => $usuario.user == $user))
                        alert("O usuário informado já tem cadastro, crie um usuário diferente.")
                    else {
                        axios.post(url, data);
                        alert(`Usuário ${$user} criado com sucesso!`)
                        window.open("login.html", "_self");
                    }
                });
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});