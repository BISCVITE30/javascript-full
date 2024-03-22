const inputElem = document.querySelector('.text-input');

const getInputText = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', getInputText);
