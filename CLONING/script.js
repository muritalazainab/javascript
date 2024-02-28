// CLONING
// shallow cloning  // to create a new object that copies the top level
//  structure of the original object but not in its nested object of array,
//  in other word if the original object or array contains nested object 
//  or array, the shallow cloe will create new reference to those 
//  nested object rather than creating new copies. when u have nested object inside an object
//  the reference here will tamper the child object instead of the Main object 

console.log("Hello world")

const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}
const otherperson = person;
 person.firstName = "Makelele"

 console.log(person)
 console.log(person === otherperson)
 
 // spread operator (...)
//  const numbers = [1,2,3,4,5,6];
//  const newNunber = [...numbers];
//  console.log(...numbers);

 // to check the equality 

 const numbers = [1,2,3,4,5,6];
 const copiedNumber = numbers
 const newNunber = [...numbers];

 numbers.push(7)
 console.log(numbers === copiedNumber);
 console.log(numbers === newNunber);
 const numbers$ = numbers.slice(2,4)
 console.log(numbers$)
 console.log(numbers)
 console.log(copiedNumber)
 console.log(newNunber)

 // OBJECT CLONING

 const personDetails = {
    name: "Zainab",
    age: 40
 }
 const changeDetails ={...personDetails}
 personDetails.age = 18
 console.log(personDetails);

 console.log(changeDetails);

 // ASSIGN OBJECT
 const original = {
    name: "Bash",
    age: 20,
    address: {
        city: 'pegamut',
        state:"Ogun",
    }
 }

  const cloneobj = Object.assign({}, original)
 cloneobj.name = "Naphy";
 cloneobj.address.city = "Elejigbo"
 console.log(original);
 console.log(cloneobj);

 // SPREADING OPERATOR

 const arr1 = [1,2,3,4]
 const arr2 = [4,5,6,7]

 const merged = [...arr1, ...arr2]
 console.log(merged);


 const text = {name: "bode"};
 const numb = [1,2,3,4];
text.name = "Hayzed"
numb.push(7)
 const cloneMerged = {...text, ...numb }
 console.log(cloneMerged)

///  DEEP CLONE ///

//deep clone is an object in javascript. this means creating a new oject that is
//  entirely sepearated from the original object, such that change in the 
// new object do not affect the original and vice versa. this will creste a new object but
//  nested object will still be reference to the original one

const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        wheel: 4,
        color: "red",
    }
}

// const newDetails = {...details}
// newDetails.firstName = "mike",
// newDetails.car.color = "blue"


// console.log(details);
// console.log(newDetails)


// JSON 


// the json.stringify method convert a js object or any format
//  to string and during this process all the reference are destroy

const stringifiedDetails = JSON.stringify(details)
console.log(stringifiedDetails)
const newDetails = JSON.parse(stringifiedDetails)
console.log(newDetails)
  

const originalObj ={
    name : "zainab",
    age : 12,
    address : {
        local :"agege wa",
        area: 'baba yemi'
    }
}

const cloneObj = JSON.parse(JSON.stringify(originalObj));
cloneObj.name = 'soliu'
cloneObj.age = 54
cloneObj.address.local = 'pegamut'
cloneObj.address.area = "mujayyidun"

console.log(originalObj)
console.log(cloneObj) 