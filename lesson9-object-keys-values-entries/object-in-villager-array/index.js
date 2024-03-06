const getPeople = obj =>
  Object.values(obj).reduce((acc, room) => acc.concat(room.map(person => person.name)), []);

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Den' }, { name: 'Denis' }, { name: 'Pavel' }],
  room3: [{ name: 'Max' }, { name: 'Alex' }, { name: 'Nikitos' }, { name: 'Panfil' }],
};

console.log(getPeople(rooms));
