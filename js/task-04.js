/* Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
1 Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
2 Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
3 Обновляй интерфейс новым значением переменной counterValue. */

let counterValue = 0;
let valueReflection = document.querySelector('#value');
const refs = {
    increment: document.querySelector('button[data-action="increment"]'),
    
    decrement: document.querySelector('button[data-action="decrement"]')
};
const changeValue = (step) => {
    counterValue = counterValue + step;
    valueReflection.textContent = counterValue;

}

refs.increment.addEventListener('click', () => changeValue(+1));
refs.decrement.addEventListener('click', () => changeValue(-1));

