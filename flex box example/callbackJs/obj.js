// Declarative vs Imperative

const fruits = ["apple", "banana", "cherry", "kiwi"];

//Imperative Programming - (HOW approach)
for (let index = 0; index < fruits.length; index++) {
  // console.log(fruits[index].toUpperCase());
}

//Declarative Programming - (WHAT approach)
fruits.forEach(function (fruit) {
  // console.log(fruit.toUpperCase());
});

//Declarative with Arrow Functions
const forFruits = fruits.forEach((fruit) => fruit.toUpperCase());

const newFruits = fruits.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(newFruits);

const filteredFruits = fruits
  .filter((fruit) => fruit.length > 5)
  .map((fruit) => fruit.toUpperCase());
// console.log(filteredFruits);

// map, filter, reduce

let numArr = [1, 2, 3, 4, 5, 6, 7];

numArr.reduce((prev, curr) => {
  // console.log(prev, curr);
  // return prev + curr;
});

let final = numArr.reduce((prev, curr) => {
  // console.log(prev, curr);
  return prev + curr;
}, 12);

const reducedFruits = fruits.reduce((prev, curr) => {
  // console.log(prev, curr);
  if (curr.length > 5) {
    prev.push(curr);
  }
  return prev;
}, []);
// console.log(reducedFruits);

var pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];

var petCounts = pets.reduce(function (obj, pet) {
  // console.log(obj, pet);
  if (!obj[pet]) {
    obj[pet] = 1;
  } else {
    obj[pet]++;
  }
  return obj;
}, {});

// console.log(petCounts);

// call, apply, bind

const hotelTuliObj = {
  name: "Tuli International",
  rooms: 200,
  bookedRooms: 99,
};

const hotelCenterPoint = {
  name: "Center Point",
  rooms: 300,
  bookedRooms: 199,
};

function bookRoom() {
  this.bookedRooms++;
}

function availableRooms() {
  return this.rooms - this.bookedRooms;
}

function greetGuests(greet, subGreet) {
  console.log(`${greet}, Welcome to ${this.name} !, ${subGreet}`);
}

bookRoom.call(hotelTuliObj);

// hotelTuliObj.bookRoom();
bookRoom.apply();

bookRoom.bind();
