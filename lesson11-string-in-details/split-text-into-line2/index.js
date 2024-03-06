const splitString = (text, len = 10) => {
  if (!(typeof text === 'string')) {
    return null;
  }

  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.slice(startPosition, startPosition + len);
    if (chunk.length === 0) {
      break;
    }
    if (startPosition + len >= text.length) {
      strArr.push((chunk[0] + chunk.slice(1)).padEnd(len, '.'));
    } else {
      strArr.push(chunk[0] + chunk.slice(1));
    }
    startPosition += len;
  }

  return strArr;
};

console.log(splitString('some message with the text', 12));
