it('17 и в Африке 17', () => {
  expect(17).toEqual(17);
});

it('17 это вам не 18', () => {
  expect(17).not.toEqual(18);
});

const getEvenNumber = arr => arr.filter(num => num % 2 === 0);

it('should get even number from array', () => {
  const result = getEvenNumber([1, 2, 3, 4, 5, 6]);
  expect(result).toEqual([2, 4, 6]);
});
