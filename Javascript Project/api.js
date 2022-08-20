// let globalData = [];

// function getData() {
//   let user = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     mobile: document.querySelector("#mobile").value,
//     age: document.querySelector("#age").value,
//     gender: document.querySelector("#gender").value,
//   };
//   globalData.push(user);
//   // console.log(globalData);
//   tableData();
// }

// let mainDiv = document.createElement("div");

// let mainTable = document.createElement("table");
// mainTable.className = "table-head";

// let tableRow = document.createElement("tr");

// let nameHeading = document.createElement("th");
// nameHeading.textContent = "Name";
// nameHeading.className = "table-head";

// let emailHeading = document.createElement("th");
// emailHeading.textContent = "Email";
// emailHeading.className = "table-head";

// mobileHeading = document.createElement("th");
// mobileHeading.textContent = "Phone";
// mobileHeading.className = "table-head";

// let ageHeading = document.createElement("th");
// ageHeading.textContent = "Age";
// ageHeading.className = "table-head";

// let genderHeading = document.createElement("th");
// genderHeading.textContent = "Gender";
// genderHeading.className = "table-head";

// tableRow.appendChild(nameHeading);
// tableRow.appendChild(emailHeading);
// tableRow.appendChild(mobileHeading);
// tableRow.appendChild(ageHeading);
// tableRow.appendChild(genderHeading);

// mainTable.appendChild(tableRow);
// mainDiv.appendChild(mainTable);
// document.body.append(mainDiv);

// function tableData() {
//   for (let i = 0; i < globalData.length; i++) {
//     let loopRow = document.createElement("tr");

//     let updateBtn = document.createElement("button");
//     updateBtn.textContent = "update";
//     updateBtn.className = "btn";

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     deleteBtn.className = "btn";
//     deleteBtn.onclick = () => deleteData(globalData[i]);

//     let nameData = document.createElement("td");
//     nameData.textContent = globalData[i].name;
//     nameData.className = "table-head";

//     let emailData = document.createElement("td");
//     emailData.textContent = globalData[i].email;
//     emailData.className = "table-head";

//     let mobileData = document.createElement("td");
//     mobileData.textContent = globalData[i].mobile;
//     mobileData.className = "table-head";

//     let ageData = document.createElement("td");
//     ageData.textContent = globalData[i].age;
//     ageData.className = "table-head";

//     let genderData = document.createElement("td");
//     genderData.textContent = globalData[i].gender;
//     genderData.className = "table-head";

//     loopRow.appendChild(nameData);
//     loopRow.appendChild(emailData);
//     loopRow.appendChild(mobileData);
//     loopRow.appendChild(ageData);
//     loopRow.appendChild(genderData);
//     loopRow.appendChild(updateBtn);
//     loopRow.appendChild(deleteBtn);

//     mainTable.appendChild(loopRow);
//   }
// }

// function deleteData(data) {
//   let index = globalData.indexOf(data);
//   globalData.splice(index, 1);
//   console.log(globalData);
// }

/////////////////////////////////////////////////////////////////////
// =-------------------------------------------------------------------

/ let users = []; /; // declared global array

// function addUser() {
//   let user = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     mobile: document.querySelector("#mobile").value,
//     age: document.querySelector("#age").value,
//     gender: document.querySelector("#gender").value,
//   };
//   users.push(user);
//   showTableData();
// }

// let tableDiv = document.createElement("div"); // parent div

// let table = document.createElement("table"); // main table
// table.className = "table-head";

// let row = document.createElement("tr"); // table row

// let nameHeading = document.createElement("th"); // heading 1
// nameHeading.textContent = "name";
// nameHeading.className = "table-head";

// let emailHeading = document.createElement("th"); // heading 2
// emailHeading.textContent = "email";
// emailHeading.className = "table-head";

// let mobileHeading = document.createElement("th"); // heading 3
// mobileHeading.textContent = "mobile";
// mobileHeading.className = "table-head";

// let ageHeading = document.createElement("th"); //  heading 4
// ageHeading.textContent = "age";
// ageHeading.className = "table-head";

// let genderHeading = document.createElement("th"); // heading  5
// genderHeading.textContent = "gender";
// genderHeading.className = "table-head";

// // /// creating elements end-------------------------------------------

// // row.appendChild(nameHeading);
// // row.appendChild(emailHeading);
// // row.appendChild(mobileHeading); //// row appendchild heading
// // row.appendChild(ageHeading);
// // row.appendChild(genderHeading);

// // table.appendChild(row);
// // tableDiv.appendChild(table); //// append area
// // document.body.append(tableDiv);
// let tableRow = document.createElement("tr");
// function showTableData() {
//   tableRow.innerHTML = "";

//   row.appendChild(nameHeading);
//   row.appendChild(emailHeading);
//   row.appendChild(mobileHeading); //// row appendchild heading
//   row.appendChild(ageHeading);
//   row.appendChild(genderHeading);

//   table.appendChild(row);
//   tableDiv.appendChild(table); //// append area
//   document.body.append(tableDiv);

//   for (let i = 0; i < users.length; i++) {
//     displayRow(users[i]);
//   }
// }

// function displayRow(data) {
//   let tableRow = document.createElement("tr");
//   let editBtn = document.createElement("button"); //     button---
//   editBtn.textContent = "update";
//   editBtn.className = "button";

//   let deleteBtn = document.createElement("button"); //    button---
//   deleteBtn.textContent = "delete";
//   deleteBtn.className = "button";
//   deleteBtn.onclick = () => deleteData(data);

//   let nameData = document.createElement("td");
//   nameData.textContent = data.name;
//   nameData.className = "table-head";
//   let emailData = document.createElement("td");
//   emailData.textContent = data.email;
//   emailData.className = "table-head";

//   let phoneData = document.createElement("td");
//   phoneData.textContent = data.mobile;
//   phoneData.className = "table-head";

//   let ageData = document.createElement("td");
//   ageData.textContent = data.age;
//   ageData.className = "table-head";

//   let genderData = document.createElement("td");
//   genderData.textContent = data.gender;
//   genderData.className = "table-head";

//   tableRow.appendChild(nameData);
//   tableRow.appendChild(emailData);
//   tableRow.appendChild(phoneData);
//   tableRow.appendChild(ageData);
//   tableRow.appendChild(genderData);

//   tableRow.appendChild(editBtn);
//   tableRow.appendChild(deleteBtn);

//   table.appendChild(tableRow);
// }

// function deleteData(data) {
//   let index = users.indexOf(data);

//   users.splice(index, 1);
//   console.log(users);
// }
