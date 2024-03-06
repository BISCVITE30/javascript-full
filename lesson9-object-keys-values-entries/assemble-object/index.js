function buildObject(keysList, valuesList) {
  const obj = keysList.reduce((acc, key, index) => {
    acc[key] = valuesList[index];
    return acc;
  }, {});
  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
