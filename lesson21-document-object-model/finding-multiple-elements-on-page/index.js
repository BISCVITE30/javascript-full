export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

export function getItemsArray() {
  const elementsArray = document.querySelectorAll('.tool');
  const newArray = Array.from(elementsArray);
  console.dir(newArray);
  return newArray;
}

getItemsList();
getItemsArray();
