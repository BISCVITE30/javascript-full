function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(num => {
    if (num % 2 === 0) {
      return (num += delta);
    } else {
      return num;
    }
  });
}

const array = [1, 6, 32, 8, 3, 2, 7, 1];
console.log(increaseEvenEl(array, 20));
