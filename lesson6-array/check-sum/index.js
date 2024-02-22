const checkSum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = 0;
  for (let i of arr) {
    result += i;
  }
  return result > 100;
};

// examples
checkSum([10, 10, 10]); // ===> false
checkSum([10, 99, 1]); // ===> true
checkSum([-6, -3, 200]); // ===> true
