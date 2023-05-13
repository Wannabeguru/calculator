function appendToResult(text) {
    const result = document.getElementById('result');
    result.value += text;
}

function getData() {
    result = document.getElementById('result');
    inputValue = result.value;
    return inputValue;
}

    

function operate() {
    input = getData();
    const substrings = input.split((/(\+|\-|\*|\/)/));

    const numbers = [];
    const operators = [];

    substrings.forEach(substring => {
        if (!NaN(substring)) {
            const number = parseFloat(substring);
            numbers.push(number);
        } else if (['+', '-', '*', '/'].includes(substring)) {
            operators.push(substring);
        }
    });
}
    


