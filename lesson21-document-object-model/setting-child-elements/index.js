function setButton(buttonText) {
  const body = document.querySelector('body');

  const button = document.createElement('button');

  button.textContent = buttonText;

  body.appendChild(button);

  console.log(body.innerHTML);
}

setButton('Новая кнопка');
