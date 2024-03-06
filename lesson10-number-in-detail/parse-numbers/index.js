/* eslint-disable radix */
const getParsedIntegers = arr => {
  const result = arr;
  return result.map(elem => Number.parseInt(elem));
};

const getParsedIntegersV2 = arr => {
  const result = arr;
  return result.map(elem => parseInt(elem));
};

const getParsedFloats = arr => {
  const result = arr;
  return result.map(elem => Number.parseFloat(elem));
};

const getParsedFloatsV2 = arr => {
  const result = arr;
  return result.map(elem => parseFloat(elem));
};

const result = [1, '  2.2', 3, 9.34, undefined, NaN, null];

console.log(getParsedIntegers(result));
console.log(getParsedIntegersV2(result));
console.log(getParsedFloats(result));
console.log(getParsedFloatsV2(result));
