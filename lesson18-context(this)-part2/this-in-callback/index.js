const event = {
  guests: [
    {
      name: 'John',
      age: 18,
      email: 'j@gmail.com',
    },
    {
      name: 'Tom',
      age: 19,
      email: 't@gmail.com',
    },
    {
      name: 'Bob',
      age: 20,
      email: 'b@gmail.com',
    },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email,
      }));
  },
};
console.log(event.getInvitations());
