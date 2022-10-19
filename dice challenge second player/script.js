let currentScore1 = 0
let currentScore2 = 0
let totalScore1 = 0
let totalScore2 = 0
let turn = 1
let updateScore1 = document.getElementById('score1')
let updateScore2 = document.getElementById('score2')
let changePlayers = document.getElementById('changePlayer')
let updateCurrentScores1 = document.getElementById('currentScore1')
let updateCurrentScores2 = document.getElementById('currentScore2')


const updateImageVisibility = (visibleImageNumber) => {
    for (i = 1; i <= 6; i++) {
        if (visibleImageNumber === i) {
            document.getElementById('diceImg' + i).hidden = false
        } else
            document.getElementById('diceImg' + i).hidden = true
    }

}

const rollDice = () => {
    if (turn == 1) {
        rollPlayer1()
    } else {
        rollPlayer2()
    }
}

const restartGame = () => {
    turn = 1
    totalScore1 = 0
    totalScore2 = 0
    updateScore1.innerHTML = 0;
    updateCurrentScores1.innerHTML = 0;
    currentScore1 = 0;
    updateScore2.innerHTML = 0;
    updateCurrentScores2.innerHTML = 0;
    currentScore2 = 0;
    document.querySelector('.firstPlayer').style.background = 'aqua'
    document.querySelector('.secondPlayer').style.background = 'white'
}

//hold btn
const holdBtn = document.getElementById('holdBtn')
holdBtn.addEventListener('click', () => {
    if (turn == 1) {
        totalScore1 += currentScore1
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        changePlayers.innerHTML = "Player 2 to roll"
        if (totalScore1 >= 20 && randomNumber != 1) {
            document.getElementById('score1').innerHTML = "You won!!"
            setTimeout(
                () => {
                    alert("Player 1 Wins")
                    restartGame()
                }
                , 1)
        } else {
            document.getElementById('score1').innerHTML = totalScore1
        }
        turn = 2
        document.querySelector('.firstPlayer').style.background = 'white'
        document.querySelector('.secondPlayer').style.background = 'aqua'
        currentScore1 = 0;
    } else {
        totalScore2 = totalScore2 + currentScore2
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(currentScore2)
        changePlayers.innerHTML = "Player 1 to roll"
        if (currentScore2 >= 20 && randomNumber != 1) {
            document.getElementById('score2').innerHTML = "You won!!"
            setTimeout(
                () =>{
                    alert("Player 2 wins")
                }
            )

        } else {
            document.getElementById('score2').innerHTML = totalScore2
        }
        turn = 1
        document.querySelector('.firstPlayer').style.background = 'aqua'
        document.querySelector('.secondPlayer').style.background = 'white'
        currentScore2 = 0;
    }


})
//restart btn
const restarBtn = document.getElementById('restart')
restarBtn.addEventListener('click', restartGame)


const rollPlayer1 = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    updateImageVisibility(randomNumber)

    currentScore1 = randomNumber + currentScore1

    if (randomNumber === 1) {
        currentScore1 = 0;
    }

    updateCurrentScores1.innerHTML = currentScore1

}

const rollPlayer2 = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    updateImageVisibility(randomNumber)

    currentScore2 = randomNumber + currentScore2

    if (randomNumber === 1) {
        currentScore2 = 0;
    }
    updateCurrentScores2.innerHTML = currentScore2
}
