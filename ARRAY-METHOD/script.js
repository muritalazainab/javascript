// const cohort = ["Soliu", "Zainab", "Nafisat"," Basitat"]
// console.log(cohort)

// const change = (cohort[1] = 'opeyemi')
// cohort[5] = "seyi"

// for(let i = 0; i < cohort.length; i++){
//     console.log(i, cohort[i])
//   }
//   for(const ES6 of cohort){ 
//     console.log(ES6)
//   } 

// const nestesdArray = [[1,2], [3,4], [5,6]]

// const newArr = nestesdArray[0][0]
// console.log(newArr)

// const object = {
//     name : "John", 
//     age : 60
// }
// console.log(object)

// const arr = [ 
//     "Banana",
//     10000, 
//     {name : "bode",
//     age : 80
// },
// function name () {}
// ]
// console.log(typeof arr)


//   //**************** push method () ******************** // 
//   const student = ["Grace", "yemi", "sola","fola"];
//   const pushed = student.push("Babe", "zainab")
// console.log(pushed);

// //*****************/ pop method() *************************//
// const numbers = [3,4,5,6,7,8,9]
// console.log(numbers)
// numbers.pop();
// console.log(numbers)
  

// // ******************* SHIFT () ************************* //

// const colors = ["Violent", "red", "Blue", "Black"]

// const shift = colors.shift()
// console.log(shift)
// console.log(colors)

// //***********************  UNSHIFT() *************************************** */

// const months = ["March", "july", "september", "January"]

// const newMonth = months.unshift("feb")
// console.log(newMonth)
// console.log(months)
// // ********************** SPLICE() ****************************** //
// const fruit =["Apple", "Mango", 'Pawpaw', 'Cashew'] 
// console.log(fruit)
// fruit.splice(2, 0, "watermelon", "banana")
// console.log(fruit)

// const wears = ["Gucci", "Versace", "Nike", "D&G", "Nike", "LV"]
// console.log(wears);
// wears.splice(3)
// console.log(wears);

// const drinks = ["coke", "viju", "Gin", "Exotic", "bobo"];
// console.log(drinks);
// drinks.splice(2, 1)
// console.log(drinks)

// // *******************  SLICE() ************************ //

// const men = ["Turmise","Kenny" , "Soliu", "Bode", "Abee", "Hayzed"]
// console.log(men)
// const threeMen = men.slice(2, 5)
// console.log(threeMen)

// const newString = "Zainab"
// console.log(newString.length)
// const newSlice = newString.slice(2, 5)
// console.log(newSlice)

// // ***************  toSTRING() ***************************//

// const mensString  = men.toString()
// console.log(mensString)

// const menString  = men.includes("zainab")
// console.log(menString)

// // ***************** sort() *************************//

// men.sort();
// console.log(men)


// const numberAscending = [1, 3, 8, 15, 90, 100, 0, 7]
// numberAscending.sort((a, b) => a - b);
// console.log(numberAscending)

// const numberDecendig = [1, 3, 8, 15, 90, 100, 0, 7]
// numberDecendig.sort((b, a) => b - a);
// console.log(numberDecendig)

// // **************** indexof() *****************//
// const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2]
//         console.log($number);

//         const indexOne = $number.indexOf(2)
//         console.log(indexOne);
// const tutor = ["Abdullah", "Naheem", "Anate", "Seyi", "Soliu"]
// const indexTt = tutor.indexOf("Anate")
// console.log(indexTt)


// const lastIndex = $number.lastIndexOf(2);
// console.log(lastIndex)

// //*********************  loop() ************//
// const _names = ["Zainab", "Bashirat", "Nafisat"];
// //************ES5************************ */
// for(let i = 0; i < _names.length; i++) {
//   console.log(i, _names[i]);
// }

// // *********ES6 **************//
// for(const _name of _names){
//   console.log(_name);
// }

// //*********************  foreach() ************/
// _names.forEach(function() {});


// _names.forEach((name, i, arr) => {
//   console.log(name.toUpperCase());
//   // console.log(i)
//   // console.log(arr);
  console.log(`Hi ${name}, you have received an award for your hardwork`)
// });

// const number_ = [2, 4, 3, 1, 2, 4]

