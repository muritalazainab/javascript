const form = document.getElementById("form");

const password1 = document.getElementById("password1");

const password2 = document.getElementById("password2");

const message = document.getElementById("message");

const messageContainer = document.querySelector(".message-container");


let passMatch = false;
let isValid = false;
const validateForm = ()=>{
    isValid = form.checkVisibility()
    console.log(isValid)
    // style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out the field";
    message.style.color = 'red';
    messageContainer.style.borderColor = "red"
    return
  }
  // check to see if password match
  if(password1.value === password2.value){
    passMatch = true;
    password1.style.borderColor = "green"
    password2.style.borderColor = "green"
  }else{
    passMatch = false;
    message.textContent = "Make sure password match."
    message.style.color = "red";
    messageContainer.style.borderColor = "red"
    password1.style.borderColor = "red"
    password2.style.borderColor = "red"
    return
  }
//   if form is valid and passwod match
  if (isValid && passMatch) {
    message.textContent = "Sucessfully registered."
    message.style.color = "green";
    messageContainer.style.borderColor = "green"
   
    return
    
  }
}
function storeFormData () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email:form.email.value,
    website:form.website.value,
    password: form.password.value,
  };
  console.log(user)
}


const processFormData = (e) => {
  e.preventDefault();
//   console.log(e)
validateForm(); 
if (isValid && passMatch) {
  storeFormData(); 
  form.reset();
}
}

form.addEventListener("submit",  processFormData);


