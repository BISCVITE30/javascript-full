const getSpecialNumbers = numbers => numbers.filter(num => num % 3 === 0);

const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];
console.log(getSpecialNumbers(array));
