export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const minNum = Math.min(...arr.map(num => Math.abs(num)));
  return minNum ** 2;
};
