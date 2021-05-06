$(document).ready(function() {
    $("#btnCadastro").click(function() {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        let data = {"user": $user, "pwd": $pwd};

        if($user && $pwd) {
            let url = "http://localhost:8080/"
            axios.post(url, data);
        } else {
            alert("Erro: favor informar usuário e senha")
        }
    })
});