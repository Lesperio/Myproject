// выбираем элемент кнопки по id
const button = document.getElementById('close_button');

// выбираем элемент блока, который нужно скрыть
const block = document.getElementById('proposal');

// добавляем обработчик события клика на кнопку
button.addEventListener('click', function() {
  // скрываем блок, устанавливая свойство display в "none"
  block.style.display = "none";
});
