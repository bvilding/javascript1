// let object1 = {}
// let object2 = new Object()
//
// let person = {
//   firstname: "vinni",
//   lastname: "hoke",
//   age: 28,
//   favorites: ["cookies", "pizza"],
//   desc: {
//     haircolor: "brown",
//     eyecolor: "brown"
//   }
// }
//
// //This is called dot notation
// object1.food = "pizza";
// console.log(object1);
//
// //This is called bracket notation
// object1['color'] = 'blue';
// console.log(object1.age);
//
// //There are a few different loops you can access specifically for objects.
//
// //For in loop - A general purpose loop for objects
// for(let key in person){ //The word key here is a 'let variable'. It can be any value. In an array you have many values, but in objects you always need a key to access them.
//   console.log('key', key)
// }
//
// //For of loop - More for accessing arrays
// for(let [key, value] of Object.entries(person)){
//   console.log(key, value)
// }
//
// //Clone, or copy, the properties of the old object, and add them to a new object.
//
// let newObj = Object.create(object1);
//   newObj.flower = 'rose';
//   newObj.color = 'yellow';
//   console.log(newObj, "New Object");
//   console.log(object1, "Old Object");
//

let recipe = {
  flour: '1 cup',
  salt: '1 tbsp',
  eggs: 3,
  vailla: true,
  rum: 'hella'
};

console.log(recipe);
let clone = Object.create(recipe);
console.log(Object.getPrototypeOf(clone), 'This is the prototype');

let vehicle = {
  wheels: 2,
  windows: null,
  enginesize: '4 cylinder',
  doors: 4
}

let motorcycle = Object.create(vehicle);
motorcycle.wheels = 2;

let stringExample = new String("Whatup fam");
let arrayExample = new Array(["cheese", 222, [2]]);
let objectExample = new Object({cheeseIsGood: true});
let booleanExample = new Boolean(true);
let numberExample = new Number(94);

console.log(stringExample, arrayExample, objectExample, booleanExample, numberExample);

function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) { //Function definition; but this is a constructor function.
  this.rockets = rockets;
  this.fluxCapacitor = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
}; //A Prototype function will return an 'Object' with all of these properties inside of it.

let firefly = new Spaceship(4, false, "Mel Gibson", Infinity, false, 'Broken');

console.log(firefly);

// Something we can use for the final.

function todo(task, dueDate, status, done, timeElapsed, dueTime, priority, tags, labels){
  this.name = task;
  this.name = dueDate;
  this.name = status;
  this.name = done;
  this.name = timeElapsed;
  this.name = dueTime;
  this.name = dueDate;
  this.name = priority;
  this.name = tags;
  this.name = labels;
}

let cart = [];

function Product(name, price, description){ //Anytime you make a constructor function make it a capital.
  this.name = name;
  this.price = price;
  this.description = description;
};

let soapBtn = document.forms.orderForm.soap;
soapBtn.addEventListener('click', e => {
  e.preventDefault();
  let soap = new Product('soap', 2.99, "Makes ya clean!");
  cart.push(soap);
  localStorage.setItem('soap', JSON.stringify(soap)); //Methods are always attached to an object, and take the object in as an argument. This takes two arguments, the first is what we'd like to call it, and the second is what we are storing. JSON.stringify takes the object, and makes it a String, which can be stored in localStorage.
});

function getSoap(){
  let storedItem = localStorage.getItem('soap');
  console.log(JSON.parse(storedItem));
}

getSoap();

// From Ryeker

let advertisement = "HEY!!! WELCOME TO OUR SITE!!! GET 40% OFF TODAY!!!!!";

let myTimeout =
setTimeout( //setTimeout function takes 2 arguemnts
  () => { //1. A callback function that will run after the time elapses.
    alert(advertisement);
  },
  5000); //2. How long do you want to wait?
  //This will wait 5 seconds and then alert our user

let cancelBtn = document.forms.newUserForm.cancelTimeout;

cancelBtn.addEventListener('click', e => {
  e.preventDefault(); //This is what I missed in class: we have to prevent the default action of reloading the page. If we don't, the page reloads and the timeout gets reinitialized.
  clearTimeout(myTimeout); //This will clear the timeout (or cancel it.)
});


//ONLINE STORE EXAMPLE
let cart = [];

function Product(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
};

let soapBtn = document.forms.orderForm.soap;

soapBtn.addEventListener('click', e => {
  e.preventDefault();
  let soap = new Product("soap", 2.99, "makes you clean!");
  cart.push(soap);
  localStorage.setItem('soap', JSON.stringify(soap)); //This will "stringify" our object so that the console can display it and store our cart in our local storage for later use.
});


