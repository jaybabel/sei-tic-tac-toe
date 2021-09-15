const squares = document.querySelectorAll(".playField > div")

squares.forEach(square => {
    square.addEventListener("click", highlightSquare)
    console.log("clickSquare")
})

//document.getElementById("0").addEventListener("click", 
function highlightSquare() {
    console.log('clicked')
    if (playerTurn === 1) {
        this.style.backgroundColor = "#FF1111"
        restoreBackground = "#FF1111"
    } else {
        this.style.backgroundColor = "#1111FF"
        restoreBackground = "#1111FF"
    }    
}


let playerTurn = 1

document.querySelector(".playField").addEventListener("click", function switchPlayer() {
    if (playerTurn === 1) {
        playerTurn = 2
    } else {
        playerTurn = 1
    }
    document.getElementById("whosTurn").innerHTML = `Your turn, player ${playerTurn}`
})

document.querySelector("#newGameBtn").addEventListener("click", function newGame() {
    // document.querySelectAll(".gSquares").style.backgroundColor = "#FFFFF"
    playerTurn = Math.floor(Math.random()*2+1)
    document.getElementById("whosTurn").innerHTML = `Your turn, player ${playerTurn}`
})

let restoreBackground

function getBackground() {
    myDivSquare = document.getElementById("0")
    restoreBackground = window.getComputedStyle(myDivSquare).backgroundColor
    console.log(restoreBackground)
}

function hoverOnSquare(x) {
   // x.style.backgroundColor = "#DDDD11"
   getBackground()
    x.style.backgroundColor = "rgba(180, 180, 100, 0.2)"
}

function noHoverOnSquare(x) {
    x.style.backgroundColor = restoreBackground
}