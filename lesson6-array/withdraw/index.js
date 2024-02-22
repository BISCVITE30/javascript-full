const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (index !== -1 && balances[index] >= amount) {
    balances[index] -= amount;
    return balances[index];
  } else {
    return -1;
  }
  // Находим индекс клиента в массиве clients
  // Проверяем, найден ли клиент и достаточно ли у него средств
  // Вычитаем сумму amount из баланса клиента
  // Возвращаем новый баланс клиента
  // Возвращаем -1, если клиент не найден или у него недостаточно средств
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
//   Output: -1 (и массив balances должен быть [1400, 87, -6])
