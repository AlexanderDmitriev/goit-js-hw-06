/* Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
при клике на button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
} */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  buttonForChangeColor: document.querySelector('.change-color'),
  spanForDisplayingChangeColor: document.querySelector('.color')
}

refs.buttonForChangeColor.addEventListener('click', changeColorHandler);

function changeColorHandler(event){
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanForDisplayingChangeColor.textContent=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const x=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(document.body.style.backgroundColor);
}
