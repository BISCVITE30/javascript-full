import { calc } from './calculator';

it('get result +', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('2 + 2 = 4');
});
it('get result -', () => {
  const result = calc('2 - 2');
  expect(result).toEqual('2 - 2 = 0');
});
it('get result *', () => {
  const result = calc('2 * 2');
  expect(result).toEqual('2 * 2 = 4');
});
it('get result /', () => {
  const result = calc('2 / 2');
  expect(result).toEqual('2 / 2 = 1');
});
