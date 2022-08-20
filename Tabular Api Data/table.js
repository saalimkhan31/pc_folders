async function getTableData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos");
  let result = await data.json();

  return result;
}
getTableData();

async function showTableData() {
  let apiData = await getTableData();
  console.log(apiData);

  let root = document.querySelector("#root");

  let tableEl = document.createElement("table");
  tableEl.className = "table";

  let tableRow = document.createElement("tr");

  let headingFirst = document.createElement("th");
  headingFirst.className = "table";
  headingFirst.textContent = "Id";

  let headingSecond = document.createElement("th");
  headingSecond.className = "table";
  headingSecond.textContent = "UserId";

  let headingFive = document.createElement("th");
  headingFive.className = "table";
  headingFive.textContent = "Images";

  let headingThird = document.createElement("th");
  headingThird.className = "table";
  headingThird.textContent = "Title";

  let headingFourth = document.createElement("th");
  headingFourth.className = "table";
  headingFourth.textContent = "Completed";

  tableRow.appendChild(headingFirst);
  tableRow.appendChild(headingSecond);
  tableRow.appendChild(headingFive);
  tableRow.appendChild(headingThird);
  tableRow.appendChild(headingFourth);

  tableEl.appendChild(tableRow);

  root.appendChild(tableEl);

  apiData.map((data) => {
    let innerRow = document.createElement("tr");

    let idEl = document.createElement("td");
    idEl.className = "table";
    idEl.textContent = data.id;

    let userEl = document.createElement("td");
    userEl.className = "table";
    userEl.textContent = data.userId;

    let imageEl = document.createElement("img");
    imageEl.className = "table images";
    imageEl.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    );

    let titleEl = document.createElement("td");
    titleEl.className = "table";
    titleEl.textContent = data.title;

    let completeEl = document.createElement("td");
    completeEl.className = "table";
    completeEl.textContent = data.completed ? "Succes" : "Failed";

    innerRow.appendChild(idEl);
    innerRow.appendChild(userEl);
    innerRow.appendChild(imageEl);

    innerRow.appendChild(titleEl);
    innerRow.appendChild(completeEl);

    tableEl.appendChild(innerRow);
  });
}
showTableData();
