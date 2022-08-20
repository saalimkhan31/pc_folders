// let user = {
//   name: "salim",
//   age: 20,
//   verified: false,
// };
// ({ name, age, salary = 6778 } = user);
// console.log(name, age, salary);

// let userData = {
//   name: "arish",
//   age: 17,
// };

// let { name: x } = userData;
// console.log(x);

let userData = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};
let {
  department: { address },
} = userData;
// console.log(address);

// let a = {
//   x: 1,
//   y: 2,
//   z: {
//     p: 2,
//     q: 5,
//   },
// };
// let b = Object.assign({}, a);

// b.x = 5;
// b.y = 7;
// b.z.p = 100;

// console.log(a);
// console.log(b);

// let person = {
//   name: "john",
//   lastName: "khan",
// };
// // let otherObj = Object.assign({}, person);

// otherObj.name = "arish";
// otherObj.lastName = "syed";
// console.log(otherObj);

let bioData = {
  name: "salim",
  age: 20,
  verified: true,
  hobby: {
    first: "cricket",
    second: "love coding",
  },
};
// let { name, age, verified } = bioData;
({ name: naming, age, verified, hobby } = bioData);
console.log(
  `my name is ${naming} and i am  years ${age} this person is verified ${verified} and i love doing${hobby.second}`
);
