const cleanTransactionsList = transactions =>
  transactions.filter(tr => isFinite(tr)).map(tr => `$${Number.parseFloat(tr).toFixed(2)}`);

const dirtyTransactions = [61, '  1.9 ', '2.00dollars', '16.4', 17, ' 1 dollar '];
const cleanData = cleanTransactionsList(dirtyTransactions);
console.log(cleanData);
