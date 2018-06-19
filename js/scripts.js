// // Day 9
//
// let passwordInput = document.forms.login.password;
// let emailInput = document.forms.login.email;
// let myPtag = document.querySelector('#data_binding');
//
// emailInput.addEventListener('keyup', e => {
//   myPtag.textContent = e.target.value;
// });
//
//
// let submit = document.forms.login.submit
//
// submit.addEventListener('click', e => {
//   if(passwordInput.value !== '' || emailInput.value !== ''){
//   submit.disabled = false;
// }
// });
//
// function myPretendFunction(){ //This is the function definition
//
// }
//
// myPretendFunction(); //This is the Call Site
//
// let user = {
//   name: "Henry",
//   password: 12345,
//   status: "active"
// };
// let guest = {
//   name: "Guest",
//   password: undefined,
//   status: "inactive"
// };
//
// let newScope = {
//   name: "Peter Piper",
//   password: "bag o peppers",
//   instrument: "Pipes",
//   context: logMyName // "Key": "Value"
// };

// newScope.context("Hello 'der"); //We're calling the function now. This is considered an Implicit binding.
//
// function logMyName(greeting){
//   console.log(user.name, this.status); //This will always refer to the global scope
//   alert(`${greeting}, ${this.name}!`)
// }
//
// logMyName.call(user, "Hello"); //Call site; this will change the "This" to user.
// logMyName.call(guest, "Please sign up");

let classScore = 90;
const scopeOne = {
  classScore: 75,
  scopeTwo: {
    classScore: 50
  }
};

{
  let classScore = 75;
  console.log(classScore, 'first scope');
  {
    let classScore = 50;
    console.log(classScore, 'second scope');
  }
}

console.log(classScore, 'global scope');
// console.log(scopeOne.classScore);
// console.log(scopeOne.scopeTwo.classScore);
