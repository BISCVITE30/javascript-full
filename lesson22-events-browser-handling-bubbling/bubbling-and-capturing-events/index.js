const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const removeHandler = document.querySelector('.remove-handlers-btn');
const addHandler = document.querySelector('.attach-handlers-btn');
const eventListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const clearText = () => {
  eventListElem.innerHTML = '';
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const addHandl = () => {
  divElem.addEventListener('click', logGreyDiv);
  pElem.addEventListener('click', logGreyP);
  spanElem.addEventListener('click', logGreySpan);
  divElem.addEventListener('click', logGreenDiv, true);
  pElem.addEventListener('click', logGreenP, true);
  spanElem.addEventListener('click', logGreenSpan, true);
};
const removeHandl = () => {
  divElem.removeEventListener('click', logGreyDiv);
  pElem.removeEventListener('click', logGreyP);
  spanElem.removeEventListener('click', logGreySpan);
  divElem.removeEventListener('click', logGreenDiv, true);
  pElem.removeEventListener('click', logGreenP, true);
  spanElem.removeEventListener('click', logGreenSpan, true);
};

addHandl();

clearBtn.addEventListener('click', clearText);
addHandler.addEventListener('click', addHandl);
removeHandler.addEventListener('click', removeHandl);
