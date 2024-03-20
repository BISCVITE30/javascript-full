function getSection(num) {
  const findParent = document.querySelector(`span[data-number="${num}"]`);

  const parent = findParent.parentNode;

  return parent.getAttribute('data-section');
}

getSection(2);
