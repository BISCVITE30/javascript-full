const btnElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

const getSearch = () => {
  console.log(inputElem.value);
};

btnElem.addEventListener('click', getSearch);
