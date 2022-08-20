// let resume = {
//   name: "priyank mehra",
//   phone: "(718) 2126468",
//   email: "priyank.mehra@gmail.com",
//   aboutUs:
//     "dedicated and efiicient full stack developer with ...... 6 years experience",
//   experience : [
//      {

//      }
//   ]

// };
// console.log(resume.aboutUs);

let data = {
  name: " john",
  age: 23,
  city: "",
  set area(x) {
    this.city = x;
  },
};
data.city = " nagpur";
console.log(data.name + " " + data.city);
