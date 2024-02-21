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
  // push method // 
  const student = ["Grace", "yemi", "sola","fola"];
  const pushed = student.push("Babe", "zainab")
console.log(pushed);

// pop method //
const numbers = [3,4,5,6,7,8,9]
console.log(numbers)
numbers.pop();
console.log(numbers)
  

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




