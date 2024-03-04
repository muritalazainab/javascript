//  const interval = setInterval(() => console.log("Hello World"), 1000)
//  clearInterval(interval)

const myInterval = setTimeout(() => console.log("Hello World"), 1000);

// SYCHONOUS

const function1 = () => {
  console.log("Function 1");

  function2();

  console.log("function one, part 2");   
};

const function2 = () => {
  setTimeout(() => console.log("Function 2"), 2000);
}; H

function1();

const fetchUser = (userName) => {
  setTimeout(() => {
    return { user: userName };
  }, 2000);
};
const user = fetchUser("test");
console.log(user);

const fetchUser1 = (userName, callBack) => {
  setTimeout(() => {
    console.log("Now we have the user");
    callBack({ user: userName });
  }, 2000);
};

const User2 = fetchUser1("test", (User2) => {
  console.log(User2);
});

// CALLBACK HELL

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

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log("Now we are in promise");

      resolve({username: "Bode"})
      // reject("User not found")
  }, 5000);
})

promise

.then((user) => console.log(user.username))
.catch((error) => console.log(error));





const getUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am feeling sleepy")
      resolve(userName);
    }, 4000);
  })
}
const getUserPhotos = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We have the photos")
      resolve(["photo 1", "photo 2"]);
    }, 4000);
  })
}
 
const getUserPhotosDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the photo details")
      resolve("details");
    }, 4000);
  })
}


 getUser("Zainab")
  .then((user) => getUserPhotos(user))
  .then((photos) => getUserPhotos(photos))
  .then((details) => console.log(details));