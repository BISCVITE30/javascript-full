const getAdults = obj =>
  Object.entries(obj)
    .filter(name => name[1] >= 18)
    .map(name => name[0]);

const obj = {
  'John Doe': 19,
  Bob: 18,
  Tom: 17,
};

console.log(getAdults(obj));
