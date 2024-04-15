function appendToInput(value) {
        document.querySelector('.input').value += value;
}

function clearInput() {
    document.querySelector('.input').value = '';
}

function clearAll() {
    clearInput();
    // Reset any other calculations or variables if needed
}

function calculateResult() {
    let input = document.querySelector('.input').value;
    let result = eval(input);
    document.querySelector('.input').value = result;
}

function calculateInverse() {
    let input = document.querySelector('.input').value;
    let inverse = 1 / parseFloat(input);
    document.querySelector('.input').value = inverse;
}

function square() {
    let input = document.querySelector('.input').value;
    let squared = parseFloat(input) ** 2;
    document.querySelector('.input').value = squared;
}

function squareRoot() {
    let input = document.querySelector('.input').value;
    let sqrt = Math.sqrt(parseFloat(input));
    document.querySelector('.input').value = sqrt;
}
