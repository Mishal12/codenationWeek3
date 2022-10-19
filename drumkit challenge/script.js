const sounds = document.querySelectorAll('button.sounds')

sounds.forEach((sound) => {
    sound.addEventListener('click', () => {
        let drumSound = document.querySelector(`audio[data-drumSound="${sound.dataset.drumsound}"]`)
        playSound(drumSound)
    })
})

playSound = (audioTag) => {
    audioTag.play()
}

document.addEventListener('keypress', (event) => {
    let drumkey
    switch (event.key) {
        case "a":
            drumkey = document.querySelector(`audio[data-drumSound="boom"]`)
            break;
        case "s":
            drumkey = document.querySelector(`audio[data-drumSound="clap"]`)
            break
        case "d":
            drumkey = document.querySelector(`audio[data-drumSound="hihat"]`)
            break
        case "f":
            drumkey = document.querySelector(`audio[data-drumSound="click"]`)
            break
        case "g":
            drumkey = document.querySelector(`audio[data-drumSound="opehat"]`)
            break
        case "h":
            drumkey = document.querySelector(`audio[data-drumSound="ride"]`)
            break
    }
    playSound(drumkey)
})



