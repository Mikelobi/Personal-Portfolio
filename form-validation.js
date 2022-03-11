// Form validation
const form = document.querySelector('#signup');
const emailEl = document.querySelector('#email');
const emailTag = document.querySelector('#tag');

// Functions to show error / success
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove('sucess');
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  formField.classList.add('success');
  const error = formField.querySelector('small');
  error.textContent = '';
};

// Form validation functions
const isRequired = (value) => {
  if (value === '') {
    return false;
  }
  return true;
};

// Validate email
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  const lower = email.toLowerCase();
  if (!isRequired(email)) {
    showError(emailTag, 'Email cannot be blank.');
  } else if (lower !== email) {
    showError(emailTag, 'Email must be lowercase');
  } else {
    showSuccess(emailTag);
    valid = true;
  }
  return valid;
};

// Form event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isEmailValid = checkEmail();
  const isFormValid = isEmailValid;
  if (isFormValid) {
    form.submit();
  }
});
