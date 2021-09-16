
const squares = document.querySelectorAll(".playField > div")
let player1 = true
let turnCount = 0

let fieldArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]

squares.forEach(square => {
    square.addEventListener("click", highlightSquare)
    console.log("clickSquare")
})

function checkResults() {
    let resultsArray = ["0", "0", "0", "0", "0", "0", "0", "0"]
    let i = 0
    resultsArray[0] = fieldArray[0] + fieldArray[1] + fieldArray[2]  // row 1
    resultsArray[1] = fieldArray[3] + fieldArray[4] + fieldArray[5]  // row 2
    resultsArray[2] = fieldArray[6] + fieldArray[7] + fieldArray[8]  // row 3
    resultsArray[3] = fieldArray[0] + fieldArray[3] + fieldArray[6]  // column 1
    resultsArray[4] = fieldArray[1] + fieldArray[4] + fieldArray[7]  // column 2
    resultsArray[5] = fieldArray[2] + fieldArray[5] + fieldArray[8]  // column 3
    resultsArray[6] = fieldArray[0] + fieldArray[4] + fieldArray[8]  // diag upper left to lower right
    resultsArray[7] = fieldArray[2] + fieldArray[4] + fieldArray[6]  // diag upper right to lower left
    for (i=0; i<8; i++) {
        if (resultsArray[i] === 3) { console.log("Player 1, red wins!") }
        if (resultsArray[i] === -3) { console.log("Player 2, blue wins!") }
    }
}

function highlightSquare(event) {
    if (fieldArray[event.target.id] == 0) {
        if (player1) {
            event.target.style.backgroundColor = "#FF1111"
            fieldArray[event.target.id] = 1
        } else {
            event.target.style.backgroundColor = "#1111FF"
            fieldArray[event.target.id] = -1
        }
        player1 = !player1
        turnCount ++
        let i
        if (player1) { i = 1 } 
        if (!player1) { i = 2 }
        document.getElementById("whosTurn").innerHTML = `Your turn, player ${i}`
        if (turnCount > 4) { checkResults() }
    }
}

document.querySelector("#newGameBtn").addEventListener("click", function newGame() {
    player1 = Math.floor(Math.random()*2)
    let i
    if (player1) { i = 1 } 
    if (!player1) { i = 2 }
    document.getElementById("whosTurn").innerHTML = `Your turn, player ${i}`
    fieldArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    turnCount = 0
    document.querySelector(".playField").style.backgroundColor = "rgb(250, 243, 216)"
})




// document.querySelector(".playField").addEventListener("click", function switchPlayer() {
//     player1 = !player1
//     let i
//     if (player1) { i = 1 } 
//     if (!player1) { i = 2 }
//     document.getElementById("whosTurn").innerHTML = `Your turn, player ${i}`
// })

// function highlightSquare() {
//     console.log('clicked')
//     if (playerTurn === 1) {
//         this.style.backgroundColor = "#FF1111"
//         restoreBackground = "#FF1111"
//     } else {
//         this.style.backgroundColor = "#1111FF"
//         restoreBackground = "#1111FF"
//     }    
// }

    // let i = Math.floor(Math.random()*2+1)
    // if (i == 1) {
    //     player1 = true
    // } else {
    //     player1 = false
    // }


// let restoreBackground

// function getBackground() {
//     myDivSquare = document.getElementById("0")
//     restoreBackground = window.getComputedStyle(myDivSquare).backgroundColor
//     console.log("restore color:", restoreBackground)
// }

// function hoverOnSquare(x) {
//    // x.style.backgroundColor = "#DDDD11"
//    getBackground()
//     x.style.backgroundColor = "rgba(180, 180, 100, 0.2)"
// }

// function noHoverOnSquare(x) {
//     x.style.backgroundColor = restoreBackground
// }