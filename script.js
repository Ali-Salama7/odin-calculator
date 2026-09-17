let firstNumber = ''
let secondNumber = ''
let op = ''
let currentInput = "0"

const btns = document.querySelectorAll(".btn")
const screenDisplay = document.querySelector(".screen")
// const operators = document.querySelectorAll(".operator")
// const equalOperator = document.querySelector(".equal")
// const clear = document.querySelector(".clear")

const add = (num1, num2) => { return num1 + num2 }

const substract = (num1, num2) => { return num1 - num2 }

const multiply = (num1, num2) => { return num1 * num2 }

const divide = (num1, num2) => { return num1 / num2 }

const operate = (a, b, op) => {
    switch(op){
        case '+': return add(a,b)            
        case '-': return substract(a,b)
        case '*': return multiply(a,b)
        case '/':
            if(b === 0) return "Math Error"
            return divide(a,b)
        default: return "Wrong Operation"        
    }
}

const updateDisplay = (digit) => {
    if(currentInput === "0" || currentInput === firstNumber){
        currentInput = digit
    }else{
        currentInput += digit
    }
    screenDisplay.value = currentInput
}

const handleNumber = (value) => {
    updateDisplay(value)
}

const handleOperator = (value) => {
    firstNumber = currentInput
    op = value
    currentInput = ""
}

const handleCalc = () => {
    if(firstNumber === "" || op === "") return
    secondNumber = currentInput

    let result = operate(Number(firstNumber), Number(secondNumber), op)
    screenDisplay.value = result
    currentInput = String(result)
    firstNumber = ""
    op = ""
}

const handleClear = () => {
    currentInput = "0"
    firstNumber = ""
    secondNumber = ""
    op = ""
    screenDisplay.value = "0"
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.textContent
        const isOperator = btn.classList.contains("operator")
        const isEqual = value === "="
        const isClear = value === "C"

        if(isClear){
            handleClear()
        } else if(isEqual){
            handleCalc()
        } else if(isOperator){
            handleOperator(value)
        }else{
            handleNumber(value)
        }

    })
})