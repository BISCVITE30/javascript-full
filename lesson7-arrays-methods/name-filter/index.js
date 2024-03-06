const filterNames = (arr, text) => arr.filter(name => name.includes(text) && name.length > 5);

filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya');
//   Output: ['Olivya', 'Nastya']
