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


// sounds.forEach((sound)=>{
//     sound.addEventListener('keypress', ()=>{
//         let drumkey = document.querySelector(`audio[data-drumkey="${sound.dataset.drumkey}"]`)
//         playSoundKey(drumkey)
//     })
// })

// playSoundKey = (audioKeyTag) =>{

//     if(event.key=="a"){
//         audioKeyTag.play();
//     }
//         else if(event.key=="s"){
//             audioKeyTag.play()
//     }else
//     alert("Press above key mentioned")
// }





