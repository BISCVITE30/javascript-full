const squareArray = arr => arr.map(arr => arr ** 2);

// examples
console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]
