// function findSqr(num) {
//   return num * num;
// }
// console.log(findSqr(2));

// function addition(a, b) {
//   return a + b;
// }
// console.log(addition(10, 3));

// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(10, 9));

// function upperCase(name) {
//   return name.toUpperCase();
// }
// console.log(upperCase("saalim"));

// function lowerCase(name) {
//   let result = name.toLowerCase();
//   return result;
// }
// console.log(lowerCase("SAALIM KHAN"));

// function greet(name) {
//   return "good morning " + name;
// }
// console.log(greet("saalim"));

// function greeting(greet, name = "sir") {
//   return greet + " " + name;
// }
// console.log(greeting("welcome"));
// console.log(greeting("thank you"));

// function percentage(name, percent) {
//   if (percent >= 90) {
//     console.log(` ${name} u are in first division`);
//   } else if (percent >= 70 && percent <= 89) {
//     console.log(` ${name} u are in second division`);
//   } else if (percent >= 50 && percent <= 69) {
//     console.log(` ${name} u are in third division`);
//   } else if (percent > 40 && percent <= 49) {
//     console.log(`${name} study hard`);
//   } else {
//     console.log(`${name} you got failed`);
//   }
// }
// percentage("saalim", 60);

// function sum(num1 = 1, num2 = 1) {
//   return num1 + num2;
// }
// console.log(sum(10, 20));

// let number = 10;

// for (let i = 1; i <= 10; i++) {
//   const result = i * number;

//   console.log(`${number} * ${i} = ${result}`);
// }

// let result = "";
// for (let i = 0; i < 5; i++) {
//   result += i;
// }
// console.log(result);

// function checkNumber(num1, num2) {
//   if (num1 > num2) {
//     return `num1 is greater`;
//   } else if (num1 < num2) {
//     return `num2 is greater`;
//   } else {
//     return `please enter valid number`;
//   }
// }
// console.log(checkNumber(10, 20));

// function sum(a, b) {
//   if (a > b) {
//     return a - b;
//   } else if (a < b) {
//     return a + b;
//   } else if (a === b) {
//     return a / b;
//   } else {
//     return `invalid number`;
//   }
// }
// console.log(sum(10, 10));

// function checkEven(num) {
//   if (num % 2 == 0) {
//     return `number is even`;
//   } else if (num % 2 !== 0) {
//     return `number is odd`;
//   } else {
//     return ` invalid number`;
//   }
// }
// console.log(checkEven(20));

// function checkEven(num) {
//   if (num % 2 == 0) {
//     return `number is even`;
//   } else if (num % 2 !== 0) {
//     return `number is odd`;
//   } else {
//     return `invalid number `;
//   }
// }
// console.log(checkEven(8));

// function checkOdd(num) {
//   switch (num % 2) {
//     case 0:
//       console.log(`even`);
//       break;
//     case 1:
//       console.log(`odd`);
//       break;
//     default:
//       console.log(`invalid number`);
//   }
// }
// checkOdd(5.5);

// function checkDay(day) {
//   switch (day) {
//     case 1:
//       console.log("monday");
//       break;

//     case 2:
//       console.log("tuesday");
//       break;

//     case 3:
//       console.log("wednesday");
//       break;

//     case 4:
//       console.log("thursday");
//       break;

//     case 5:
//       console.log("friday");
//       break;

//     case 6:
//       console.log("saturday");
//       break;

//     case 7:
//       console.log("sunday");
//       break;
//   }
// }
// checkDay(2);

// function marksList(m, s, e) {
//   var res = m + s + e / 100;
//   return res;
// }
// console.log(marksList(59, 60, 70));

// function checkAge(age, match = 18) {
//   if (age >= match) {
//     return `u  r eligible`;
//   } else {
//     return `try next year`;
//   }
// }
// console.log(checkAge(20));

// function fizzBuzz(num) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     return `fizz buzz`;
//   } else if (num % 3 == 0) {
//     return `buzz`;
//   } else if (num % 5 == 0) {
//     return `fizz`;
//   } else {
//     return ` invalid buzz`;
//   }
// }
// console.log(fizzBuzz(6));

// const operator = prompt("Enter operator ( either +, -, * or / ): ");

// const number1 = parseFloat(prompt("Enter first number: "));
// const number2 = parseFloat(prompt("Enter second number: "));

function compare(num1, num2) {
  if (num1 > num2) {
    return `num1 is greater`;
  } else if (num1 < num2) {
    return `num2 is greater`;
  }
}
console.log(compare(10, 20));
