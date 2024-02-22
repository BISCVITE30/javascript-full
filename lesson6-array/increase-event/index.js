// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let result = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0) {
//       result = arr[i] + delta;
//     }
//   }
//   return result;
// };
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrSlice = arr.slice();
  let result = arrSlice;
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] % 2 === 0) {
      result[i] += delta;
    }
  }
  console.log(result);
  return result;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
