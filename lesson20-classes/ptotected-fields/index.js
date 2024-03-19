class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    if (value > this.balance) {
      console.log('No enough funds');
      return;
    }

    this.balance -= value;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.getBalance());
wallet1.deposit(15);
console.log(wallet1.getBalance());
wallet1.withdraw(10);
console.log(wallet1.getBalance());
wallet1.withdraw(100);
console.log(wallet1.getBalance());
