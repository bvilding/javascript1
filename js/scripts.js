let button = document.querySelector('.myBtn');
let div = document.querySelector('.div');
let h1 = document.querySelector('.h1');

button.addEventListener('click', e => {
  alert('Hey, good job!!');
})

div.addEventListener('mouseenter', e => {
  e.target.style.backgroundColor = "#aa0000"
  console.log(e);
})
