// Takehome Day 5

function powerOfTwo(number) {
  if(!isNaN(number)){ //acts as a double negative, we're basically checking if it is a number.
  return number * number;
} else {
  alert("NaN");
  let answer = powerOfTwo(parseInt(prompt("That wasn't a number foo! What number do you want?", "2")));
  alert(answer);
}
};

// let answer = powerOfTwo(parseInt(prompt("What do you want to square?", "2")))
// alert(answer);


// Takehome 2
function parseString(string){
  let parsedLetter = string.charAt(0).toUpperCase();
  let stringArr = string.split('');
  stringArr.splice(0, 1, parsedLetter);
  string = stringArr.join(''); //Replaces the first letter with the new toUpperCase letter.
  if(string.charAt(string.length - 1) !== ".") string = string + ".";
  return string;
}

// let answer = parseString(prompt("Type something in.", "I heart stuff."));
// alert(answer);

function reverseHalves(string){
  let halfIndex = string.length / 2; //This is throwing an error, but we're moving into another lesson.
  let firstHalf = string.substring(0, halfIndex);
  let secondHalf = string.substring(halfIndex, string.length);
  alert (`${secondHalf}${firstHalf}`);
}

reverseHalves(prompt("give me a sentence", "Hello world!"))

function isPalindrome(string) {
  let reversed = string.split('').reverse().join('');
  return string === reversed ? true:false;
}
