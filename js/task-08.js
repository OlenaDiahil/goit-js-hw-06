const form = document.querySelector('form.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const elements = form.elements;
  const formData = {};

  let isFormValid = true;
    elements.array.forEach(element => {
        const input = element;
        if (input.type !== 'submit' && input.value === '') {
            isFormValid = false;
        };
    });

  if (!isFormValid) {
    alert('Всі поля повинні бути заповнені!');
  } else {
    elements.array.forEach(element => {
        const input = element;
        if (input.type !== 'submit') {
            formData[input.name] = input.value;
        }
    });

    console.log(formData);
    form.reset(); 
  }
});