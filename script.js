
import Calculator from "./Calculator.js"


const primaryOperantDisplay = document.querySelector("[data_primary_operant]")
const secondaryOperantDisplay  = document.querySelector(".secondary_operant")
const OperationDisplay = document.querySelector(".secondary_operation")


const calculator = new Calculator(
    primaryOperantDisplay,
    secondaryOperantDisplay,
    OperationDisplay
    )


// 2-click clear button
document.addEventListener("click",e => {
    if (e.target.matches("[data_all_clear]")) {
        calculator.clear()
    }
    // 1-check a number
    if (e.target.matches("[data_number]")) {
        console.log(e.target);
        calculator.addDigit(e.target.textContent)
        // console.log("click");
    }
    // 3-click delete button
    if (e.target.matches("[data_delete]")) {
        calculator.removeDigit()
    }
    // 4-click an operation
    if (e.target.matches("[data_operation]")) {
        calculator.chooseOperation(e.target.textContent)
    }
    // 6-click equals
    if (e.target.matches("[data_equals]")) {
        calculator.evaluate()
    }   
    // 5-click the period button
    
})

