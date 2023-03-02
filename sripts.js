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

console.log(add(1,2))
console.log(subtract(1,2))
console.log(multiply(13,2))
console.log(divide(13,29))
console.log(operate("add",1,2));
console.log(operate("subtract",1,2));
console.log(operate("multiply",13,2));
console.log(operate("divide",13,29));
