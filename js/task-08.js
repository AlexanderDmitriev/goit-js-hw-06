/* Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
    Обработка отправки формы form.login-form должна быть по событию submit.
    При отправке формы страница не должна перезагружаться.
    Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
    Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
где имя поля будет именем свойства, а значение поля - значением свойства. 
    Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
 */

const refs = {
    emailForm: document.querySelector('.login-form label').firstElementChild,
    passwordForm: document.querySelector('.login-form').children[1].firstElementChild,
    submitButtonOnForm: document.querySelector('.login-form').lastElementChild,
    logInForm: document.querySelector('.login-form')
}

const result = {
    email: "",
    password : ""
 };


refs.logInForm.addEventListener('submit', formSubmitHandler);




function formSubmitHandler(event) {
  event.preventDefault();
  if ((refs.emailForm.value) && (refs.passwordForm.value)) {
    result.email = refs.emailForm.value;
    result.password = refs.passwordForm.value;
  }
  else { window.alert("Все поля должны быть заполнены!"); }
  console.log(result);
  refs.logInForm.reset();
}
