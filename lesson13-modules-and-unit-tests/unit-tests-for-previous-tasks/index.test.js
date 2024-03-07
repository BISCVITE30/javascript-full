import { withdraw } from '../../lesson7-arrays-methods/withdraw';
import { reverseArray } from '../../lesson7-arrays-methods/reverse-array';
import { getAdults } from '../../lesson8-object-basic/object-filtering';

it('should get result', () => {
  const result = withdraw('string');
  expect(result).toEqual(-1);
});
it('should get result', () => {
  const result = withdraw([]);
  expect(result).toEqual(-1);
});
it('should get result', () => {
  const result = withdraw(['Peter', 'John', 'User'], [1400, 87, -6], 'Peter', 1399);
  expect(result).toEqual(1);
});
it('should get result', () => {
  const result = getAdults({ Den: 0, Ann: 43 });
  expect(result).toEqual({ Ann: 43 });
});
it('should get result', () => {
  const result = getAdults('string');
  expect(result).toEqual({});
});
it('should get result', () => {
  const result = getAdults({ 0: 0 });
  expect(result).toEqual({});
});
it('should get result', () => {
  const result = reverseArray('string');
  expect(result).toEqual(null);
});
it('should get result', () => {
  const result = reverseArray(0);
  expect(result).toEqual(null);
});
it('should get result', () => {
  const result = reverseArray(['string', 'basic']);
  expect(result).toEqual(['basic', 'string']);
});
