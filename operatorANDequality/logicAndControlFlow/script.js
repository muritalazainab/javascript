//if statement
// const allowedAge = 18
// const bianca = 12



// if (bianca > allowedAge) {
//     console.log("you are granted admission")}
//     else if
//     (bianca === age){
//     console.log("your admission have been posted to the next year")}
//     else{console.log("wait till you are above 18")

//     }


// falsy value 
// false
// ""
// 0
// null
// undefined 
// NaN

// if(true){
//     console.log('truthy value')
// }else{
//     console.log("falsy value")
// }

// const password = "rapp"
// const gmail = ""

// if(password && gmail){
//     console.log(log in approved)
// }else if(password || gmail){
//     console.log("password and email must be provided")
// }else{
//     console.log("unapproved !!!")
// // }

// let time = 20

// if (time < 10) {
//     console.log("good morning")
//   } else if (time < 20) {
//     console.log("good day")
    
//   } else {
//     console.log("good evening")
//   
//   }

// let temperature = 25;
// if(temperature > 30){
//   console.log("Its a hot day")
// }
// else{
//   console.log("its not too hot today.")
// }
// let hour = new Date().getHours();
// if(hour < 12){
//   console.log("Good morning")
// }
// else if (hour >= 12 && hour < 18){
//   console.log("Good afternoon")
// }
// else{
//   console.log("Good evening")
// }  


let hour = new Date().getHours();

  if(hour >= 11){
    console.log("first period is over")
  } 
  else if (hour === 10){
    console.log("its time for lunch")
  }

  else if (hour < 2){
    console.log("second period begins")
  }
  else {
    console.log("Closing hour")
  }
  let score = 85;
  if(score >= 90){
    console.log("Excellent! you score an A")
  } 
  else if(score >= 80){
    console.log("Well done! you score a B")
  } 
   else if(score >= 70){
    console.log("Excellent! you score a C")
  } 
  else  if(score >= 60){
    console.log("Excellent! you score a D")
  } 
  else{
    console.log("sorry you failed.you score an F")
  }

  // SWITCH STATEMENT
  let superHero = "captain American"
  switch (superHero){
    case 'Iron Man':
    console.log("I am iron man..")
    break;
    case 'Thor':
    console.log("That is my hammer")
    break;
    case 'captain American':
      console.log("Never give up")
      break;
      case 'Black widow':
        console.log("One short, one kill.!")
        break;
        default:
          console.log("Enter a valid superHero Name")
  }
  console.log(superHero)

  let day = new Date().getDay();
   let dayName;

  switch(day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
      default:
        dayName = unknown
  }
   console.log("Today is " + dayName);


   let fruit ="Banana"
   switch(fruit){
    case "apple":
    console.log("i hate it");
    break;
    case "banana":
    console.log("it is bitter");
    break;
    case "watermelon":
    console.log("it is sweet");
    break;
    case "Banana":
    console.log("it is the best");
    break;

    default:
      console.log("fruit is healthy")

   }
   console.log(fruit)

  //  TERNARY OPERATOR

  const oldMan = 80 
  
  if(oldMan >= 80){
    console.log("you can drive")
  }else{
    console.log("you may not drive")
  }

  oldMan >= 80 ? console.log("u can drive") : console.log("u may not drive ")
let age = 20;
let canVote = age >= 18 ? "YES you can vote" : 
 "NO you cant vote" 
console.log(canVote)















  





