const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === -1) {
    return null;
  }
  const minNum = Math.min(...arr.map(num => Math.abs(num)));
  return minNum ** 2;
};


console.log(getMinSquaredNumber([]))