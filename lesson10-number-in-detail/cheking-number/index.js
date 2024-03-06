const getFiniteNumbers = arr => arr.filter(elem => Number.isFinite(elem));

const getFiniteNumbersV2 = arr => arr.filter(elem => isFinite(elem));

const getNaN = arr => arr.filter(elem => Number.isNaN(elem));

const getNaNV2 = arr => arr.filter(elem => isNaN(elem));

const getIntegers = arr => arr.filter(elem => Number.isInteger(elem));

const result = [1, 2.2, 3, 9.34, undefined, NaN, null];

console.log(getFiniteNumbers(result)); // [1, 2.2, 3, 9.34]
console.log(getFiniteNumbersV2(result)); // [1, 2.2, 3, 9.34]
console.log(getNaN(result)); // [NaN]
console.log(getNaNV2(result)); // [NaN]
console.log(getIntegers(result)); // [1, 3]
