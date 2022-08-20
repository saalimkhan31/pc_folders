let users = [
  {
    userId: "saalimkhan02@gmail.com",
    password: "12345",
  },
  {
    userId: "helo@gmail.com",
    password: "244",
  },
];

function showData() {
  let user = {
    id: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  console.log(user);
  for (let i = 0; i < users.length; i++) {
    if (users[i].userId === user.id && users[i].password === user.password) {
      return alert("login successfull");
    }
  }
  return alert("login failed");
}

// let users = [
//   {
//     userId: "khan@123",
//     password: "12345",
//   },
//   {
//     userId: "arish@123",
//     password: "1234",
//   },
// ];

// function loginForm() {
//   let user = {
//     id: document.querySelector("#email").value,
//     password: document.querySelector("#password").value,
//   };
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].userId === user.id && users[i].password === user.password) {
//       return alert("login success");
//     }
//     return alert("failed");
//   }
// }
