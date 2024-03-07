export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (index !== -1 && balances[index] >= amount) {
    return balances[index] - amount;
  } else {
    return -1;
  }
};

// examples
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50); // ==> 37 (balances array should be [1400, 37, -6])
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10); // ==> -1 (balances array should be [1400, 87, -6])
