function createArrayOfFunction(num) {
  if (!num) {
    return [];
  }
  if (isNaN(num)) {
    return null;
  }
  let arr = [];

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}

console.log(createArrayOfFunction('s'));
