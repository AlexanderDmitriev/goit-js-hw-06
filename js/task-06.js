/* Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое 
на правильное количество введённых символов.
    <input
        type="text"
        id="validation-input"
        data-length="6"
        placeholder="Please enter 6 symbols"
    />
1) Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
2) Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания. */

const textInput = document.querySelector("#validation-input");
function blurHandler(event) {
    
    if (event.currentTarget.value.trim().length === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid')
    } else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid')
    }
}

textInput.addEventListener('blur', blurHandler);
