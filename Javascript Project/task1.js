function getNumbers() {
  let num1 = parseFloat(document.querySelector("#num1").value);
  let num2 = parseFloat(document.querySelector("#num2").value);

  return [num1, num2];
}

function addition() {
  //   console.log(getNumbers());
  //   alert(num1 + num2);
  let numbers = getNumbers();
  alert(numbers[0] + numbers[1]);
}

function substract() {
  //   console.log(getNumbers());
  //   alert(num1 - num2);
  let numbers = getNumbers();
  alert(numbers[0] - numbers[1]);
}

function multiply() {
  //   console.log(getNumbers());
  //   alert(num1 * num2);
  let numbers = getNumbers();
  alert(numbers[0] * numbers[1]);
}

function division() {
  //   console.log(getNumbers());
  //   alert(num1 / num2);
  let numbers = getNumbers();
  alert(numbers[0] / numbers[1]);
}

function power(p1, p2) {
  //   alert("pow");
  let numbers = getNumbers();
  let result = 1;
  for (let i = 0; i < numbers[1]; i++) {
    result *= numbers[0];
  }
  alert(result);
}
