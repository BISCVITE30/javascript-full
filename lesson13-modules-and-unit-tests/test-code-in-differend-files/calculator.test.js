import getSum, { getSquareArray, getOddNumber } from './calculator';

it('should get squared numbers', () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should get odd numbers', () => {
  const result = getOddNumber([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum', () => {
  const result = getSum(2, 3);
  expect(result).toEqual(5);
});
