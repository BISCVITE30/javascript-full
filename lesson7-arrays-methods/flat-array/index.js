const flatArray = arr =>
  arr
    .reduce((acc, elem) => acc.concat(elem), [])
    .slice()
    .sort((a, b) => a - b);

const array = [1, 9, [4, 7, 6, 7], 8, 9];
console.log(flatArray(array));
