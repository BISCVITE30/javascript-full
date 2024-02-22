const uniqueCount = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const uniqueNum = Array.from(new Set(arr));
  console.log(uniqueNum.length);
  return uniqueNum.length - 1;
};

uniqueCount([1, 1, 1, 5, 3, 3, 7, 2, 8, 3, 2, 7]);
