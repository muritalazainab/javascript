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
