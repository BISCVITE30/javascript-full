function finishForm() {
  const form = document.querySelector('form');
  const oldInput = document.querySelector('input');

  const input = document.createElement('input');
  form.prepend(input);
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'login');
  oldInput.setAttribute('type', 'password');

  console.log(form.innerHTML);
  return input;
}

finishForm();
