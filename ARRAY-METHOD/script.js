const cohort = ["Soliu", "Zainab", "Nafisat"," Basitat"]
console.log(cohort)

const change = (cohort[1] = 'opeyemi')
cohort[5] = "seyi"

for(let i = 0; i < cohort.length; i++){
    console.log(i, cohort[i])
  }
  for(const ES6 of cohort){ 
    console.log(ES6)
  } 

const nestesdArray = [[1,2], [3,4], [5,6]]

const newArr = nestesdArray[0][0]
console.log(newArr)

const object = {
    name : "John", 
    age : 60
}
console.log(object)

const arr = [ 
    "Banana",
    10000, 
    {name : "bode",
    age : 80
},
function name () {}
]
console.log(typeof arr)


  //**************** push method () ******************** // 
  const student = ["Grace", "yemi", "sola","fola"];
  const pushed = student.push("Babe", "zainab")
console.log(pushed);

//*****************/ pop method() *************************//
const numbers = [3,4,5,6,7,8,9]
console.log(numbers)
numbers.pop();
console.log(numbers)
  

// ******************* SHIFT () ************************* //

const colors = ["Violent", "red", "Blue", "Black"]

const shift = colors.shift()
console.log(shift)
console.log(colors)

//***********************  UNSHIFT() *************************************** */

const months = ["March", "july", "september", "January"]

const newMonth = months.unshift("feb")
console.log(newMonth)
console.log(months)
// ********************** SPLICE() ****************************** //
const fruit =["Apple", "Mango", 'Pawpaw', 'Cashew'] 
console.log(fruit)
fruit.splice(2, 0, "watermelon", "banana")
console.log(fruit)

const wears = ["Gucci", "Versace", "Nike", "D&G", "Nike", "LV"]
console.log(wears);
wears.splice(3)
console.log(wears);

const drinks = ["coke", "viju", "Gin", "Exotic", "bobo"];
console.log(drinks);
drinks.splice(2, 1)
console.log(drinks)

// *******************  SLICE() ************************ //

const men = ["Turmise","Kenny" , "Soliu", "Bode", "Abee", "Hayzed"]
console.log(men)
const threeMen = men.slice(2, 5)
console.log(threeMen)

const newString = "Zainab"
console.log(newString.length)
const newSlice = newString.slice(2, 5)
console.log(newSlice)

// ***************  toSTRING() ***************************//

const mensString  = men.toString()
console.log(mensString)

const menString  = men.includes("zainab")
console.log(menString)

// ***************** sort() *************************//

men.sort();
console.log(men)


const numberAscending = [1, 3, 8, 15, 90, 100, 0, 7]
numberAscending.sort((a, b) => a - b);
console.log(numberAscending)

const numberDecendig = [1, 3, 8, 15, 90, 100, 0, 7]
numberDecendig.sort((b, a) => b - a);
console.log(numberDecendig)

// **************** indexof() *****************//
const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2]
        console.log($number);

        const indexOne = $number.indexOf(2)
        console.log(indexOne);
const tutor = ["Abdullah", "Naheem", "Anate", "Seyi", "Soliu"]
const indexTt = tutor.indexOf("Anate")
console.log(indexTt)


const lastIndex = $number.lastIndexOf(2);
console.log(lastIndex)

//*********************  loop() ************//
const _names = ["Zainab", "Bashirat", "Nafisat"];
//************ES5************************ */
for(let i = 0; i < _names.length; i++) {
  console.log(i, _names[i]);
}

// *********ES6 **************//
for(const _name of _names){
  console.log(_name);
}

//*********************  foreach() ************/
_names.forEach(function() {});


_names.forEach((name, i, arr) => {
  console.log(name.toUpperCase());
  // console.log(i)
  // console.log(arr);
});

const number_ = [2, 4, 3, 1, 2, 4]

number_.forEach(function(number, i){
  console.log(number)
});
const mammals = ["Lion", "Cow", "Dog", "Cat"]
mammals.sort()
mammals.forEach((mammal, i) => {console.log(mammal, i)} )


let totalVal = 0
const trans = [42, 45, 26, 4, 13, 16];
trans.forEach((tran)=> {
  console.log(totalVal, (totalVal += tran), tran )
})
console.log(totalVal)
_names.forEach((name) => console.log(`Congratulations ${name} unah dey smoke india hemp`))

    


// ******************** MAP METHOD() ***************/
const iventory = [
  {name: "Rice",price: 4000},
  {name: "Beans",price: 4000},
  {name: "Semo",price: 4000},
  {name: "Yam",price: 4000},

];
const price = iventory.map((value) => {
  return value.price
});
console.log(price)

// const name = inventory.map((value) => {
//     return value.name
// });
// console.log(name);

const commodities = iventory.map((commodity) => commodity.name)
console.log(commodities);

let double = [2, 3, 4, 5, 6, 7];

let $double = double.map((numb) => {
  return numb * 2
});
console.log($double)
