function clearList() {
  const list = document.querySelector('.categories');
  list.textContent = '';
  console.log(list.innerHTML);
}

clearList();
