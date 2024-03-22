const checkboxElem = document.querySelector('.task-status');

const getCheckboxInfo = event => {
  console.log(event.target.checked);
};

checkboxElem.addEventListener('change', getCheckboxInfo);
