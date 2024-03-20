function finishList() {
  const list = document.querySelector('ul');
  const special = document.querySelector('.special');

  const listItem1 = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem3 = document.createElement('li');
  const listItem4 = document.createElement('li');

  listItem1.textContent = '1';
  listItem2.textContent = '4';
  listItem3.textContent = '6';
  listItem4.textContent = '8';

  list.prepend(listItem1);
  special.before(listItem2);
  special.after(listItem3);
  list.append(listItem4);

  console.log(list.innerHTML);
}

finishList();
