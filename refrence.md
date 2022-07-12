
# project initiation 


## main features
- drawBoard D 
- new sketch D 
- clear D
- choose color
- rainbow


#### Draw board
- draw board 64*64 -> when user passes over a div while clicking. add an event listener to toggle a class that adds a color
  - this makes you erase if you pressed the same square again. 
  - the board should be able to take the parameter that will specify the number later
```js
let boardLength = 64 
for(let i = 0; i < boardLength; i++){
  for(let y = 0; y < boardLength; y++){
    let square = document.createElement("div")
    //how to add class to element in dom -> to add borders
    container.appendChild(square)
  }
}
```


#### New Sketch 
- a button that when the user clicks. shows a prompt to the user "board size 64-100"
  - should be limited to 100
  - will `makeBoard` board with the new `boardLength` 
  - everything else works the same with the new board
```js
let userInput = Number(prompt("board size 64-100", 64))
//if it didn't work break it into smaller if statements 
if( typeof userInput !== 'Number' || userInput < 64 || userInput > 100){
  userInput = Number(prompt("please write a number between 64-100", 64))
}

drawBoard(userInput)
```


## Added features

#### Clear
- a button that removes all drawing from the divs. -> loops over them and remove the bgColor class
```js
let container = document.getElementByID('container')
//? how to loop over container children in dom
let children = container.children
children.forEach(child => {
  //? how to remove class from js
  child.classList.remove("changeColor");
})
```


#### choose color 
- a button when clicked gives a color board that the user can choose from and this become the pen color
  - does this mean that `makeBoard` function should take a variable that selects the color ?
  - or do we need a global variable called penColor ?
  - but then 

#### rainbow 
- a button when clicked. makes the pen color change with each use. 
  - How will i be able to continuously change the color if it was a global variable. and to start to increment a variable and change colors each time i use pen
  - can i have multiple `draw` functions ? each one tied something `drawColor` || `drawRainbow` || `drawNormal`
  - this way there would be no need to use global variable. and the part that is shared between the 3 functions. can be separated alone and only take color. why is there 3 functions in the first place ? 
  - the main ones are `drawColor` and `drawRainbow`. why not make the `drawNormal` the one that have the shared logic. like. as if there were a default value for `drawColor` which is *black* 
  - but then again. how to tie all these functions to event lister and switch between them ?
  - can i attach a controller to the divs event listener ? this controller is the one responsible for choosing which of the 3 draw functions will be used. using a global variable ? 
  - and when i press a button from `Choose Color BTN` || `Rainbow BTN` i will only change this global variable ? and it have a default color ?

## General notes 

#### `boardLength` as a global variable
- i will need the `boardLength` to be available too in a global variable. so i can access it from any function that would need it without worry about passing it
- or -> i can find all the children of the parent container each time without needing to have the `boardLength` as a global varyable
- but logically. to have it globally is faster than calculating it each time a function needs it. 
- but then again. what am i going to do with this number ? in a function like `clear` i will need to loop over the children divs anyway to be able to remove the class from them. it's not like i'm counting them or anything.  
- is there a function that will need it to be global ? 


#### `penColor` as a global variable
- 

#### *makeBoard* and *draw* are different 
- make board is the one that makes the full grid that contains all the divs 
- draw. is the actual function tied to each div with event listeners. 
  - should be able to take colors -> penColor should be a global variable. 
  - but even then How can i make the rainbow color ? 
















