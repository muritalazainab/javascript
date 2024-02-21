// const  name = "zainab"
// const age = 17;
// const school = "Agege private school, orile";
// const one  = () => {

// return` ${name} of ${age} years attented ${school}`;
// }

// const answer = one()
// console.log(answer)

// const file = () => {
//     return $`{name} likes eating ${age} wraps of Semo in ${school}`
// }

// const sentence = file();
// console.log(sentence)
// // local scope
// const localScope = () => {
// const name = "oloye pupo";
// const religion = "Muslim";
// const activity = "Drinking of wine!";
// return `${name} who is a ${religion} enjoys ${activity}`;


// }
// const oloye = localScope()
// console.log(oloye)


// // block scope
// const religion = "christian"

// const exampleThree = () => {
//     const name = "chima"
//     //block scope

//     if (true){
//         const schoolName = "LASU"

//          console.log(`${name} is a ${religion} and goes to ${schoolName}`)
//     }
    

       
// }
// exampleThree()





///  HOISTING
const result = exampleFive()
console.log(result)

function exampleFive(){
    return 2 + 2
}

var g
g = 4
console.log(g)

//CLOSURE  // THE SCOPE REGARDING A FUNCTION INSIDE A FUNCTION


const outerFuncion = () => {
    const ben = 5

    const innerfunction = () => {
        const man = 7 
        return ben + man

    } 
    const final = innerfunction()
    console.log(final * 2)

}
 outerFuncion()

const firstFuncion = () => {
    const div = 2

    const secondFunction = () => {
        const condition = 2 
        let certainNumber
        const mult = 4
        
    if (condition) {
        certainNumber = 5 
    } 
    
    const ans = certainNumber * mult
    return ans
    } 

    const initialAnswer =  secondFunction ()
    const finalAnswer = initialAnswer / div
    console.log(finalAnswer)
}
 firstFuncion()




 

