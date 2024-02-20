
function square(number) {
    
}

square()   //function call /invocation
const nameFunction = function(params){

}
// arrow function
const arrowFn = () => {}

function sayHello(firstName) {
console.log(`Hello ${firstName}`);
}

sayHello('Hayzed');


const wassup = (surname) => {
    console.log(`wassup $ {surname}`)
}
wassup ('Muritala');

const division = (number) => {
    return number / number;
    
}
const answer = division(4)
console.log(answer)

const square2 = number => {return number * number}
const square3 = number =>  number * number


function add(number){
    
}

const  tutor = (firstNumber, lastnumber) => {
    return firstNumber - lastnumber;

}
const result = tutor(10, 8)
console.log(result)

// nested function

function getScore() {
    const nun1 = 2;
    const nun2 = 3;
    const name = "DLT AFRICA"

    function add() {
        return `${name} is ${nun1 + nun2} years old`;

    }
    return add();
}
console.log(getScore())



// const nestedFunction = (a, b, c) => {
// const anotherFunction = () => {
// return `${a + b + c}`;
// }
   
//     return anotherFunction();
// };
// console.log(nestedFunction(2, 4, 6));


function  nestedFunction(number1, number2)  {

    let sum = number1 + number2
    return number1 + number2 >= 10? `sum is greater than or equal to 10` : number1 + number2

}
console.log(nestedFunction(10, 10))


const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}
const even = isEven(6)
console.log(even)

function isprime(number){
    if (number <= 1){
        return false;
    }
        for (let index = 2; index <= Math.sqrt(number); index++) {
           if(number % index === 0){
            return false;
           }
            
        }

        return true;
    }
    const prime = isprime(3)
    console.log(prime)


    function isValidEmail(email){
        return email.includes('@') ? true : false;
    }
    console.log(isValidEmail("bro code"))







