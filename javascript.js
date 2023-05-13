function appendToResult(text) {
    const result = document.getElementById('result');
    result.value += text;
}

function getData() {
    result = document.getElementById('result');
    inputValue = result.value;
    return inputValue;
}

function parseData() {
    toParse = getData().split(/(\+|\-|\*|\/)/);
    console.log(toParse);

}

//function operate() {
   
    
//}