function getSoap() {
  let storedItem = localStorage.getItem('soap'); //This retrieves our stringified object from local storage
  console.log(JSON.parse(storedItem)); //JSON.parse converts that stringified object into a usable object again!
}

getSoap();

let recipe = {
  flour: '20 oz', //flour is the key, '20oz.' is the value.
  eggs: 3,
  vanilla: true,
  rum: 'hella'
}; //Object Literal.

console.log(recipe);

//RIGHT way to make a copy of an object
let clone = Object.create(recipe); //To safely/correctly make a copy of an object you should use Object.create()
console.log(Object.getPrototypeOf(clone), '< This is the prototype'); //Should show the original object you copied as the prototype

//WRONG way to make a copy of an object

let cheese = {
  isGood: true,
  sharpness: 1000
}; //Original

let cheeseCopy = cheese; //This will make a reference to the original, not what we want.

cheeseCopy.isGood = false; //This will change BOTH the original and the new instance

// console.log(cheese, 'ORIGINAL', cheeseCopy, 'COPY'); //Will show that both the old and new have been changed.

let stringExample = new String("hello there");
let numberExample = new Number(94);
let boolExample = new Boolean(true);
let arrayExample = new Array(["cheese", 222, [2]]);
let objectExample = new Object({cheeseIsGood: true});

// console.log(stringExample, numberExample, boolExample, arrayExample, objectExample); //Should be able to inspect the __proto__ chain and see the inherited parent objects

function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) { //Always capitalize your constructor function names
  this.rockets = rockets;
  this.fluxCapacitor = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
}; //Constructor function (also the 4th way to bind THIS).

let firefly = new Spaceship(4, false, 'Mal Reynolds', Infinity); //This will return a new object with the properties that you passed in.


let users = []; //Collection of users we want to keep track of.

let submitBtn = document.querySelector('.btn');

function User(name, pw) { //Our contructor function for making new users
  this.name = name;
  this.pw = pw;
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let userName = document.forms.newUserForm.username.value;
  let password = document.forms.newUserForm.password.value;
  let newUser = new User(userName, password); //Use the data collected in our HTML form to create our new user
  users.push(newUser); //add our new user to our collection of users.
  document.forms.newUserForm.reset(); //reset the form inputs
  console.log(users); //Should show all our users each time we make a new one.
});

// Brandy's Notes

// OBJECTS
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// a property: {key (name): value}

// A new Object can be created by two ways
let object1 = {}; // "object literal" syntax
let object2 = new Object(); // "object constructor" syntax

//object example
// ssecond property has name "age" and value "22"
let person = {
  name: 'Brandy',
  age: 22,
  hairColor: 'brown',
  other: ['glasses', 'short'],
  favorites : {
    food: 'pizza',
    dessert: 'cookies'
  },
  greet: function() {
      return `Hi`;
  }
};

console.log(person);

// When defining an object we use let or var, If you us const you are nu able to change the object in any way

// Accessing object properies
// (name of object).(key)

console.log(person.name); // dot notation
// or
onsole.log(person['name']); // square bracket notation

// console logging a variable that is not defined
console.log(person.eyeColor); // undefined NOT NULL

//Adding properies
// for object 1
person.eyeColor = 'brown' //dot notation
object1.food = "pizza";

object1['color'] = 'pink';
console.log(object1.color);

// FOR...IN loop
// best way to iterate over objects
// syntax
// for(let key in object) {}

for (let per in person) {
  console.log('key', per, 'value', person[per]);
};

// for ... of loop
// Not the best for loop to iterate objects, you need special Object methods such as
// Object.keys, Object.values, Object.entries

for(let [key,val] of Object.entries(person)){ // Object.entries converts each property into an array
  console.log(key,val);
};

for(let key of Object.keys(obj)){ //Object.keys graps the keys of the object
  console.log(key);
};

for(let key of Object.values(obj)){ //Object.values graps the values of the object
  console.log(key);
};

// object.create ex best practice for cloning
// The Object.create() method creates a new object, using an existing object to provide the newly created object
let newObj = Object.create(object1);
newObj.flower = 'rose';
newObj.color = 'yellow';
console.log('newobj', newObj);
console.log('object1',object1);

// the newObj value change is done to the newObj. object1 has all its orginal keys and values
// the newObj does holds all values of object one even if we change a value of a key due to inhertiance
// We use Object.create() so that the new Object is not stores at the same place the old object is
// {this would cause the changing of both objects instead os just the new objects}
