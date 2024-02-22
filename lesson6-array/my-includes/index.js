const includes = (arr, num) => {
  if (arr.indexOf(num) >= 0) {
    return true;
  }
};

// examples
includes([1, 4, 8, 3], 3); // ==> true
includes([1, 4, 8, 3], 5); // ==> false
