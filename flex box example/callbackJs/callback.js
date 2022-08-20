function add(a, b, callback) {
  setTimeout(() => {
    console.log("Addition: ", a + b);
    callback(a + b);
  }, 2000);
}

function sub(a, b, callback) {
  setTimeout(() => {
    console.log("Substraction: ", a - b);
    callback(a - b);
  }, 4000);
}

function mul(a, b, callback) {
  setTimeout(() => {
    console.log("Multiplication: ", a * b);
    callback(a * b);
  }, 6000);
}
function div(a, b, callback) {
  setTimeout(() => {
    console.log("Division: ", a / b);
    callback(a / b);
  }, 8000);
}

add(10, 5, (resultAdd) => {
  sub(resultAdd, 5, (resultSub) => {
    mul(resultSub, 6, (resultMul) => {
      div(resultMul, 10, (resultDiv) => {
        add(resultDiv, 12, (result) => console.log("final result is:", result));
      });
    });
  });
});

// add(3, 5, function (resultAdd) {
//   sub(resultAdd, 2, function (resultSub) {
//     mul(resultSub, 5, function (resultMul) {
//       div(resultMul, 2, function (resultDiv) {
//         add(resultDiv, 17, (data) => console.log("Final Result: ", data));
//       });
//     });
//   });
// });

//Recursion
// 5! = 5 * 4 * 3 * 2 * 1

// factorial(5) = 5 * factorial(4)
//factorial(4) = 4 * factorial(3)
//factorial(3) = 3 * factorial(2)
//factorial(2) = 2 * factorial(1)
//factorial(1) = 1

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// }

// function factorial(num) {
//   // debugger;
//   // console.log("Current Num: ", num);
//   if (num <= 1) return 1;
//   // console.log(`Recusion operation: ${num} * factorial(${num - 1}) `);
//   return num * factorial(num - 1);
// }

// console.log(factorial(5));
