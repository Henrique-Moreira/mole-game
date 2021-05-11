const $levels = { "easy": 3, "medium": 5, "hard": 7 };
const $imgWidth = 147;  // largura da toupeira
const $imgHeight = 108;  // altura da toupeira
const $imgsTheme = {"defaut": "buraco.gif", "active":"toupeira.gif", "dead":"morreu.gif"}
var $inicialTime = 30;
var $timeGame = $inicialTime; // Tempo de jogabilidade independente da fase
var $idChronoGame; // Ira controlar o setInterval do cronometro
var $idChronoStartGame; // Ira controlar o setInterval do jogo

$(document).ready(function () {
    createRank($("#level").val());
    fillBoard();
    $("#chrono").text($inicialTime);
    $("#btnPlay").click(function () {
        btnCtrl(true);
        $idChronoStartGame = setInterval(startGame, 850);
        $idChronoGame = setInterval(startChronoGame, 1000);
    });
    $("#btnPause").click(function(){
        clearIntervals();
        $("#btnPlay").prop('disabled', false);
        $("#btnPlay").css("background-color", "var(--color-text)");
    });
    $("#btnStop").click(function(){
        endGame();
    });
    $("#btnExit").click(function(){
        insertRank();
        window.open("login.html", "_self");
    });
    $("#level").on('change', function() {
        $nivel = $("#level").val();
        createRank($nivel);
    });
    $("#game").css("cursor", "url('../img/marreta1.png'), auto");
});

function clearIntervals() {
    clearInterval($idChronoStartGame);
    clearInterval($idChronoGame);
}

function startChronoGame() {
    let $secondsFormat = (--$timeGame).toLocaleString("pt-br", {minimumIntegerDigits: 2});
    ($timeGame >= 0)?$("#chrono").text($secondsFormat):endGame();
}

function endGame() {
    clearInterval($idChronoGame);
    clearInterval($idChronoStartGame);
    alertWifi(`<p>Fim de Jogo!</p> <p>Sua pontuação foi de ${$("#score").text()} ponto(s)</p>`, false, 0, `img/${$imgsTheme.dead}`, "50");
    fillBoard();
    insertRank($("#score").text());
    $("#score").text("0");
    $timeGame = $inicialTime;
    $("#chrono").text($timeGame);
    btnCtrl(false);
}

function btnCtrl(moment) {
    const color = (moment == true) ? "var(--color-text-secondary)" : "var(--color-text)";

    $("#btnPlay").prop('disabled', moment);
    $("#btnPlay").css("background-color", color);

    $("#btnPause").prop('disabled', !moment);
    
    $("#btnStop").prop('disabled', !moment);

    $("#btnExit").prop('disabled', moment);
    $("#btnExit").css("background-color", color);
}

// cria a moldura do tabuleiro do jogo conforme o nível de dificuldade
function fillBoard() {
    $level = getLevel();
    $boardWidth = $imgWidth * $level;
    $boardHeight = $imgHeight * $level;
    $("#board").css({ "width": $boardWidth, "height": $boardHeight });
    placeHolesBoard($level);
}

// insere os buracos das toupeiras no tabuleiro
function placeHolesBoard($level) {
    $("#board").empty();
    for ($i = 0; $i < Math.pow($level, 2); $i++) {
        $div = $("<div></div>");
        $img = $("<img>").attr({ "src":`img/${$imgsTheme.defaut}`, "id": `mole_${$i + 1}` });
        $($img).click(function(){
            setTimeout(() => {
                $("#game").css("cursor", "url('../img/marreta2.png'), auto");
                setTimeout(() => {
                    $("#game").css("cursor", "url('../img/marreta1.png'), auto");
                }, 60)
            }, 60);
            updateScore(this);
        });
        $($div).append($img);
        $("#board").append($div);
    }
}

function startGame() {
   // fillBoard();
    $level = getLevel();
    $randNumber = getRandNumber(1, Math.pow($level, 2));
    $(`#mole_${$randNumber}`).attr("src", `../img/${$imgsTheme.active}`);
    setTimeout(() => {
        $(`#mole_${$randNumber}`).attr("src", `img/${$imgsTheme.defaut}`)
    }, 800);
}

// Gera um numero aleatorio entre "min" e "max"
function getRandNumber(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

//retorna o nro correspondente ao nivel de dificuldade selecionado pelo usuário
function getLevel() {
    return $levels[$("#level").val()];
}

// atualizar a pontuação do jogo ao clicar sobre uma toupeira
function updateScore($img) {
    if($($img).attr("src").search($imgsTheme.active) != -1) {
        $("#score").text(parseInt($("#score").text()) + 1);
        document.getElementById("punch").play();
        $($img).attr("src", `img/${$imgsTheme.dead}`);
    }
}