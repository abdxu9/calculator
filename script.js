const numbers  = `7894561230c`;
const operators = '+-*/=';

const divDisplay = document.querySelector("#display");
const divTouchs = document.querySelector("#touchs");
const divOperators = document.querySelector("#operators");
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
    parseInt(numberOne);
    parseInt(numberTwo);

    switch(operator){
        case('+'):
            return add(numberOne,numberTwo);
        case('-'):
            return subtract(numberOne,numberTwo);
        case('*'):
            return multiply(numberOne,numberTwo);
        case('/'):
            return divide(numberOne,numberTwo);
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
                numberPressed += buttonText;
                divDisplay.textContent = numberPressed
            }
            else if(operators.includes(buttonText) && buttonText !== '='){
                operatorPressed += buttonText;
                divDisplay.textContent = operatorPressed
                numberOne = numberPressed;
                numberPressed='';
            }
            else if(buttonText === '='){
                numberTwo = numberPressed
                const result = operate(operatorPressed,numberOne, numberTwo);
                divDisplay.textContent+= `${result}`;
                numberPressed = result.toString();
                operatorPressed = '';
            }
        });
    })

}



function createGraphic(){
    for(let i = 0; i < operators.length; i++){
        const buttonOperator = document.createElement("button");
        buttonOperator.textContent = operators.slice(i,i+1);
        buttonOperator.setAttribute('style','grow: 1; height: 50px; width: 50px;')
        divOperators.appendChild(buttonOperator);
    }

    for(let i = 0; i < 4; i++){
        const lineNumber = document.createElement("div");
        lineNumber.classList.add("line-number");
        lineNumber.setAttribute('style','display: flex;')
        divNumbers.appendChild(lineNumber);
        for(let j = 0; j < 3; j++){
            const buttonNumber = document.createElement("button");
            buttonNumber.textContent = numbers.slice(3*i + j,3*i + j + 1);
            buttonNumber.setAttribute('style','grow: 1; height: 50px; width: 50px;')
            lineNumber.appendChild(buttonNumber);
        }
        
    }



displayedUserPresses();
/*--------------------------------*/
/*--------------------------------*/
/*--------------------------------*/
/*---7---8---9---*/ /*+*/
/*---4---5---6---*/ /*-*/
/*---1---2---3---*/ /*'*'*/
/*---0-----------*/ /*'/'*/
/*----------------/ /*=*/
}

createGraphic();
