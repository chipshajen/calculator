let displayedNumber = '';

let firstNumber
let operator = ''
let secondNumber = ''

const display = document.querySelector('.display')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

const equalButton = document.querySelector('#equal-button')

equalButton.addEventListener('click', () => {
    let newNumber = operate(operator, +firstNumber, +secondNumber)

    display.textContent = displayedNumber = newNumber
      
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if(operator === ''){
            displayedNumber += button.textContent;

            updateDisplay(displayedNumber)
        } else {
            secondNumber += button.textContent
        }
        
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(displayedNumber !== ''){
            firstNumber = +displayedNumber
            operator = button.textContent

            console.log(firstNumber + ' ' + operator)
        } else {
            alert("Enter numbers stupido")
        }
    })
})

function updateDisplay(string){
    display.textContent = string
}

function operate(operator, a, b){
    switch(operator){
        case "+":
            return add(a, b)
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
    }
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b
}