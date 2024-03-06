function countOccurrences(text, str) {
  if (str === '') {
    return null;
  }

  let count = 0;
  let index = text.indexOf(str);

  while (index !== -1) {
    count += 1;
    index = text.indexOf(str, index + 1);
  }

  return count;
}
