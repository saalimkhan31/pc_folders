// class car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
// }
// let myCar = new car("ford", 2019);
// console.log(`${myCar.name} ${myCar.model}`);

// let obj = {
//   name: "salim",
//   age: 20,
// };
// console.log(`${obj.name} ${obj.age}`);
// class Car {
//   constructor(brand, type) {
//     this.brand = brand;
//     this.types = type;
//   }
//   present() {
//     return "I have a " + this.brand + " " + this.type;
//   }
// }

// class Model extends Car {
//   constructor(brand, types, mod) {
//     super(brand, types);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// class Humans {
//   constructor(name, age, rollNum) {
//     this.myName = name;
//     this.age = age;
//     this.rollNum = rollNum;
//   }
//   info() {
//     return `${this.myName} ${this.age} ${this.rollNum}`;
//   }
// }
// let student = new Humans("salim", 35, 7777);
// // console.log(student.info());

// class Vehicle {
//   constructor(brand, year) {
//     this.year = year;
//     this.brand = brand;
//   }
//   info() {
//     return this.year + " " + this.brand;
//   }
// }
// class Car extends Vehicle {
//   constructor(brand, year, fuel) {
//     super(brand, year);
//     this.fuel = fuel;
//   }
//   carInfo() {
//     return this.info() + " " + this.fuel;
//   }
// }

// const vehicleOne = new Car("audi", 2015, "petrol");
// console.log(vehicleOne.carInfo());

async function Alldata() {
  let url = "https://fakestoreapi.com/products";
  let info = await fetch(url);
  let data = await info.json();
  console.log(data);
  return data;
}
// console.log(Alldata());

async function showdata() {
  let apiData = await Alldata();
}
showdata();
