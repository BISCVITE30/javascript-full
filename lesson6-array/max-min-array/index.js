const checker = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max + min > 1000;
};

