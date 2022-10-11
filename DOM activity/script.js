//Activity 1
const showImage = document.getElementById('showImage')
const btnImage = document.getElementById('btnImage')

btnImage.addEventListener('click', () => {
    if (btnImage.style.display === "none") {
        showImage.style.display = "flex"
    } else {
        showImage.style.display = "none"
    }
})

// Activity2

const displayImage = document.getElementById('displayImage')
const updateImage = document.getElementById('updateImage')
const changeImage = document.getElementById('changeImage')

updateImage.addEventListener('click', () => {

    displayImage.src = changeImage.value
})

//Activity3
const textHeader = document.getElementById('textHeader')
const btnHeading = document.getElementById('btnHeading')
const inputColor = document.getElementById('inputColor')

btnHeading.addEventListener('click', () => {
    textHeader.style.color = inputColor.value
})

//Activity 4
let coordinatesClicked = document.getElementById('coordinatesClicked')
document.addEventListener('click', (event) => {
    console.log(event)

    coordinatesClicked.innerHTML = `X-coordinates${event.clientX} , Y-coordinates:${event.clientY}`
})