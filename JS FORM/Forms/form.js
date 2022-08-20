let users = [];

let root = document.querySelector("#root");
let updateData = document.querySelector("#updateUser");

let nameField = document.querySelector("#name");
let emailField = document.querySelector("#email");
let mobileField = document.querySelector("#mobile");
let genderField = document.querySelector("#gender");

function addUser() {
  let user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    mobile: document.querySelector("#mobile").value,
    gender: document.querySelector("#gender").value,
  };

  users.push(user);
  appendTableData();
}

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

let genderHeading = document.createElement("th"); // heading  5
genderHeading.textContent = "gender";
genderHeading.className = "table-head";

let actionHeading = document.createElement("th");
actionHeading.textContent = " action";
actionHeading.className = "table-head";

function appendTableData() {
  //reintializing table

  root.innerHTML = "";

  //// row appendchild heading

  row.appendChild(nameHeading);
  row.appendChild(emailHeading);
  row.appendChild(mobileHeading);

  row.appendChild(genderHeading);
  row.appendChild(actionHeading);

  //appending table heading to table
  root.appendChild(row);

  document.body.append(root);

  for (let i = 0; i < users.length; i++) {
    displayRow(users[i]);
  }
}

function displayRow(data) {
  let tableRow = document.createElement("tr");
  let editBtn = document.createElement("button");
  editBtn.textContent = "update";
  editBtn.className = "button";
  editBtn.addEventListener("click", () => updateUsers(data));

  let deleteBtn = document.createElement("button"); //
  deleteBtn.textContent = "delete";
  deleteBtn.className = "button";

  deleteBtn.addEventListener("click", () => deleteData(data));

  let nameData = document.createElement("td");
  nameData.textContent = data.name;
  nameData.className = "table-head";
  let emailData = document.createElement("td");
  emailData.textContent = data.email;
  emailData.className = "table-head";

  let phoneData = document.createElement("td");
  phoneData.textContent = data.mobile;
  phoneData.className = "table-head";

  let genderData = document.createElement("td");
  genderData.textContent = data.gender;
  genderData.className = "table-head";

  tableRow.appendChild(nameData);
  tableRow.appendChild(emailData);
  tableRow.appendChild(phoneData);

  tableRow.appendChild(genderData);

  tableRow.appendChild(editBtn);
  tableRow.appendChild(deleteBtn);

  root.appendChild(tableRow);
}

function deleteData(data) {
  let index = users.indexOf(data);
  for (let i = 0; i < users.length; i++) {
    if (users[i] === data) {
      users.splice(index, 1);
      break;
    }
  }
  appendTableData();
}

function updateUsers(data) {
  console.log(data);
}

function updateUsersData(data) {
  let updateInfo = {
    editName: document.querySelector("#editName").value,
    editEmail: document.querySelector("#editEmail").value,
    editMobile: document.querySelector("#editMobile").value,
    editGender: document.querySelector("#editGender").value,
  };
}

function updateUsers() {}
