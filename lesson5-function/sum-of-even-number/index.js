function getSum(from, to) {
  let num = from;
  let result = 0;
  while (num <= to) {
    if (num % 2 === 0) {
      result += num;
    }
    num += 1;
  }
  return result;
}

getSum(8, 20);
