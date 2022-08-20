let user = {
  id: 12,
  name: "Mohammad",
  email: "moh@xyz.com",
  mobile: 9876543210,
  isVerified: false,
};
let user1 = {
  id: 13,
  name: "Kashif",
  email: "Kashif@xyz.com",
  mobile: 9876543210,
  isVerified: true,
};
let users = [user, user1];

let fruits = [
  { fruit: "apple", price: 123 },
  { fruit: "cherry", price: 345 },
];

let addFormEl = document.querySelector("#addUserForm");
let editFormEl = document.querySelector("#editUserForm");

addFormEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let data = event.target.children;
  let name = data.name.value || null;
  let email = data.email.value || null;
  let mobile = data.mobile.value || null;
  let isVerified = data.isVerified.value || null;

  addUser(name, email, Number(mobile), Boolean(isVerified));
});

editFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.children);
  let data = event.target.children;
  let id = data.id.value || null;
  let name = data.name.value || null;
  let email = data.email.value || null;
  let mobile = data.mobile.value || null;
  let isVerified = data.isVerified.value || null;
  let updatedObj = {
    id: Number(id),
    name,
    email,
    mobile: Number(mobile),
    isVerified: isVerified,
  };
  console.log(updatedObj);
  editUser(updatedObj);

  data.id.value = "";
  data.name.value = "";
  email = data.email.value = "";
  mobile = data.mobile.value = "";
  isVerified = data.isVerified.value = "";
});

function editUser(userData) {
  for (let index = 0; index < users.length; index++) {
    if (users[index].id === userData.id) {
      users[index] = userData;
      break;
    }
  }
  generateTable(users);
}

function addUser(name, email, mobile, isVerified) {
  let userObj = {
    id: Date.now(),
    name,
    email,
    mobile,
    isVerified,
  };

  users.push(userObj);
  console.log("=============Added User=======================");
  console.log(users);
  console.log("=============Added User=======================");
  generateTable(users);
}

function createRow(tblEl, data, withHeader = false) {
  let tableRowEl = document.createElement("tr");

  for (let key in data) {
    const value = data[key];
    let el = withHeader ? createRowHeading(value) : createRowData(value);
    tableRowEl.appendChild(el);
  }
  if (!withHeader) {
    let editBtnEl = createActionBtn();
    editBtnEl.textContent = "Update";
    editBtnEl.addEventListener("click", function (e) {
      console.log(data);
      let isUpdateConfirmed = confirm("Are you sure to update this user?");
      if (!isUpdateConfirmed) return false;

      editFormEl.children.id.value = data.id;
      editFormEl.children.name.value = data.name;
      editFormEl.children.email.value = data.email;
      editFormEl.children.mobile.value = data.mobile;
      editFormEl.children.isVerified.value = data.isVerified;
    });
    let editEl = createRowData(editBtnEl);
    tableRowEl.appendChild(editEl);

    let deleteBtnEl = createActionBtn();
    deleteBtnEl.textContent = "Delete";
    deleteBtnEl.addEventListener("click", function (e) {
      alert("Delete Successful.");
      let isDeleteConfirmed = confirm("Are you sure to delete this user?");
      isDeleteConfirmed && deleteUser(data.id);
    });
    let delEl = createRowData(deleteBtnEl);
    tableRowEl.appendChild(delEl);
  }
  tblEl.appendChild(tableRowEl);
}

function deleteUser(userId) {
  console.log("====================================");
  console.log(userId);
  console.log("====================================");
  for (let index = 0; index < users.length; index++) {
    if (users[index].id === userId) {
      users.splice(index, 1);
      break;
    }
  }
  generateTable(users);
}

function createActionBtn() {
  return document.createElement("button");
}

function createRowData(data) {
  let dataEl = document.createElement("td");
  // dataEl.textContent = data;
  dataEl.append(data);
  return dataEl;
}

function createRowHeading(data) {
  let dataEl = document.createElement("th");
  dataEl.textContent = data;
  return dataEl;
}

function generateTable(data) {
  let userTableEl = document.querySelector("#listUsersTable");
  userTableEl.innerHTML = "";
  createRow(
    userTableEl,
    {
      id: "Id",
      name: "Name",
      email: "Email",
      mobile: "Mobile",
      isVerified: "Is verified",
      action: "Action",
    },
    true
  );
  for (let index = 0; index < data.length; index++) {
    createRow(userTableEl, data[index]);
  }
}

generateTable(users);
