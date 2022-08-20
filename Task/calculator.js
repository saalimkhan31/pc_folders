function sumAll(num1, num2, opt) {
  if (opt == "+") {
    return num1 + num2;
  } else if (opt == "-") {
    return num1 - num2;
  } else if (opt == "*") {
    return num1 * num2;
  } else if (opt == "/") {
    return num1 / num2;
  } else if (opt == "%") {
    return num1 % num2;
  }
}
console.log(sumAll(30, 20, "+"));

// function getNumbers() {
//   let num1 = parseFloat(document.querySelector("#num1").value);
//   let num2 = parseFloat(document.querySelector("#num2").value);

//   return [num1, num2];
// }

// function addition() {
//   let numbers = getNumbers();

//   document.querySelector("#demo").innerHTML = numbers[0] + numbers[1];
// }

// function substract() {
//   let numbers = getNumbers();
//   document.querySelector("#demo").innerHTML = numbers[0] - numbers[1];
// }

// function multiply() {
//   let numbers = getNumbers();

//   document.querySelector("#demo").innerHTML = numbers[0] * numbers[1];
// }

// function division() {
//   let numbers = getNumbers();

//   document.querySelector("#demo").innerHTML = numbers[0] / numbers[1];
// }
