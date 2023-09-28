/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    const number1 = parseInt(document.querySelector("#add1").value);
    
    const number2 = parseInt(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (subtract1, subtract2){
    return subtract1 - subtract2;
}

const subtractNumbers = function (){
    const subtract1 = parseInt(document.querySelector("#subtract1").value);

    const subtract2 = parseInt(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2)=> factor1 * factor2;

const multiplyNumbers = () => {
    const factor1 = parseInt(document.querySelector("#factor1").value);

    const factor2 = parseInt(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () =>{
    const dividend = parseInt(document.querySelector("#dividend").value);

    const divisor = parseInt(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const currentDate = new Date();

var currentYear;

currentYear = currentDate.getFullYear();

document.querySelector("#year").value = currentYear;

/* ARRAY METHODS - Functional Programming */

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArray.filter((number)=> number % 2 == 0);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArray.filter((number)=> number % 2 != 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((total, current)=>total+current);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArray.map((number)=>number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map((number)=>number*2).
                                                                    reduce((total,current)=>total + current);
