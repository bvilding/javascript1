let button = document.querySelector('button');
let div = document.querySelector('.div');
let h1 = document.querySelector('.h1');

const body =
document.querySelector('body');

button.addEventListener('click', e => {
  alert('Hey, good job!!');
  e.target.textContent = "Goodbye cats!!";
})

div.addEventListener('mouseenter', e => {
  e.target.style.backgroundColor = "#aa0000";
  console.log(e);
})

div.innerHTML = "<p>lorem</p>";
//Don't use innerHTML it can allow hackers to add scripts to your code

let newH1 = document.createElement('h1');
  newH1.textContent = "Log in here!";
  // body.appendChild(newH1);

body.insertBefore(newH1, div); //New node always goes first, the second is the location

div.id = "red_text";

newH1.className = "text-center";
// div.classList.add("blue-background"); //You add a class rather than overwrite the current class.
//
// div.classList.remove("blue-background"); //This obviously removes the class you add.
div.addEventListener('click', e => {
  div.classList.toggle('text-center'); //This gives you an option to toggle the class on, or off.
  div.classList.replace('blue-background', 'green-background')
})

myImg = document.createElement('img');

myImg.setAttribute('src','https://media.treehugger.com/assets/images/2016/07/green-forest-trees.jpg.860x0_q70_crop-scale.jpg');
//Adds the image to the page.

div.appendChild(myImg);
console.log(myImg);




// h1.addEventListener('mouseleave'), e => {
//   e.target.style.color = '#00ffff';
// }
//
// console.log(button.textContent);
