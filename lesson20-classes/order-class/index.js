/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.id = this.generateRandomId();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.city = city;
    this.type = type;
  }

  generateRandomId() {
    const min = 1000000;
    const max = 9999999;
    return String(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

