function display(some) {
  console.log(some);
}
let myPromise = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) {
    resolve("ok");
  } else {
    reject("error");
  }
});
// myPromise.then(
//   function (value) {
//     display(value);
//   },
//   function (error) {
//     display(error);
//   }
// );
// myPromise.then(
//   (value) => {
//     display(value);
//   },
//   (error) => {
//     display(error);
//   }
// );

// console.log("first");
// console.log("second");
// setTimeout(() => {
//   console.log("third");
// }, 5000);
// console.log("fifth");

// const getData = (data) => {
//   return new Promise((resolve, reject) => {
//     if ("code succesfull") {
//       resolve();
//     } else if ("error in code") {
//       reject();
//     }
//   });
// };
