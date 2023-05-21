const inputEl = document.querySelector('#font-size-control');

const outputEl = document.querySelector('#text');

inputEl.addEventListener('input', (e) => outputEl.style.fontSize = e.target.value + 'px');
