//the main arithmetic functions//

function add(numberOne, numberTwo) {
    
    return numberOne+numberTwo;
}
function subtract (numberOne, numberTwo) {
    
    return numberOne-numberTwo;
}
function multiply(numberOne, numberTwo) {
    
    return numberOne*numberTwo;
}

function divide (numberOne, numberTwo) {
    
    return numberOne/numberTwo;
}

// the function that does something with the arithmetic functions

function operate(operation, numberOne, numberTwo){
    if (operation==="add"){
        return add(numberOne,numberTwo);
    }
    if (operation==="subtract"){
        return subtract(numberOne,numberTwo);
    }
    if (operation==="multiply"){
        return multiply(numberOne,numberTwo);
    }
    if (operation==="divide"){
        return divide(numberOne,numberTwo);
    }
}
// A variable to keep the values entered by the user before starting the operation
// 
// 
// 

//populating the calculator LCD screen
const node = document.createElement("div");
node.id="calculator";
function appendNumber(theNumber) {   
        // Create a text node:
    const textnode = document.createTextNode(theNumber);
    node.appendChild(textnode);     
    document.getElementById("lcd-screen").appendChild(node);
}

// populating the numbers keypad with event listeners:
  let el = "";
  let keyPad = "num";
    for (let i=0; i<10; i++){
    
      let keyPadNumber = el+i;
      let keyPadValue = keyPad+i;
        keyPadNumber = document.getElementById(keyPadValue);
        keyPadNumber.addEventListener(
        "click",
        function () {
          appendNumber(i);
        }
    );
}

// All Clear button logic
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener(
    "click",
    function (){
      myClearFunction();
    }
  );

function myClearFunction() { 
  const element = document.getElementById("calculator");
  element.innerHTML = '';
}
// Delete Last Digit (CE) button logic

const clearEntryButton = document.getElementById("clear-entry-button");
clearEntryButton.addEventListener(
  "click",
  function(){
    const element = document.getElementById("calculator");
    element.removeChild(element.lastChild);
  }
)

// console.log(add(1,2))
// console.log(subtract(1,2))
// console.log(multiply(13,2))
// console.log(divide(13,29))
// console.log(operate("add",1,2));
// console.log(operate("subtract",1,2));
// console.log(operate("multiply",13,2));
// console.log(operate("divide",13,29));
