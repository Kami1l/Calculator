// Declaration of the buttons for calculating

const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const mathSigns = document.querySelectorAll('.mathSigns');

const equalButton = document.querySelector('.equalSigns');

const clearButton = document.querySelector('.clear');

const clearHistoryButton = document.querySelector('.clearHistory');

const calcHistory = document.querySelectorAll('.historyContent');

let result = '';

// Functions responsible for calculating

function displayNumbers() {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '0.';

    console.log( currentNumber.innerHTML)
    currentNumber.innerHTML += this.textContent;
}

function operate(){
    if(currentNumber.innerHTML == '' && this.textContent === '-'){
        currentNumber.innerHTML = '-';
        return;
    }else if(currentNumber.innerHTML === ''){
        return;
    }

    if(mathSign.innerHTML !== ''){
        showResults();
    }

    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
    
}

function showResults() {
    if(this.textContent === '='){

        let a = currentNumber.innerHTML;
        let b = previousNumber.innerHTML;
        let operator = mathSign.innerHTML;

        switch (operator){
            case '+':
                result = parseFloat(b) + parseFloat(a);
                break;
            case '-':
                result = parseFloat(b) - parseFloat(a);
                break;
            case 'X':
                result = parseFloat(b) * parseFloat(a);
                break;
            case ':':
                result = parseFloat(b) / parseFloat(a);
                break;
            case '2^':
                result = parseFloat(b) ** parseFloat(a);
                break;
            case '√':
                result = Math.sqrt(parseFloat(b));
                break;
        }
        if(operator === "√"){
            history(a,b,operator,result);
        }else{
            history(b,a,operator,result);
        }
        clearScreen();
        currentNumber.innerHTML = result;
    }
}

function clearScreen() {
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    if(this.textContent === "C"){
        currentNumber.innerHTML = '';
        previousNumber.innerHTML = '';
        mathSign.innerHTML = '';
    }
}

function history(pre,cur,math,res){
    calcHistory.forEach((el)=>{
        return el.innerHTML += pre + math + cur + " = " + res + "<br>";
    })
   
}

function clearHistory(){
    calcHistory.forEach((el)=>{
        el.innerHTML = '';
    })
}

// Monitoring the click event

mathSigns.forEach((el) => {
    el.addEventListener('click',operate)

});

equalButton.addEventListener('click',showResults)

clearButton.addEventListener('click',clearScreen)

clearHistoryButton.addEventListener('click',clearHistory);

numbersButtons.forEach((el) => el.addEventListener('click',displayNumbers));




