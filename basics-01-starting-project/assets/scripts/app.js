const defaultResult = 0;
let currentResults = defaultResult;
let logEntries = [];


//get inputs from input field 
function getUserNumberInput() {
    return parseInt(userInput.value);
}

//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResults, calcDescription);
}

function writeToLog(
    opeartionIdentifier, 
    prevResult, 
    operationNumber, 
    newResult
 ) {
    const logEntry = {
        operation: opeartionIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
 }


function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResults;
    let mathOperator;
    
    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        !enteredNumber
    ) {
        return;

    }
    

    if (calculationType === 'ADD'){
        currentResults += enteredNumber;
        mathOperator = '+';
        
    } else if (calculationType === 'SUBTRACT') {
        currentResults -= enteredNumber;
        mathOperator = '-';

    } else if (calculationType === 'MULTIPLY') {
        currentResults *= enteredNumber;
        mathOperator = '*';

    } else if (calculationType === 'DIVIDE') {
        currentResults /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResults);

}


// function add(){
//     calculateResult('ADD');
// }

// function subtract(){
//     calculateResult('SUBTRACT');
// }

// function multiply(){
//     calculateResult('MULTIPLY');
// }

// function divide(){
//     calculateResult('DIVIDE');
// }

// function calculate(operation){
    
// }

addBtn.addEventListener('click', calculateResult.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click', calculateResult.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click', calculateResult.bind(this,'DIVIDE'));