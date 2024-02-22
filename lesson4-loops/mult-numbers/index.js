const m = 10;
let range = m;
const n = 20;
let result = 1;

do {
  if (range % 2 === 1) {
    result *= range;
  }
  range += 1;
} while (range <= n);

console.log('Result: ' + result);
