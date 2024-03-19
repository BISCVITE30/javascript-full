export function getTitleElement() {
  const titleElem = document.querySelector('h1[class="title"]');
  console.dir(titleElem);
  return titleElem;
}

export function getInputElement() {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
}

getTitleElement();
getInputElement();
