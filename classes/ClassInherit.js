// class Animals {
//   constructor(name, breed, kids) {
//     this.animalName = name;
//     this.animalBreed = breed;
//     this.animalKids = kids;
//   }
//   animalInfo() {
//     return `the animal name is ${this.animalName} and the breed of this tiger is ${this.animalBreed} and the kids is ${this.animalKids}`;
//   }
// }

// class Mammals extends Animals {
//   constructor(name, breed, kids, type, weight) {
//     super(name, breed, kids);
//     this.animalType = type;
//     this.animalWeight = weight;
//   }
//   mammalInfo() {
//     return `${this.animalInfo()} and the tiger type is ${
//       this.animalType
//     } and the weight of the tiger is ${this.animalWeight}`;
//   }
// }

// let animalBio = new Mammals("tiger", "siberian", 23, "carnivorous", 200);
// console.log(animalBio.mammalInfo());

// getters setters

class Cars {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  get carName() {
    return this.name + " " + this.year;
  }
  set carName(names) {
    this.name = names;
    this.year = names;
  }
}

let myCar = new Cars("bmw", 1991);
console.log(myCar.carName);
