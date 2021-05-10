var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentDate = `${(('' + day).length < 2 ? '0' : '') + day}/${(('' + month).length < 2 ? '0' : '') + month}/${year}`;

// atualiza o ranking
function insertRank($score) {
    console.log($score)
    $dificuldade = $("#level").val();
    $.getJSON("http://localhost:8080/usuarios",
        function ($registros) {
            const $user = localStorage.getItem("user");
            const $userObject = $registros.find($usuario => $usuario.user == $user);
            const $url = `http://localhost:8080/${$dificuldade}/new-rank`;
            const $objectRank = {
                "pontos": parseInt($score),
                "data": currentDate,
                "usuario": {
                    "id": $userObject.id,
                    "user": $userObject.user,
                    "pwd": $userObject.user
                }
            }
            axios.post($url, $objectRank);
        });        
}

// busca no back-end o ranking
function createRank($level) {
    $("#tBodyRanking").empty();
    $.getJSON(`http://localhost:8080/${$level}/rank`,
        function ($registros) {
            let $tbody = $("#tBodyRanking");
            for ($i = 0; $i < $registros.length; $i++) {
                $tbody.append($('<tr>')
                    .append($('<td>').text($registros[$i].pontos))
                    .append($('<td>').text($registros[$i].usuario.user))
                    .append($('<td>').text($registros[$i].data)));
            }
        });
}