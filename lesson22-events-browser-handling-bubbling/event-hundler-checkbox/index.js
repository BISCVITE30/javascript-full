const checkboxElem = document.querySelector('.task-status');

const getCheckboxInfo = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('change', getCheckboxInfo);
