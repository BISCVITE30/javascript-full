const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
