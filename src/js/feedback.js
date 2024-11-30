import { save, load } from './localStorage';
import iziToast from 'izitoast';

const feedbackFormEl = document.querySelector('.js-feedback-form');
const formData = {
  user_name: '',
  user_email: '',
  user_message: '',
};

const fillFormField = () => {
  const formDataFromLS = load('feedback-form-state');

  if (formDataFromLS === undefined) {
    return;
  }

  const formDataFromLSKeys = Object.keys(formDataFromLS);

  formDataFromLSKeys.forEach(key => {
    feedbackFormEl.elements[key].value = formDataFromLS[key];
    formData[key] = formDataFromLS[key];
  });

  console.log(formData);
};

fillFormField();

const onFormFieldChange = event => {
  const { target: formField } = event;

  const fieldName = formField.name;
  const fieldValue = formField.value;

  formData[fieldName] = fieldValue;

  save('feedback-form-state', formData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formDataValues = Object.values(formData);

  if (formDataValues.some(el => el === '')) {
    iziToast.error({
      message: 'Fill all form fields!',
      position: 'topRight',
    });

    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
