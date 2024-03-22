const btnElem = document.querySelector('.single-use-btn');

const btnClick = () => {
  console.log('clicked');

  btnElem.removeEventListener('click', btnClick);
};

btnElem.addEventListener('click', btnClick);
