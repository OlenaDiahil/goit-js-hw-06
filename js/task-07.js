const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const outputEl = document.querySelector('#text');
console.log(outputEl);

inputEl.addEventListener('input', (e) => outputEl.textContent = e.target.value)