const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let counter = 0
let carouselImages = []
let initX = canvasWidth/2, initY = canvasHeight/2
let destinationX, destinationY
let x = initX, y = initY
let distx
let disty
let trace



function preload(){

    for(let i = 1; i < 11; i++){
        console.log(`${i}.0.png`) 
        carouselImages.push(loadImage(`assets/img/${i}.0.png`))
    }

}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    destinationX = random(0, canvasWidth - 10), destinationY = random(0, canvasHeight - 10)
    console.log(canvasWidth, canvasHeight)
    console.log(destinationX,destinationY)
    
    
    
}

function draw(){
    // back = color(255)
    // back.setAlpha(50)
    background(trace)
    image(carouselImages[counter], x, y, 100, 100)
    distx=destinationX-x
    disty=destinationY-y
    x+=distx/10
    image(carouselImages[counter], x, y, 100, 100)
    y+=disty/10
}



