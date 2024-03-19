export function getTitleElement() {
  const titleElem = document.querySelector('title');
  console.dir(titleElem.outerHTML);
  return titleElem;
}

export function getInputElement() {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem.outerHTML);
  return inputElem;
}

getTitleElement();
getInputElement();
