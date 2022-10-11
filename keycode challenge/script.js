console.log('asdsad')
const eventContainer = document.querySelectorAll('.eventContainer')
const test = document.getElementById('test')

// document.addEventListener('keypress', () => {

//     if (eventContainer.style.display === 'none') {
//         eventContainer.style.display = 'block'
//     } else {
//         eventContainer.style.display = 'none'
//     }
// })


document.addEventListener('keypress', (event) => {
    eKey.innerHTML = event.key
    eKeyLocation.innerHTML = event.location
    eKeyCode.innerHTML = event.code
    eKeyWhich.innerHTML = event.which
    eKeyDump.innerHTML = JSON.stringify(event)
    eKeyDump.innerHTML = JSON.stringify(event.bubbles)
    eKeyDump.innerHTML = JSON.stringify(event.altKey)
    eKeyDump.innerHTML = JSON.stringify(event.code)
    eKeyDump.innerHTML = JSON.stringify(event.composed)
    
    console.log(eKeyDump)
})

