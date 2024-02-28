// OBJECTS ARE USED TO REPRESENT REAL LIFE DATA

// OBJECT IS AN UNORDERED COLLECTION OF RELATED DATA IN FORM OF KEY AND VALUE PAIRS

const firstName = "Zainab"
const person = {

    firstName,
    surname: "Hayzed",
    age: 158,
    children:{
        firstChild: "Eef",
        secondChild: "Nafisat"

    }
}
console.log(person)

// ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT 


const human = { 
    firstName:'Abdullah',
    "DLT africa location": "pegamut"
}

human.pet ={name:"Cobra", age:3}
human.job = "headmaster"
human.favFood = "Garri"

console.log(human.firstName)
console.log(human)
console.log(human ['DLT africa location'])


// OBJECT BUILD IN METHOD

const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof! ")
    }
}
pet.petSound()

const dog = {
    name: "fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }
}
dog.listAllProperties()
// build is a properties that contain a function //

const myObject = {
    myMehod1: () => {}, // ARROW FUNCTION
    myMehod2 : function(){}, // FUNCTION DECLEARATION
   
};
const animal = {
    name: "fluffy orange",
    age: 10,
    bark: () => {
        console.log("woof woof!")
    }
}
console.log(animal.name);
animal.bark();

// ************** object method
// object.keys

//  it creates and return an array containing the keys of an object

const employees = {
    Soliu: "boss",
    Anate: "secretary",
    Seyi: "Director",
    Bode: "Sales",
    Abdullah: "Assitant",

}
const employeeInfo = Object.keys(employees)
console.log(employeeInfo)
// object.values

// it creates and rerurn an array contain the value of an objectb
const section = {
   id: 1,
    Date: "27 feb 2024",
    Device: "Mobile",
    Browser: "Chrome",
    
}
const values = Object.values(section)
console.log(values)

// object.entries
// it creates a nested array of the key and values pairs of an oject

const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}
const operatingSystemInfo = Object.entries(operatingSystem)
console.log(operatingSystemInfo)


// it prevent modification of existing properties and prevent properties from being added or remove

// ************* freeze ///////////////

const user = {
    userName: "Bro code",
    Password:"code",
}
const userInfo = Object.freeze(user)
console.log(userInfo)

userInfo.username = "Soliu"
console.log(userInfo)


// it prevent new properties from being remove or added

// SEAL PROPERTIES 

const user1 = {
    name: "Bode",
    Password:"12354",
}
const userInfo1 = Object.seal(user1)
userInfo1.surname = "Sade"
console.log(userInfo1)

let x
const persons = {
name: "Soliu",
age: 12 ,
isAdmin: true,
address: {
    street: "Babayemi",
    city:"Lagos State",
    country: "Nigeria",
},
hobbies: ["Music", "Sport"]

}
// acessing an array inside an object 

x = persons.hobbies[0]
let y = persons["hobbies"][1];
console.log(x, y)
// UPDATING A PROPERTY
persons.name = "bode"
console.log(persons )


// deleting a property we use delete keyword
delete persons.address.city
console.log(persons)

// adding a function to an object with only function

persons.greet = function(){
    console.log(`Hello, my name is ${this.name}`)
}
persons.greet();

// value and reference
//copying primitive value

// copying numbers

let x1 = 1
let y1 = x1;
x1 = 2
console.log(x1)
console.log(y1);

// copying Strings

let firstChild = "Aliyat"
const secondChild = firstChild

firstChild = "Austin";
console.log(firstChild)
console.log(secondChild)

// copying complex values


const animals = ["dogs", "cats"];
const otherAnimals = animals

animals.push("Goat");
console.log(animals === otherAnimals);
// COPY OBJECT
const data = {
    firstName: "Zainab",
    lastName: "Muritala"
} 

const otherdata = data
console.log(otherdata)

// EQUALITY 
const personOne = {
   firstName: "Soliu"
}
const personTwo = {
    firstName: "Soliu"
}
console.log(personOne === personTwo)
console.log(personOne.firstName === personTwo.firstName);

 