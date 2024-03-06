const reverseSrting = str => (!(typeof str === 'string') ? null : str.split('').reverse().join(''));

console.log(reverseSrting(false));
