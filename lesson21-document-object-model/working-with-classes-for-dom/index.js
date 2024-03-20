function manageClasses() {
  const ul = document.querySelector('ul');
  const list1 = document.querySelector('.one');
  const list2 = document.querySelector('.two');
  const list3 = document.querySelector('.three');
  const list4 = document.querySelector('.four');

  list1.classList.add('selected');
  list2.classList.remove('selected');
  list3.classList.toggle('three_done');
  if (list4.classList.contains('some-class')) {
    list4.classList.add('another-class');
  }
  console.log(ul.innerHTML);
}

manageClasses();
