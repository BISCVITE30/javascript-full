import { createCalculator } from './index';

it('should get 2', () => {
  const result = createCalculator();
  expect(result.add(2)).toEqual(2);
  expect(result.decrease(1)).toEqual(1);
  expect(result.getMemo(1)).toEqual(1);
});
it('should get 2', () => {
  const result = createCalculator();
  expect(result.getMemo()).toEqual(0);
});
