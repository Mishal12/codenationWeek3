let score = 0
let rolls = 0
let win = 0

const updateImageVisibility = (visibleImageNumber) => {
    // get images of any dice from 1 to 6
    for (let i = 1; i <= 6; i++) {
        if (visibleImageNumber === i) {
            document.getElementById('diceImg' + i).hidden = false
        } else {
            document.getElementById('diceImg' + i).hidden = true
        }
    }
}

const rollPlayer1 = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    updateImageVisibility(randomNumber)
    rolls += 1
    score = score + randomNumber

    if (randomNumber === 1) {
        score = 0
    } else if (score >= 20) {
        score = 0
        win += 1
    }

    document.getElementById("roll").innerHTML = rolls;
    document.getElementById('win').innerHTML = win

    if (score == 0 && randomNumber != 1) {
        document.querySelector('#score').innerHTML = "You won!!"
    } else {
        document.querySelector('#score').innerHTML = score
    }

}

const btnDice = document.getElementById('btnDice')
btnDice.addEventListener('click', () => {
    rollPlayer1();
})
