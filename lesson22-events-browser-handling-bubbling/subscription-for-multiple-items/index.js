const btnElems = document.querySelectorAll('.pagination__page');

const letBtnInfo = event => {
  console.log(event.target.dataset.pageNumber);
};

btnElems.forEach(button => {
  button.addEventListener('click', letBtnInfo);
});
