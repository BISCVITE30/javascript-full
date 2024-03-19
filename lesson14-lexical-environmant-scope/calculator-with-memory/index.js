let memory = 0;
export function add(num) {
  memory += num;
  return memory;
}
export function decrease(num) {
  memory -= num;
  return memory;
}
export function reset() {
  memory = 0;
  return memory;
}
export function getMemo() {
  return memory;
}

console.log(add(8));
console.log(add(6));
console.log(getMemo());
console.log(reset());
