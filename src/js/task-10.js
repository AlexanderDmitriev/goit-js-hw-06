/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, 
сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlNumber: document.querySelector('#controls').firstElementChild,
  boxesDiv: document.querySelector('#boxes'),
  createButton: document.querySelector('#controls').children[1],
  destroyButton: document.querySelector('#controls').children[2]
}


function numberHandler(event) {
  
  boxAdding(refs.controlNumber.value);
}


function boxAdding(elements) {
  let result;
  const a = Number(refs.boxesDiv.children.length);
  
  for(let i=0;i<elements;i+=1)
  {
    result = document.createElement('div');
    result.classList.add('squeres');
    result.style.width = `calc(30px + (${(i + a) * 10}px)`;
    result.style.height = `calc(30px + (${(i + a) * 10}px)`;
    result.style.backgroundColor = getRandomHexColor();
    refs.boxesDiv.appendChild(result);
  }
  
}

function destroyHandler(event) {
    
 }



refs.createButton.addEventListener('click', numberHandler);
refs.destroyButton.addEventListener('click', destroyHandler);