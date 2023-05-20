const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

const lengthAttributeEl = +inputEl.getAttribute('data-length');

inputEl.addEventListener("change", () => {
    if (inputEl.value.length === lengthAttributeEl) {
        inputEl.blur(inputEl.style.borderColor = "green");
    } else {
        inputEl.blur(inputEl.style.borderColor = "red");
    }
});