function square(x) {
  x = x * x;
  return x;
}

let y = 10;

let result = square(y);
// console.log(result);
// console.log(y);

let person = {
  name: "john",
  age: 25,
};
function increaseAge(obj) {
  obj.age += 1;
}
increaseAge(person);
// console.log(person);

let var1 = 10;
let var2 = "hi";
let var3 = var1;
var3 += 1;
// console.log(var3);
// console.log(var1);

let num2 = [10, 20];
let num3 = num2;
num3.push(3);
// console.log(num2);
// console.log(num3);

// let a = 100;
// let b = a;
// b = 87;
// a = 66;
// console.log(a);
// console.log(b);

// function modifyValue(num) {
//   num = 100;
// }
// function another() {
//   let a = 10;
//   //   console.log(a);
//   modifyValue(a);
//   //   console.log(a);
// }
// another();

let users = {
  name: "salim",
  age: 20,
};

let { name: userName, age: userAge } = users;
console.log(userName, userAge);

let arr = ["volvo", "audi", "bmw", "ferrari"];
               
function getData(...arr) {
  console.log(arr);
}
getData(arr[0], arr[1]);
