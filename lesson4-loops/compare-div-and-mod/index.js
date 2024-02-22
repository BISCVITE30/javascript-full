let div1 = 0;
let mod1 = 0;
let result = 0;
let sum;

for (let i = 1; i <= 1000; i += 1) {
  result += i;
}

div1 = result / 1234;
mod1 = result % 1234;

console.log((sum = div1 > mod1));
