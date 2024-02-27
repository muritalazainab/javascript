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

// it creates and rerurn an array contain the value of an object
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




