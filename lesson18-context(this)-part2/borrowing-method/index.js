const wallet = {
  transactions: [1, -20, 5, 7, 3, 20, 430],
  getMax() {
    return Math.max.apply(null, this.transactions);
  },
  getMin() {
    return Math.min.apply(null, this.transactions);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());
