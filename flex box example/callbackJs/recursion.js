//2*2*2
//2*4

// function findPower(num1, num2) {
//   if (num1 == 1) {
//     return num1;
//   }
//   const value = num1 ** num2;
//   return value;
// }
// console.log(findPower(4, 3));

function findPower(base, exp) {
  if (exp <= 1) {
    return base;
  } else if (exp == 0) {
    return 1;
  }

  return base * findPower(base, exp - 1);
}
console.log(findPower(4, 3));
