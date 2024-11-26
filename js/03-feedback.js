const feedbackFormEl = document.querySelector('.js-feedback-form');
const formData = {};

const fillFormField = () => {
  try {
    const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (formDataFromLS === null) {
      return;
    }

    const formDataFromLSKeys = Object.keys(formDataFromLS);

    formDataFromLSKeys.forEach(key => {
      feedbackFormEl.elements[key].value = formDataFromLS[key];
      formData[key] = formDataFromLS[key];
    });

    console.log(formData);
  } catch (err) {
    console.log(err);
  }
};

fillFormField();

const onFormFieldChange = event => {
  const { target: formField } = event;

  const fieldName = formField.name;
  const fieldValue = formField.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
};

feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
