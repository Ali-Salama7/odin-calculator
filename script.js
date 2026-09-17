// let firstNumber
// let secondNumber
// let op
let btns = document.querySelectorAll("button.btn")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent)
    })
})

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

// console.log(operate(2, 3, '+'))