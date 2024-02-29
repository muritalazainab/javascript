// oop - object oriented programming

// with a function expression cal a area of rectangle 

// const calculateRectangleArea = function(length, width) {
//     return length * width;
// };

// const length = 5;
// const width = 10;
// const area = calculateRectangleArea(length, width);
// console.log("The area of the rectangle is: " + area);

// object literal

let person = {
    first_name: "Salman",
    last_name: "Kofoshi",
    getFunction : function() {
        return `My name is ${person.first_name} ${person.last_name}`
    },

    phoneNumber : {
        mobile: "12345",
        landline: "6789" 
    }
}
console.log(person.getFunction())


// object constructor

function personTwo(first_name, last_name){
    this.first_name = first_name,
    this.last_name = last_name
}

let person1 = new personTwo("Hayzed", "Mabolulu");
console.log(person1)


// THE NEW KEYWORD

// the new keyword creates a new empty object

const student = {}  // simple object

const studentTwo = Object()
console.log(student)
console.log(studentTwo)

const arr = [1, 2, 3];
const newArr = (1, 2, 3)
console.log(arr, newArr)

// DATE
const myBaiday = new Date();

console.log(myBaiday)
const myNumber = new Number(100.00)
console.log(myNumber.toFixed(0))

// THIS KEYWORD 

function Sentence(words){
    this.words = words
    console.log(this)
}
const $_ = new Sentence(`Hello there! We're learning about this keyword`) 

function Car(color, brand, wheels, ){
    this.color = color
    this.brand = brand
    this.wheels = wheels
    console.log(this)
}
const blueCar = new Car("blue", "BMW", "4")


function Cohorts(name, age, favFood, phoneNo, baiday){
    this.name = name
    this.age = age
    this.favFood = favFood
    this.phoneNo = phoneNo
    this.baiday = baiday
    console.log(this)
}
const instance = new Cohorts("Abdullahi", 20, "rice", 1234, new Date("17, may, 2005"));
const instance1 = new Cohorts("Anate", 10, "beans", 45678, new Date("1, march, 2002"));
const instance2 = new Cohorts("Seyi", 30, "yam", 3456, new Date("10, september, 2001"));
 

 // CLASS KEYWORD

//  A CLASS  IS AN OBJECT  SCHEMA THAT CAN SAVE MANY VALUES 
// CLASS DECLARATION

class Shapel{
    constructor(width, height){
        this.width = width
        this.height = height
        console.log(this)
    }
}
const area = new Shapel(10, 2)


// class expression
// ANNOYMOUS
const Shape = class{
    constructor(width, height){
        this.width = width
        this.height = height
        console.log(this)
    }
}
const area1 = new Shapel(10, 2)

// II
const BigBoy = class Bigie {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    // getter function
    get him() {
        return this.coder();
    }
    // MEthod 
    coder(){
        return {name: this.name, age: this.age}
    }
}
const instance$ = new BigBoy("Paiko", 40)
console.log(instance$.him)


const School = class Academy{
    constructor(name, location){
        this.name = name
        this.location = location
    }
    get principal (){
        return this.seniorBoy()
    }
    seniorBoy(){
        return {name: this.name, location:this.location}
    }
}
const headMaster = new School("Hayzed", "Pegamut")
console.log(headMaster.principal)


// claswork


const RectShape = class geometry{
    constructor(length, breath){
        this.length = length
        this.breath = breath
    }
    get calculate (){
        return this.rectangle()
    }
    rectangle(){
        return { area: this.breath *   this.length}
    }
}
const $Shape = new RectShape(10, 5)
console.log($Shape.calculate)