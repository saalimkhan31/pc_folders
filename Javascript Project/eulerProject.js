function checkMultiple() {
  let newArr = [];
  for (let i = 3; i <= 1000; i++) {
    if (i % 3 == 0) {
      newArr.push(i);
    } else if (i % 5 == 0) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(checkMultiple());

function addMultiple() {
  let add = checkMultiple();
  let sum = add.reduce((curVal, preVal) => curVal + preVal);
  return sum;
}
console.log(addMultiple());

// function showTableData() {
//   for (let i = 0; i < users.length; i++) {
//     let tableRow = document.createElement("tr");
//     let nameData = document.createElement("td");
//     let emailData = document.createElement("td");
//     let phoneData = document.createElement("td");
//     let genderData = document.createElement("td");

//     tableRow.appendChild(nameData, emailData, phoneData, genderData);
//   }
// }
