// function checkCharAt(num) {
//   return num.charAt(0);
// }
// console.log(checkCharAt("my world world"));

// function checkLength(str) {
//   let result = str.length;
//   return result;
// }
// console.log(checkLength("my name is saalim khan"));

// let fruits = " apple, banana";
// let res = fruits.substring(0, 6);
// console.log(res);

// let myName = "ABCDEFGH";
// let name = myName.slice(3);
// console.log(name);

// function sliceStr(str) {
//   let result = str.slice(0, 14);
//   return result;
// }
// console.log(sliceStr("saalim khan")); ///// slice method

// function Case(name) {
//   return name.toUpperCase();
// }
// console.log(Case("salim")); ////  uppercase method

// let name = "saalim";
// let surname = "khan";
// let education = "graduate";
// console.log(name.concat(surname, education)); /////// concat method

// var text1 = "        heloo world";
// var text2 = text1.trim();
// console.log(text1.length + " " + text2.length); //// trim method

// var text = "5";
// console.log(text.padStart(9, 7));

// var text = "heloo world";
// var result = text.charAt(0);
// console.log(result);

// var text = " Heloo world";
// console.log(text[2]);

// // var text = "my name is sulmain khan";
// // var replaceText = text.replace("sulmain", "saalim");
// // console.log(replaceText);

// function myText(str) {
//   var replaceText = str.replace("salman", "saleem");
//   return replaceText;
// }
// console.log(myText("my name is salman"));

// var text = "heloo welcome";
// var result = text.indexOf("welcome");
// console.log(result);

// var text = "heloo js";
// var result = text.repeat(3);
// console.log(result + " ");

// var text = "Salim Khan";
// var result = text.toLocaleLowerCase();
// console.log(result);

// let x = (str) => str.split();
// console.log(x("saalim ,khan, 23"));

// function sumAll(num1, num2, opt) {
//   if (opt == "+") {
//     return num1 + num2;
//   } else if (opt == "-") {
//     return num1 - num2;
//   } else if (opt == "*") {
//     return num1 * num2;
//   } else {
//     return `invalid number`;
//   }
// }
// console.log(sumAll(30, 20, "-"));

// function evenOdd(num) {
//   if (num % 2 == 0) {
//     return `number is even`;
//   } else if (num % 2 !== 0) {
//     return `number is odd`;
//   } else {
//     return `invalid number`;
//   }
// }
// console.log(evenOdd(11));

let day = 5;

if (day == 1) {
  console.log("sunday");
} else if (day == 2) {
  console.log("monday");
} else if (day == 3) {
  console.log("tuesday");
} else if (day == 4) {
  console.log("wednesday");
} else if (day == 5) {
  console.log("thursday");
} else if (day == 6) {
  console.log("friday");
} else if (day == 7) {
  console.log("saturday");
}

function strSlice(name) {
  let result = name.slice(26, 29);
  return result;
}
console.log(strSlice(`my name is saalim and i am an engineer`));

function replaceName(name) {
  let res = name.replace("atif", "saalim");
  return res;
}
console.log(replaceName("my name is atif khan"));
