function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  },
};

const deferredSayHi = defer(user.sayHi, 1000);

deferredSayHi();
