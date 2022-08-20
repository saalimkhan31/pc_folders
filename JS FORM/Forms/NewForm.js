let users = [];
mainDiv = document.querySelector("#main");
let root = document.querySelector("#root");

let nameField = document.querySelector("#name");
let emailField = document.querySelector("#email");
let mobileField = document.querySelector("#mobile");
let ageField = document.querySelector("#age");
let genderField = document.querySelector("#gender");

function addUser() {
  let user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    mobile: document.querySelector("#mobile").value,
    age: document.querySelector("#age").value,
    gender: document.querySelector("#gender").value,
  };

  users.push(user);
  appendTableData();

  users.push(user);
  appendTableData();
}

// let table = document.createElement("table"); // main table
// table.className = "table-head";
let row = document.createElement("tr"); // table row
let nameHeading = document.createElement("th"); // heading 1
nameHeading.textContent = "name";
nameHeading.className = "table-head";
let emailHeading = document.createElement("th"); // heading 2
emailHeading.textContent = "email";
emailHeading.className = "table-head";
let mobileHeading = document.createElement("th"); // heading 3
mobileHeading.textContent = "mobile";
mobileHeading.className = "table-head";
let ageHeading = document.createElement("th"); //  heading 4
ageHeading.textContent = "age";
ageHeading.className = "table-head";
let genderHeading = document.createElement("th"); // heading  5
genderHeading.textContent = "gender";
genderHeading.className = "table-head";

let actionsHeading = document.createElement("th");
actionsHeading.textContent = "actions";
actionsHeading.className = "table-head";

function appendTableData() {
  mainDiv.innerHTML = "";
  root.innerHTML = "";

  row.appendChild(nameHeading);
  row.appendChild(emailHeading);
  row.appendChild(mobileHeading);
  row.appendChild(ageHeading);
  row.appendChild(genderHeading);
  row.appendChild(actionsHeading);

  root.appendChild(row);
  mainDiv.appendChild(root);
  document.body.append(mainDiv);

  for (let i = 0; i < users.length; i++) {
    showRowData(users[i]);
  }
}

function showRowData(data) {
  let tableRow = document.createElement("tr");

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.className = "button";
  deleteBtn.onclick = () => deleteData(data);

  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.className = "button";
  editBtn.onclick = () => updataData(data);

  let nameData = document.createElement("td");
  nameData.textContent = data.name;
  nameData.className = "table-head";
  let emailData = document.createElement("td");
  emailData.textContent = data.email;
  emailData.className = "table-head";

  let phoneData = document.createElement("td");
  phoneData.textContent = data.mobile;
  phoneData.className = "table-head";

  let ageData = document.createElement("td");
  ageData.textContent = data.age;
  ageData.className = "table-head";
  let genderData = document.createElement("td");
  genderData.textContent = data.gender;
  genderData.className = "table-head";

  tableRow.appendChild(nameData);
  tableRow.appendChild(emailData);
  tableRow.appendChild(phoneData);
  tableRow.appendChild(ageData);
  tableRow.appendChild(genderData);

  tableRow.appendChild(editBtn);
  tableRow.appendChild(deleteBtn);
  root.appendChild(tableRow);
  mainDiv.appendChild(root);
}

function deleteData(data) {
  let index = users.indexOf(data);
  users.splice(index, 1);
  appendTableData();
  // let index = users.indexOf(data);
  // users.splice(index, 1);
  // appendTableData();
}

function updataData(data) {
  console.log(data);
}
