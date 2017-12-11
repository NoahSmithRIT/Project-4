let board = document.getElementById("game-wrap");
let gameText = document.getElementById("board");

// board animations
function flipBoard() {
    if (board.className == "") {
        board.setAttribute("class", "animated flip");
    }
    else {
        board.setAttribute("class", "");
    }
}

function wobble() {
    if (board.className == "") {
        board.setAttribute("class", "animated wobble");
    }
    else {
        board.setAttribute("class", "");
    }
}

function bounce() {
    if (board.className == "") {
        board.setAttribute("class", "animated bounce");
    }
    else {
        board.setAttribute("class", "");
    }
}

function rubberBand() {
    if (board.className == "") {
        board.setAttribute("class", "animated rubberBand");
    }
    else {
        board.setAttribute("class", "");
    }
}

// text animations
function flipText() {
    if (gameText.className == "") {
        gameText.setAttribute("class", "animated flip");
    }
    else {
        gameText.setAttribute("class", "");
    }
}

function jello() {
    if (gameText.className == "") {
        gameText.setAttribute("class", "animated jello");
    }
    else {
        gameText.setAttribute("class", "");
    }
}

function tada() {
    if (gameText.className == "") {
        gameText.setAttribute("class", "animated tada");
    }
    else {
        gameText.setAttribute("class", "");
    }
}

function flash() {
    if (gameText.className == "") {
        gameText.setAttribute("class", "animated flash");
    }
    else {
        gameText.setAttribute("class", "");
    }
}

// reset
function reset() {
    board.setAttribute("class", "");
    gameText.setAttribute("class", "");
}