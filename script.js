
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
        if (resultsArray[i] === 3) { 
            document.querySelector("h2").style.color = "#FF0000"
            document.getElementById("whosTurn").innerHTML = "Player 1, red wins!"
            turnCount = 10
        }
        if (resultsArray[i] === -3) {
            document.querySelector("h2").style.color = "#0000FF" 
            document.getElementById("whosTurn").innerHTML = "Player 2, blue wins!" 
            turnCount = 10           
        }
        else if ((turnCount > 8) && (turnCount < 10)){
            document.querySelector("h2").style.color = "#000000" 
            document.getElementById("whosTurn").innerHTML = "There are no winners. Only losers."            
        }
    }
}

function highlightSquare(event) {
    if (turnCount === 10) {
        document.getElementById("whosTurn").innerHTML = "You wanna another piece of me?. Hit the new game button."
    } else if (fieldArray[event.target.id] == 0) {
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
        if (player1) { 
            i = 1
            document.querySelector("h2").style.color = "#FF0000" 
        } 
        if (!player1) { 
            i = 2
            document.querySelector("h2").style.color = "#0000FF" 
        }
        document.getElementById("whosTurn").innerHTML = `Your turn, player ${i}`
        if (turnCount > 4) { checkResults() }
    }
}

document.querySelector("#newGameBtn").addEventListener("click", function newGame() {
    player1 = Math.floor(Math.random()*2)
    let i
    if (player1) { 
        i = 1
        document.querySelector("h2").style.color = "#FF0000"
    } 
    if (!player1) { 
        i = 2
        document.querySelector("h2").style.color = "#0000FF" 
    }
    document.getElementById("whosTurn").innerHTML = `Your turn, player ${i}`
    fieldArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    turnCount = 0
    for (i = 0; i < 9; i++) {
        document.getElementById(`${i}`).style.backgroundColor = "rgb(255, 255, 255)"
    }
})

