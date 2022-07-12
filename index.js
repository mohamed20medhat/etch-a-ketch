
let backgroundColor = 'black'
let click = false

//? make board and draw
let makeBoard = (divNumber) => {
  let board = document.getElementById('board')
  board.style.gridTemplateColumns = `repeat(${divNumber}, 1fr)`
  board.style.gridTemplateRows = `repeat(${divNumber}, 1fr)`

  for(let i = 0; i < divNumber*divNumber; i++){
    let div = document.createElement('div')
    div.classList.add("pixel")
    div.addEventListener('mouseout', draw)
    board.appendChild(div)
  }
}

function draw () {
  if(click) {
    if(backgroundColor === "random"){
      let randomColor = getRandomColor()
      this.style.backgroundColor = randomColor
      document.getElementById('choose-color').value = randomColor
    }else {
      this.style.backgroundColor = backgroundColor
      document.getElementById('choose-color').value = backgroundColor
    }
  }
}

document.querySelector('#board').addEventListener('click', () => {
  click = !click

  if (click) {
    document.querySelector("#header").textContent = "Mode: Coloring";
  } else {
    document.querySelector("#header").textContent = "Mode: Not Coloring";
  }


})



//? new sketch 
let newSketchBtn = document.getElementById('new-sketch')
newSketchBtn.addEventListener('click', () => {
  let accepted = false 
  let divNum;
  while (!accepted){
    divNum = Number(prompt("choose a number between 10-70"))
    if( !isNaN(divNum)){
      if (divNum <= 70 && divNum >= 10){
        accepted = true
      }
    } 
  } 

  document.querySelector("#header").textContent = "Etch a sketch";
  document.getElementById('board').innerHTML = ''
  makeBoard(divNum)  
  resetGame()

})


//? clear
let clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', () => {
  let board = document.getElementById('board')
  let childrenArray = Array.from(board.children)
  childrenArray.forEach(child => {
    child.style.backgroundColor = 'white'
  })
  click = false
  document.querySelector("#header").textContent = "Etch a sketch";
})



//? choose color 
let chooseColorBtn = document.getElementById('choose-color')
chooseColorBtn.addEventListener('input', (e) => {
  backgroundColor = e.target.value
})



//? Rainbow
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let rainbowBtn = document.getElementById('rainbow')
rainbowBtn.addEventListener('click', (e) => {
  backgroundColor = 'random'
})



//? header indicate draw mode 





//?reset game
let resetGame = () => {
  click = false
}

makeBoard(80)



