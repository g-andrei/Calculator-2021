const firstOperand = document.getElementById('firstOperandValue');
const secondOperand = document.getElementById('secondOperandValue');

const addButton = document.getElementById('add');
const divButton = document.getElementById('div');
const subButton = document.getElementById('sub');
const mulButton = document.getElementById('mul');
const showReulst = document.querySelector('.result-here')


function Calculator() {
    this.x;
    this.y;

    this.read = function(x, y) {
        this.x = x;
        this.y = y;
    };

    this.showNumbers = function() {
        console.log(`x: ${this.x}, y: ${this.y}`);
    };

    this.sum = function() {
        showReulst.textContent = this.x + this.y;
        return this.x + this.y;
    };

    this.diff = function() {
        showReulst.textContent = this.x - this.y;
        return this.x - this.y;
    };

    this.multiply = function() {
        showReulst.textContent = this.x * this.y;
        return this.x * this.y;
    };

    this.divide = function() {
        showReulst.textContent = this.x / this.y;
        return this.x / this.y;
    };
}

let calculator = new Calculator();

addButton.addEventListener("click", function() {
    calculator.read(parseInt(firstOperand.value), parseInt(secondOperand.value));
    calculator.sum();
});

subButton.addEventListener("click", function() {
    calculator.read(parseInt(firstOperand.value), parseInt(secondOperand.value));
    calculator.diff();
});

mulButton.addEventListener("click", function() {
    calculator.read(parseInt(firstOperand.value), parseInt(secondOperand.value));
    calculator.multiply();
});

divButton.addEventListener("click", function() {
    calculator.read(parseInt(firstOperand.value), parseInt(secondOperand.value));
    calculator.divide();
});