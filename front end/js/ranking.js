var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var currentDate = `${(('' + day).length < 2 ? '0' : '') + day}/${(('' + month).length < 2 ? '0' : '') + month}/${year}`;

// assim que o jogo acabar, atualiza o ranking
function InsertRank() {
}

// assim que a pagina carrega busca no back-end o ranking
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