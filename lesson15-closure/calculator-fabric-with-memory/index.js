export function createCalculator() {
  let memory = 0;
  const add = num => {
    memory += num;
    return memory;
  };

  const decrease = num => {
    memory -= num;
    return memory;
  };

  const reset = () => {
    memory = 0;
    return memory;
  };

  const getMemo = () => {
    return memory;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

// const calculator = createCalculator();
// const calculatorNext = createCalculator();

console.log(createCalculator().getMemo()); // 0
// console.log(calculator.add(3));
// console.log(calculator.getMemo()); // 3
// console.log(calculator.decrease(5));
// console.log(calculator.getMemo()); // -2

// console.log(calculatorNext.add(5));
// console.log(calculatorNext.getMemo()); // 5

// console.log(calculator.getMemo()); // -2
// console.log(calculator.reset());
// console.log(calculator.getMemo()); // 0

// console.log(calculatorNext.getMemo()); // 5
