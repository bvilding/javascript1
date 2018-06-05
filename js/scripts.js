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

// var myName = "Vinni";
// let myAge = new Date("12/28/1989");
// const myGoal = "Learn enough Javascript to be a productive member of my development team.";
//
// console.log(myName, myAge, myGoal)
//
// /*
// 1. Declare 2 let variables:
//   a. Favority movie
//   b. Favorite food
// 2. Declare 2 const variables
//   a. Year the movie came out
//   b. Ingredients of your favorite foods as an array.
// 3. Alert your favorite food with its Ingredients
// 4. Confirm the movie and year
// */
//
// let favMovie = "The Great Gatsby";
// let favFood = "Tacos";
// const movieRelease = 2013;
// const favFoodIngredients = ["Carne Asada", "Corn Tortillas", "White Onion", "Cilantro", "Tapatio to Taste"];
// alert(favFood + favFoodIngredients);
// confirm(favMovie + movieRelease);

// Day Four work

// Intro Day 4

  // let number = 5;

  // number > 10 ? "number is greater" : "number isn't greater";

  // console.log(number > 10 ? "number is greater" : "number isn't greater")

  // let name = false;
  // let email = true;

  // if (name){
  //   alert("I have da name rite 'er")
  // }

  // else if (email){
  //   console.log("Email's right 'er bruv")
  // }

  // else {
  //   console.log("Ain't got nuffin")
  // }

  // name ? "I have da name rite 'er" : email ? "No email 'er bruv" : "Ain't got nuffin";

  // console.log(name ? "I have da name rite 'er" : email ? "Email's right 'er bruv" : "Ain't got nuffin");


// Example 1

  // let money = 10;
  // let iAmNotHungry = true;

  // if (iAmHungry) {
  //   if (money > 10){
  //     console.log('I am hungry and I have more than 10')
  //   }
  //   else {
  //     console.log('I am hungry and I have less than 10')
  //   }
  // } else {
  //   if (money < 10){
  //     console.log('I am not hungry and I have more than 10')
  //   }
  //   else {
  //     console.log('I am not hungry and I have less than 10')
  //   }
  // }

// Example 2

// iAmHungry ? ((money > 10) ? 'I am hungry and I have more than 10' : 'I am hungry and I have less than 10')

// iAmHungry ? ((money > 10) ? 'I am not hungry and I have more than 10' : 'I am not hungry and I have less than 10')

// console.log(hungry);

// Example 3

  // let iAmWearingYellow = false;
  // let number = 24;

  // let num = (number = 23 && iAmWearingYellow) ? "All bets on the Lakers" : "All bets on the Bulls" : "Neither";
  // console.log(num);

// Sample 4

  // var fruits = ['Apple', 'Banana'];
  // console.log(fruits.length);
//   //
//
// //Arrays always start at 0, then everything to the right is 1..2..3..etc.
//   // var first = fruits[0];
//   //
//   // let arr =['Javascript', 100, [], {}, true];
//   // console.log(arr[0]);
//
//   // var favMovie = 'The Great Gatsby';
//   // var luckyNumber = 28;
//   // var starWarsFan = true;
//   // var highSchool = 2008;
//
//   let favs = ["The Great Gatsby" , 28, true, 2008];
//   console.log(favs[0], favs.length);
//
//   console.log(Array.isArray(favs));
//
//   console.log(favs);
//
//   favs.push("tacos");
//
// // My attempt at a in-class challenge
//
//   // console.log(favs);
//   // let starWarsFan = fav.length(5-1);
//   // let LuckyNumber = fav.length(5-2);
//
// // Correct Method
//
//   console.log(favs[favs.length - 1])
//   console.log(favs[favs.length - 2])

// Tells JavaScript that we're removing the last item in the array and removes it

  // favs.pop();

// Tells JavaScript to remove the fist member of an array and saves it. Pop can also do the same thing with the right Const variables. Below will remove the first item and return that removed item to you as your variable 'first'.

  // let first = favs.shift();
  // console.log(favs, first);

// Splice Use #1 -  Learning how to use Splice. One argument will remove that index after the specified number.

  // favs.splice(2);
  // console.log(favs, "This is because we used a Splice method");

// Splice Use #2 - The second number in the Splice here will remove a specified number of items from your Array.

  // favs.splice(2, 1);
  // console.log(favs, "This removed 'true' because we used a Splice method");

// Splice Use #3 - You basically use the same method from above, then the next comma will add an item.
//
//   favs.splice(2, 1, false);
//   console.log(favs, "This removed 'true', but added 'false' because we used an additive Splice method");
//
// // You can also add multiple arrays within instead
//
//   favs.splice(2, 1, false, "Me", "You");
//   console.log(favs, "This removed 'true', but added 'false' and added 'Me' and 'You' because we used an additive Splice method");
//
//   let removedItems = favs.splice(2, 2, false, "Me", "Rocky");
//   console.log(favs, "This is the result of the splice");
//   console.log(removedItems, "The thing that we removed" )
//
// //Finds the index from the document within an array. This will generate the location of the item that will be removed. Then you'll be able to use a Splice method to remove that data. This will always recognize the first piece of data, it will not continue to search through the data to find all instances of that item.
//
//   console.log(favs.indexOf("The Great Gatsby"));
//
// //This will find the last instance of the data (useful if there are multiple of the same item in an array) depending on the data situation.
//
//   console.log(favs.lastIndexOf("The Great Gatsby"));
//
// //Fun console log stuff.
//
//   const products = [["blanket", 12.99, "Best damm blanket"],["rattle", 4.99, "It rattles good"],["diapers", 12.99, "They're the shit."]];
//   console.log(products[2][2]);

//Try it out in class assignment. My attempt.


  let favMovie = ["The Great Gatsby", "Jay Gatsby"]
  let secondFav = ["Pulp Fiction", "Julien"]
  let thirdFav = ["Chappie", "Chappie"]
  let fourthFav = ["The Man from UNCLE", "Illya"]

  let favoriteMovies = [];

  favoriteMovies.push(favMovie, secondFav, thirdFav, fourthFav);

  let titles = [];

  titles.push(favoriteMovies[0][0], favoriteMovies[1][0], favoriteMovies[2][0], favoriteMovies[3][0]);
  alert(titles);

  // let topFive = [favoriteMovies[favoriteMovies.length - 1], favoriteMovies[favoriteMovies.length - 4]];
  // topFive.shift();
  console.log(favoriteMovies[favoriteMovies.length - 2] , "Higher Favorite - Very creative plot and concept.");
  console.log(favoriteMovies[favoriteMovies.length - 4] , "Lower Favorite - Fun movie, but getting slightly boring over time.");

  alert(favoriteMovies.length)

// Correct process
