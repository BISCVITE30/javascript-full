function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  if (newAge >= 25) {
    this.age = newAge;
    console.log(`New photo request was sent for ${this.name}`);
    return this.age;
  } else if (newAge < 0) {
    return false;
  } else {
    return newAge;
  }
};

const user1 = new User('John', 26);
user1.sayHi();
console.log(user1)
user1.requestNewPhoto();
console.log(user1.setAge(27));
console.log(user1);
