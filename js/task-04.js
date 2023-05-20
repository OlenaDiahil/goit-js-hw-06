const decrementBtnEl = document.querySelector('[data-action="decrement"]');
console.log(decrementBtnEl);

const valueEl = document.querySelector("#value");
console.log(valueEl);

const incrementBtnEl = document.querySelector('[data-action="increment"]');
console.log(incrementBtnEl);

let counterValue = 0;

const handleClickIncrement = () => {
  counterValue += 1;
  valueEl.textContent = counterValue; 
};

const handleClickDecrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue; 
};


incrementBtnEl.addEventListener("click", handleClickIncrement);

decrementBtnEl.addEventListener("click", handleClickDecrement);

