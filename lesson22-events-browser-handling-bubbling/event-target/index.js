const btnElem = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

btnElem.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
