const display = document.querySelector(".display");

function calculate(e) {
  e.preventDefault();

  let first = +e.target.first.value;
  let second = +e.target.second.value;
  let operator = e.target.operator.value;

  if (!isNaN(first) && !isNaN(second)) {
    switch (operator) {
      case "+":
        display.innerHTML = first + second;
        break;
      case "-":
        display.innerHTML = first - second;
        break;
      case "/":
        display.innerHTML = first / second;
        break;
      case "*":
        display.innerHTML = first * second;
        break;
    }
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  calculate(e);
});
