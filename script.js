const number  = '7894561230';
const operator = '+-*/=';
const divShowResult = document.querySelector("#show-result");
const divTouch = document.querySelector("#touchs");
const divOperators = document.querySelector("#operators");
const divNumbers = document.querySelector("#numbers");

function createGraphic(){
    for(let i = 0; i < 4; i++){
        const buttonOperator = document.createElement("button");
        buttonOperator.textContent = operator.slice(i,i+1);
        divOperators.appendChild(buttonOperator);
    }

    for(let i = 0; i < 4; i++){
        const lineNumber = document.createElement("div");
        lineNumber.classList.add("line-number");
        lineNumber.setAttribute('style','display: flex;')
        divNumbers.appendChild(lineNumber);
        for(let j = 0; j < 3; j++){
            const buttonNumber = document.createElement("button");
            buttonNumber.textContent = number.slice(3*i + j,3*i + j + 1);
            buttonNumber.setAttribute('style','grow: 1;')
            lineNumber.appendChild(buttonNumber);
        }
        
    }
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
