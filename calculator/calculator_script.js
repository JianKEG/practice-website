const display = document.getElementById('display');

function appendNumber(input){
    display.value += input;
}

function appendOperator(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        result = 'Error';
    }
}