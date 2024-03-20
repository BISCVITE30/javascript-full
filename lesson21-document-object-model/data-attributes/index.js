function squaredNumber() {
  const listElems = document.querySelectorAll('.number');
  Array.from(listElems).map(item => {
    const squareItem = item.dataset.number ** 2;
    item.setAttribute('data-squared-number', squareItem);
    return item;
  });
}

squaredNumber();
