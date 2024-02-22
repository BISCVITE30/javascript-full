function getSum(arr) {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
    }
    console.log(sum);
  } else {
    console.log('null');
  }
}
// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
