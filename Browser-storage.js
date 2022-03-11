const contactForm = document.querySelector('#signup');
const content = JSON.parse(window.localStorage.getItem('datastorage'));
function check() {
  if (localStorage.getItem('datastorage')) {
    contactForm.elements.fullName.value = content.fullName;
    contactForm.elements.email.value = content.email;
    contactForm.elements.message.value = content.message;
  }
}
window.onload = check;

function populateStorage() {
  const fullName = contactForm.elements.fullName.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;
  const storage = {
    fullName,
    email,
    message,
  };
  window.localStorage.setItem('datastorage', JSON.stringify(storage));
}

contactForm.addEventListener('change', populateStorage);
