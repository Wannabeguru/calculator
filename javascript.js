function appendToResult(text) {
    const result = document.getElementById('result');
    result.value += text;
}

function getData() {
    const result = document.getElementById('result');
    const inputValue = result.value;
    return inputValue;
}

    

function operate() {
    const input = getData();
    const substrings = input.split((/(\+|\-|\*|\/)/));

    const numbers = [];
    const operators = [];

    substrings.forEach(substring => {
        if (!isNaN(substring)) {
            const number = parseFloat(substring);
            numbers.push(number);
        } else if (['+', '-', '*', '/'].includes(substring)) {
            operators.push(substring);
        }
    });
    //preform calculations based on extracted numbers and operators
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        const operator = operators[i - 1];
        if (operator === '+'){
            result += numbers[i];
        } else if (operator === '-'){
            result -= numbers[i];
        } else if (operator === '*'){
            result *= numbers[i];
        } else if (operator === '/') {
            result /= numbers[i];
        }
    }
    return result; //returns the calculated result
}

function calculate (){
    const result = operate();
    const resultElement = document.getElementById('result');
    resultElement.value = result;
}


function clearResult() {
    const resultElement = document.getElementById('result');
    resultElement.value = '';
}




    


