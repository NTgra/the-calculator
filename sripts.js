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

//
const element = document.createElement("div");
function appendNumber(theNumber) {   
    

    //console.log(theNumber)
        // Create a text node:
    const textnode = document.createTextNode(theNumber);
    
    //console.log(workingNumber);
    node.appendChild(textnode);
        
    document.getElementById("lcd-screen").appendChild(element);
}
// populating the numbers keypad with event listeners:
  let el = "";
  let keyPad = "num";
for (let i=0; i<10; i++){
  
  let keyPadNumber = el+i;
  let keyPadValue = keyPad+i;
    // console.log(keyPadNumber + " " + keyPadValue)
    keyPadNumber = document.getElementById(keyPadValue);
    keyPadNumber.addEventListener(
    "click",
    function () {
      appendNumber(i);
    }
  );
}


// console.log(add(1,2))
// console.log(subtract(1,2))
// console.log(multiply(13,2))
// console.log(divide(13,29))
// console.log(operate("add",1,2));
// console.log(operate("subtract",1,2));
// console.log(operate("multiply",13,2));
// console.log(operate("divide",13,29));
