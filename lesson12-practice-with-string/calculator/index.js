const calc = expresion => {
  const [a, operator, b] = expresion.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = Number(a) - Number(b);
      break;
    case '*':
      result = Number(a) * Number(b);
      break;
    case '/':
      result = Number(a) / Number(b);
      break;
  }

  return `${expresion} = ${result}`;
};

console.log(calc(''));
