import Validator from './form/validator';
import FormField from './form/formField';
import Form from './form/form';

window.onload = function () {
  const validFIO = function (string) {
    const regexRus = /^[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+\s[A-ЯЁ][а-яё]+$/g;
    const regexEng = /^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/g;
    if (string.match(regexRus) || string.match(regexEng)) {
      return true;
    }
    return false;
  };

  const validEmail = function (string) {
    const regex = /^[\w.+-]+@gmail\.com$/g;
    if (string.match(regex)) {
      return true;
    }
    return false;
  };

  const validPhone = function (string) {
    const regex = /^((\+7|07|8)+([0-9]){10})$/g;
    if (string.match(regex)) {
      return true;
    }
    return false;
  };

  const fieldFIO = document.forms.form.FIO;
  const formFieldFIO = new FormField(fieldFIO, [new Validator(validFIO)]);

  const fieldEmail = document.forms.form.email;
  const formFieldEmail = new FormField(fieldEmail, [new Validator(validEmail)]);

  const fieldPhone = document.forms.form.phone;
  const formFieldPhone = new FormField(fieldPhone, [new Validator(validPhone)]);

  const form = new Form(document.forms.form, [formFieldFIO, formFieldEmail, formFieldPhone]);

  document.forms.form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    form.sendData();
  });
};
