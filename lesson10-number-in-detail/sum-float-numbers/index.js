const getTotalPrice = arr => {
  const getSum = arr.reduce((acc, el) => acc + el);
  const getFloor = Math.floor(getSum * 100) / 100;
  return '$' + getFloor;
};

const result = [1.35, 0.22];
console.log(getTotalPrice(result));
