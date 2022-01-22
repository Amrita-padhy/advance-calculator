export default class Calculator {
    constructor(primaryOperantDisplay, secondaryOperantDisplay, OperationDisplay) {
        this.primaryOperantDisplay = primaryOperantDisplay
        this.secondaryOperantDisplay = secondaryOperantDisplay
        this.OperationDisplay = OperationDisplay
        this.clear()
    }
    dataValue = '';
    get primaryOperand() {
        // console.log(this.primaryOperantDisplay.dataset.value);
        return parseFloat(this.primaryOperantDisplay.textContent)
        
    }

    set primaryOperand(value) {
        // console.log(value);
        // this.primaryOperantDisplay.dataset.value = value
        // console.log(this.primaryOperantDisplay.dataset.value);
        this.primaryOperantDisplay.textContent = value
    }
    set secondaryOperand(value) {
        this.secondaryOperantDisplay.textContent =  (value ?? "")
    }
    set Operation(value) {
        this.secondaryOperantDisplay.textContent =  (value ?? "")
    }





    addDigit(digit) {
        if (this.primaryOperand  === 0) {
            this.primaryOperand = digit
            return
        }
        this.primaryOperand = this.primaryOperand.toString() + digit
    }

    clear() {
        this.primaryOperantDisplay.textContent = 0
        this.secondaryOperantDisplay.textContent = null
        this.OperationDisplay.textContent = null
    }
}


const NUMBER_FORMATTER = new Intl.NumberFormat("en",{
    maximumFractionDigits: 20,
})



function displayNumber(number) {
   return NUMBER_FORMATTER.format(number) 
}