// function countDown(num) {
//   console.log(num);
//   let newNumber = num - 1;

//   if (newNumber > 0) {
//     countDown(newNumber);
//   }
// }
// countDown(5);

// function logs(num) {
//   if (num > 5) {
//     return;
//   }
//   console.log(num);
//   logs(num + 1);
// }
// logs(1);

// function print(num) {
//   if (num > 15) {
//     return;
//   }
//   console.log(num);
//   print(num + 1);
// }
// print(1);

function randomNum(result = 0, count = 0) {
  if (result === 5) {
    console.log(`the result is ${result}`);
    console.log(`the count is ${count}`);
    return;
  }
  result = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  count++;
  randomNum(result, count);
}
randomNum();
