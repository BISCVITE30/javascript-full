const sortAsc = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
      }
    }
  }
  return arr;
};

const sortDesc = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // Меняем значения переменных
      }
    }
  }
  return arr;
};

sortAsc([-1, 0, -6, 13, 1, 2, 8, 1, 5, 3, 2, 5]);
sortDesc([-1, 0, -6, 13, 1, 2, 8, 1, 5, 3, 2, 5]);
