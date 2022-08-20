// // let info = {
// //   name: "john",
// //   email: "salnddh@gmail.com",
// //   experience: ["yahoo", "google", "infosys", []],
// // };
// // console.log(`${info.name} ${info.experience[0]}`);

// let cars = [
//   {
//     color: "purple",
//     type: "minivan",
//     registration: new Date("2017-01-03"),
//     capacity: 7,
//   },
//   {
//     color: "red",
//     type: "station wagon",
//     registration: new Date("2018-03-03"),
//     capacity: 5,
//   },
// ];
// let result = cars.unshift(color);
// console.log(result);

// let car = {
//   color: "red",
//   type: "cabrio",
//   registration: new Date("2016-05-02"),
//   capacity: 2,
// };
// cars.unshift(car);

function getResult() {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  return [num1, num2];
}

function add() {
  let result = getResult();
  console.log(result[0] + result[1]);
}
