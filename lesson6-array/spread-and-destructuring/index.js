function swap(numbers) {
  const [start, ...arr] = numbers;
  return [...arr, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const numberSlice = numbers.slice();
  const a = numberSlice[0];
  for (let i = 0; i < numberSlice.length; i += 1) {
    if (i === 0) {
      numberSlice.push(a);
      numberSlice.shift();
    }
  }
  return numberSlice;
}
// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
