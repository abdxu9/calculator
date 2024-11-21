const numbers  = `7894561230.c`;
const operators = '+-*/=';

const divDisplay = document.querySelector("#display");
const divTouchs = document.querySelector("#touchs");
const divOperators = document.querySelector("#operators");
console.log(divOperators)
const divNumbers = document.querySelector("#numbers");

function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo){
    return numberOne / numberTwo;
}

function operate(operator, numberOne, numberTwo){
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    switch(operator){
        case('+'):
            return add(numberOne,numberTwo);
        case('-'):
            return subtract(numberOne,numberTwo);
        case('*'):
            return multiply(numberOne,numberTwo);
        case('/'):
            return divide(numberOne,numberTwo);
        default:
            return null;
    }    
}

function displayedUserPresses(){
    const buttons = document.querySelectorAll("button");

    let numberPressed = '';
    let operatorPressed = '';

    buttons.forEach(button =>{
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if(button.textContent ==='c'){
                divDisplay.textContent = ''
                numberPressed=''
                operatorPressed=''
            }
            else if(numbers.includes(buttonText)){
                if(buttonText === '.')
                {
                    button.disabled = true;
                }
                numberPressed += buttonText;
                divDisplay.textContent = numberPressed
            }
            else if(operators.includes(buttonText) && buttonText !== '='){
                operatorPressed += buttonText;
                numberOne = numberPressed;
                numberPressed='';
            }
            else if(buttonText === '='){
                numberTwo = numberPressed
                const result = operate(operatorPressed,numberOne, numberTwo);
                if(!Number.isInteger(result)){
                    divDisplay.textContent = `${result.toFixed(3)}`;
                }
                else{
                    divDisplay.textContent = `${result}`;
                }
                numberPressed = result.toString();
                operatorPressed = '';
            }
        });
    })

}

displayedUserPresses()