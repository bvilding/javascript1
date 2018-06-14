let button = document.querySelector('.myBtn');
let div = document.querySelector('.div');
let h1 = document.querySelector('.h1');

button.addEventListener('click', e => {
  alert('Hey, good job!!');
  e.target.textContent = "Goodbye cats!!";
})

div.addEventListener('mouseenter', e => {
  e.target.style.backgroundColor = "#aa0000";
  console.log(e);
})

h1.addEventListener('mouseleave'), e => {
  e.target.style.color = '#00ffff';
}
