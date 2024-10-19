let button = document.querySelector('button')
let box1h1 = document.querySelector('.box1h1')
let box2h2 = document.querySelector('.box2h2')
let box3h3 = document.querySelector('.box3h3')
let box4h4 = document.querySelector('.box4h4')
let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let box4 = document.querySelector('.box4')

let boxs = [box1, box2, box3, box4]

button.addEventListener("click", () => {
    let randomBox = Math.floor(Math.random() * boxs.length)
    let allrandom = boxs[randomBox]
    if (allrandom == box1) {
        allrandom.style.transform = 'translateY(0px)'
    }else if (allrandom == box2) {
        allrandom.style.transform = 'translateY(0px)'
    }
    else if (allrandom == box3) {
        allrandom.style.transform = 'translateX(0px)'
    }else if (allrandom == box4) {
        allrandom.style.transform = 'translateX(0px)'
    }
})

box1h1.addEventListener('click', () => {
    box1.style.transform = 'translateY(-200px)'
})
box2h2.addEventListener('click', () => {
    box2.style.transform = 'translateY(200px)'
})

box3h3.addEventListener('click', () => {
    box3.style.transform = 'translateX(-400px)'
})

box4h4.addEventListener('click', () => {
    box4.style.transform = 'translateX(400px)'
})