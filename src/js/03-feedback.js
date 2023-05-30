import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(text, 500));
form.addEventListener('submit', onFormSubmit);

function text() {
  const dataStorage = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataStorage));
}



function onFormSubmit(event) {
  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля');
  }
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  }


saveFormData();
function saveFormData() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  email.value = savedMessage.email || '';
  message.value = savedMessage.message || '';
}
