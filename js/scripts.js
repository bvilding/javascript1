/*


// Day one work

var myInterest = "I'm creating a startup that is building a productivity tool that will help small businesses manage their time better and be more productive.";
//Variable declaration = Variable definition

var myHobby = "Hobbies? Error 404";

var jk = "We have a beautiful dog, so walking her... Developing business concepts, and photography. I'm a lifelong learner, and am always excited to try new things.";

console.log(myInterest);
console.log(myHobby);
console.log(jk);
*/


// Day two work

var myName = "Vinni";
let myAge = new Date("12/28/1989");
const myGoal = "Learn enough Javascript to be a productive member of my development team.";

console.log(myName, myAge, myGoal)

// this example takes 2 seconds to run
var start = Date.now();

console.log("Starting timer...");
// expected output: starting timer...

setTimeout(function() {
  var millis = Date.now() - start;

  console.log("Seconds elapsed = " + Math.floor(millis/2000));
  // expected output : seconds elapsed = 2
}, 5000);
