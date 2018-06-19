// Day 9

  console.log();
  let emailInput = document.forms.login.email;
  emailInput.addEventListener('keyup', e => {
    console.log(e.target.value)
  })
