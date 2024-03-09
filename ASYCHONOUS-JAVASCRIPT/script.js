//   //  const interval = setInterval(() => console.log("Hello World"), 1000)
// //  clearInterval(interval)

// const myInterval = setTimeout(() => console.log("Hello World"), 1000);

// // SYCHONOUS

// const function1 = () => {
//   console.log("Function 1");

//   function2();

//   console.log("function one, part 2");   
// };

// const function2 = () => {
//   setTimeout(() => console.log("Function 2"), 2000);
// }; 

// function1();

// const fetchUser = (userName) => {
//   setTimeout(() => {
//     return { user: userName };
//   }, 2000);
// };
// const user = fetchUser("test");
// console.log(user);

// const fetchUser1 = (userName, callBack) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     callBack({ user: userName });
//   }, 2000);
// };

// const User2 = fetchUser1("test", (User2) => {
//   console.log(User2);
// });

// // CALLBACK HELL

// const fetchUser2 = (userName, callBack) => {
//   setTimeout(() => {
//     console.log("Now we have the user");
//     callBack({userName});
//   }, 2000);
// };
 
// const fetchUserPhotos = (username, callBack) => {
//   setTimeout(() => {
//     console.log("Now we have the photo");
//     callBack(["photo1", "photo2"]);
//   }, 2000);
// };
// const fetchUserDetails = (userName, callBack) => {
//   setTimeout(() => {
//     console.log("Now we have the photo details");
//     callBack("details");
//   }, 2000);
// };
// const user3 = fetchUser2("Ali", (userName) => {
//   console.log(`Your name is: ${userName}`);
//   fetchUserPhotos(userName, (userphoto) => {
//     console.log(` Your photo are ${userphoto}`);
//     fetchUserDetails(userphoto[0], (details) => {
//       console.log(`Your photo details are ${details}`);
//     });
//   });
// });

// const user4 = fetchUser2("Ali", (userName) => { 
//   fetchUserPhotos(userName, (userphoto) => { 
//     fetchUserDetails(userphoto[0], (details) =>{ 
//       fetchUserDetails(userphoto[0], (details) =>{ 
//        fetchUserDetails(userphoto[0], (details) => { 
//           fetchUserDetails(userphoto[0], (details) => {
//             console.log(details);
//           });
//         });
//       });
//    });

//   });
// });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       console.log("Now we are in promise");

//       resolve({username: "Bode"})
//       // reject("User not found")
//   }, 5000);
// })

// promise

// .then((user) => console.log(user.username))
// .catch((error) => console.log(error));





// const getUser = (userName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am feeling sleepy")
//       resolve(userName);
//     }, 4000);
//   })
// }
// const getUserPhotos = (userName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("We have the photos")
//       resolve(["photo 1", "photo 2"]);
//     }, 4000);
//   })
// }
 
// const getUserPhotosDetails = (photo) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the photo details")
//       resolve("details");
//     }, 4000);
//   })
// }


//  getUser("Zainab")
//   .then((user) => getUserPhotos(user))
//   .then((photos) => getUserPhotos(photos))
//   .then((details) => console.log(details));

//   // ASYNC AND AWAIT
// const myUsers = {
//   userList: []
// }

// const myFoolFunc = async () => {
//  const response =  await fetch('https://jsonplaceholder.typicode.com/users');
// const json = await response.json()
//  console.log(json)
// }

// // const anotherFn = async () => {
// //   const data = await myFoolFunc()
// //   myUsers.userList = data;
// //   confirm.log(myUsers.userList)


// // }



// // const getAllUserEmail = async () => {
// //   const response =  await fetch('https://jsonplaceholder.typicode.com/users');
// //  const json = await response.json();

// //   const userName = json.map((user) => {
// //     return user.username
// //    })
// //    console.log(userName)
// //  }
// //  getAllUserEmail ();

// // myFoolFunc();

// // // TRY AND CATCH

// // const getData = async () => {


// // try {
// //   const response =  await fetch('https://jsonplaceholder.typicode.com/users');
// //   const data = await response.json();
// //   return data
// // } catch (error) {
// //   console.log("Error:", error.msg)
// // }
// // }
// // getData()
// // .then((data) => console.log("data:", data)).catch ((error) => console.log ("Error:", error.msg))

// // const fetchDataWithErr = async () => {
// //   try {
// //     console.log("Fetching Data...")
// //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
// //     const json = await response.json();
    
// //     if(!re) {
// //       throw new Error('Failed to fetch data')
// //     }

// //     const $data = await res.json();
// //     return $data

// //   }catch (error){
// //     console.log('Error:', error.message)
// //   }
// // }
// // fetchDataWithErr()
// // .then(result => {
// //   if (result) {
// //     console.log("Data", result)
// //   }
// // })



// //To get all user Address Details, and company name

// const fetchNestData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     if (!response.ok) {
//       throw new Error("Not found will fixed soon");
//     }

//     const userData = await response.json(); //Assuming data is an array of user

//     const mappedData = userData.map(
//       ({ id, username, email, name, address, phone, website, company }) => ({
//         id,
//         username,
//         email,
//         name,
//         address: {
//           street: address.street,
//         },
//         phone,
//         website,
//         company: {
//           name: company.name,
//         },
//       })
//     );

//     console.log(mappedData);
//   } catch (error) {}

//   try {
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// };
// fetchNestData();


// // sample2


// const fetchNestDta = async () => {

//   try{
//       console.log("username")
//  const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
  
//   if(!response.ok){
//       throw new Error("Not found will fixed soon")
//   }
//   const userData = await response.json() 
//   const mappedData = userData.map(({ id, username,email, name,address, phone, website, company}) =>({
//   id, username, email, name, address: {
//       street: address.street,
//   },
//   phone, website, company: {
//       name: company.name
//   }
      
// }));
// console.log(mappedData)
//   }catch (error){
//       console.log("error:",error.message)
// }   
// }
//   fetchNestDta()
// // Math

// const roundNub = Math.round(4.4);
//   console.log(roundNub);

//   const ceil = Math.ceil(4.7);
//   console.log(ceil);

//   const floor = Math.floor(4.3);
//   console.log(floor);



function walkdog() {
return new Promise ((resolve, reject) => {
const dogwalked = false;

  if (dogwalked) {
    resolve(`You walk out the dog`)
  } else {
    reject(`dog didnt work`)
  }
  setTimeout(() => {
   
  }, 500);
})
}
function takeOutTrash() {
return new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(`You take out the trash`)
  }, 500);
})
}
function cleanTheDishes() {
return new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(`You clean up the dishes`)
  }, 500);
})
}
walkdog().then(value => (console.log(value)))
walkdog().catch(error => (console.error(error)))
cleanTheDishes().then(value => (console.log(value)))
takeOutTrash().then(value => (console.log(value)))



 function goHome(callBack){
  setTimeout(() => {
    console.log(`it is closin hour`)
    callBack();
  },1000);

 }
goHome(() => {}); 

