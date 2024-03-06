const compareObjects = (firstObj, secondObj) => {
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => {
    if (typeof firstObj[key] === 'object' && typeof secondObj[key] === 'object') {
      return compareObjects(firstObj[key], secondObj[key]);
    } else {
      return firstObj[key] === secondObj[key];
    }
  });
};

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