// number_.forEach(function(number, i){
//   console.log(number)
// });
// const mammals = ["Lion", "Cow", "Dog", "Cat"]
// mammals.sort()
// mammals.forEach((mammal, i) => {console.log(mammal, i)} )


// let totalVal = 0
// const trans = [42, 45, 26, 4, 13, 16];
// trans.forEach((tran)=> {
//   console.log(totalVal, (totalVal += tran), tran )
// })
// console.log(totalVal)
// _names.forEach((name) => console.log(`Congratulations ${name} unah dey smoke india hemp`))

    


// // ******************** MAP METHOD() ***************/
// const iventory = [
//   {name: "Rice",price: 4000},
//   {name: "Beans",price: 4000},
//   {name: "Semo",price: 4000},
//   {name: "Yam",price: 4000},

// ];
// const price = iventory.map((value) => {
//   return value.price
// });
// console.log(price)

// // const name = inventory.map((value) => {
// //     return value.name
// // });
// // console.log(name);

// const commodities = iventory.map((commodity) => commodity.name)
// console.log(commodities);

// let double = [2, 3, 4, 5, 6, 7];

// let $double = double.map((numb) => {
//   return numb * 2
// });
// console.log($double)



// ARRAY FILTER

 const number = [-10, 0, -2, 4, -9, 5 -8]
//  const filterednumber = number.filter((number) => {
//    return number < 0
//  })
//  console.log(filterednumber)
//  const filterednumber = []

//  for(let i = 0; i < numbers.length; i++) {
//    if (number[i] < 0){
//     filterednumber.push(number[i])
//    }
//  }
//  console.log(number)


 const employees = [
  {name: "mohammed", overtime: 10},
  {name: "Aisha", overtime: 5},
  {name: "Bolaji", overtime: 4},
  {name: "Chris", overtime: 7},
  {name: "Ben", overtime: 9},
  {name: "Munirat", overtime: 12},
 ]

 const employeesToReward = employees.filter((employee) => {
  if (employee.overtime >= 7){
    return true
  }
 })
 console.log(employeesToReward)

 const employeesToRewardNames = employeesToReward.map((employee) => {
    return employee.name

 })
 console.log(employeesToReward)
 console.log(employeesToRewardNames)



 

// console.log(employeesToReward)
employeesToRewardNames.forEach((name) => {
})

const creatures = [
  {animal:"shark", habitat:"Ocean"},
  {animal:"whale", habitat:"Ocean"},
  {animal:"hippopotamus", habitat:"Lake"},
  {animal:"lion", habitat:"Savana"},
  {animal:"monkey", habitat:"jungle"},
]
const aquaticAnimal = creatures.filter((creature) => {
  return creature.habitat === "Ocean" || creature.habitat  === "Lake"
})
console.log(aquaticAnimal) 


const digit = [1,2,3,4,5,6,7,8,9]

const value = digit.find((digit)=> {
 return digit > 4
}) 
console.log(value)

const states = [
  "Ogun States",
  "Kogi States",  
  "Anambra States",
  "Lagos States",
  "Benue States"
]
const state = states.find((state) => {
  return state.startsWith("L")
})
console.log(state)

 const totalMark = 10

 const student = [
  {name: "mohammed", score: 10},
  {name: "Aisha", score: 5},
  {name: "Bolaji", score: 4},
  {name: "Chris", score: 7},
  {name: "Ben", score: 9},
  {name: "Munirat", score: 2},
  {name: "Anate", score: 1},
 
 ]
 const overScore = student.filter((student) => {
  if (student.score >= 6){
    return student.score >= 6
  }
 })


const rewardStudents = overScore.map((student) => {
    return student.name;
})

rewardStudents.forEach((name) => {
    console.log(`Hi ${name}, u really tired`)
})
    //  ARRAY SOME AND EVERY

    const box = [1,2,3,4,5,6,7]
    console.log(box.some((el) => {return el < 4}))
    console.log(box.every((fish) => {return fish  < 8}))


    // ARRAY REDUCE

    // LOOP through the array and return the sum of the array.It takes two properties:a callback functions and an initial value. the call back function take two parameters which are accumulator and value,
    

    const boxes = [1,2,3,4,5,6,7,8,9,10]





