const sortContacts = (contacts, isAsc = true) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts.sort((a, b) => {
    if (isAsc === true) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return result;
};

const result = [
  { name: 'Adey', phoneNumber: '777-77-77' },
  { name: 'Tom', phoneNumber: '777-77-77' },
  { name: 'Ann', phoneNumber: '777-77-77' },
];

console.log(sortContacts(result, false));
