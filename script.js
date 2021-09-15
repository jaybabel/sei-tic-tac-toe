// function highLightSquare() {
//     document.getElementById("row1col1").style.backgroundColor = green
// }

// document.getElementById("row1col1").addEventListener("mouseover", function highlightSquare() {
//     console.log('clicked')
//     this.style.backgroundColor = "#FFFF11"
// })

// document.getElementById("row2col2").addEventListener("mouseover", function highlightSquare() {
//     console.log('clicked')
//     this.style.backgroundColor = "#FFFF11"
// })

// document.getElementById("row3col3").addEventListener("mouseover", function highlightSquare() {
//     console.log('clicked')
//     this.style.backgroundColor = "#FFFF11"
// })
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

function hoverOnSquare(x) {
    x.style.backgroundColor = "#DDDD11"
}

function noHoverOnSquare(x) {
    x.style.backgroundColor = "#FFFFFF"
}