const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 20,
  },
};
const getCustomersList = obj =>
  Object.keys(obj).length === 0
    ? []
    : Object.keys(obj)
        .map(key => ({ ...obj[key], id: key }))
        .sort((a, b) => a.age - b.age)
        .map(properties => ({
          name: properties.name,
          age: properties.age,
          id: properties.id,
        }));

console.log(getCustomersList(customers));
