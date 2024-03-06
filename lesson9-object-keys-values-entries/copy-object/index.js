const copyObj = obj => {
  // eslint-disable-next-line prefer-object-spread
  const toCopy = Object.assign({}, obj);
  return toCopy;
};

const obj = {
  'John Doe': 19,
  Bob: 18,
  Tom: 17,
};

console.log(copyObj(obj));
