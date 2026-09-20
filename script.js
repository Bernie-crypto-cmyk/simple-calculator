const display = document.querySelector('#display');
const answer = document.querySelector('#answer');

const backspace = document.querySelector('#backspace');
const plus = document.querySelector('#plus');
const clear = document.querySelector('#clear');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const dot = document.querySelector('#dot');
const zero = document.querySelector('#zero');
const equals = document.querySelector('#equals');

let currentValue = "";

clear.addEventListener('click', () =>{
    currentValue = "";
    display.textContent = currentValue;
    answer.textContent = currentValue;
});

backspace.addEventListener('click', () =>{
    currentValue = currentValue.slice(0,-1);
    currentValue == "" ? display.textContent = "0" : display.textContent = currentValue;
});

plus.addEventListener('click', () =>{
    currentValue += "+";
    display.textContent = currentValue;
});

minus.addEventListener('click', () =>{
    currentValue += "-";
    display.textContent = currentValue;
});

multiply.addEventListener('click', () =>{
    currentValue += "×";
    display.textContent = currentValue;
});

divide.addEventListener('click', () =>{
    currentValue += "÷";
    display.textContent = currentValue;
});

one.addEventListener('click', () =>{
    currentValue += "1";
    display.textContent = currentValue;
});

two.addEventListener('click', () =>{
    currentValue += "2";
    display.textContent = currentValue;
});

three.addEventListener('click', () =>{
    currentValue += "3";
    display.textContent = currentValue;
});

four.addEventListener('click', () =>{
    currentValue += "4";
    display.textContent = currentValue;
});

five.addEventListener('click', () =>{
    currentValue += "5";
    display.textContent = currentValue;
});

six.addEventListener('click', () =>{
    currentValue += "6";
    display.textContent = currentValue;
});

seven.addEventListener('click', () =>{
    currentValue += "7";
    display.textContent = currentValue;
});

eight.addEventListener('click', () =>{
    currentValue += "8";
    display.textContent = currentValue;
});

nine.addEventListener('click', () =>{
    currentValue += "9";
    display.textContent= currentValue;
});

zero.addEventListener('click', () =>{
    currentValue += "0";
    display.textContent = currentValue;
});

dot.addEventListener('click', () =>{
    currentValue += ".";
    display.textContent= currentValue;
});

equals.addEventListener('click', () =>{
    let correctedCurrentValue = currentValue.replace(/×/g, '*').replace(/÷/g, '/');
    try{
        let result = eval(correctedCurrentValue);
        answer.textContent = result;
        currentValue = result.toString();
    }
    catch(error){
        display.textContent = "Error";
        currentValue = "";
    }
});
