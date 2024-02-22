function sum(from, to) {
  let result = 0;
  for (let i = from; i <= to; i += 1) {
    result += i;
  }
  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}
// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
compareSums(5, 10, 11, 11);
compareSums(1, 2, 3, 4);
