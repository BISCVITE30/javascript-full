function squareArray(arr) {
  if (!Array.isArray(arr)) {
    console.log(null);
    return null;
  }

  arr = arr.map(el => el ** 2);

  console.log(arr);

}
// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
