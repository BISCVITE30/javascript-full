function increaser(a, index) {
  let inc = a;
  if (a > index) {
    inc += index;
  }
  return a;
}

increaser(7, 5);
