let things = ["table", "chair", "fan", "mug"];
// let [a, b, c] = things;
// console.log(a, b, c);

let data = () => {
  return ["volvo", "bmw", "audi", "ferrari"];
};

let [arr1, arr2, arr3, arr4] = data();
// console.log(arr1, arr2, arr3, arr4);f

let planets = ["mercury", "earth", "venus", "mars", "pluto"];
let [first, , second, ...others] = planets;
// console.log(first, second);
// console.log(others);

let subjects = ["js", "php", "java", "python"];

let [a, , , d] = subjects;
console.log(a, d);

function calculate(a, b) {
  let add = a + b;
  let substract = a - b;
  let multiply = a * b;
  let divide = a / b;
  return [add, substract, multiply, divide];
}
let [add, substract, multiply, divide] = calculate(10, 5);
console.log(add);
console.log(substract);
console.log(multiply);
console.log(divide);
