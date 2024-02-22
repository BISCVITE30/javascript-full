function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reverse();
}

reverseArray([1, 5, 6, 2, 72]);
