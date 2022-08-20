const root = document.querySelector("#root");

const fruits = [
  {
    name: "apple",
    price: 12,
  },
  {
    name: "orange",
    price: 23,
  },
  {
    name: "cherry",
    price: 30,
  },
  {
    name: "banana",
    price: 10,
  },
];

function refreshTable() {
  root.innerHTML = "";
  const tagString = `<tr>
  <th>Fruit</th>
  <th>Price</th>
</tr>`;
  root.innerHTML = tagString;
  for (let i = 0; i < fruits.length; i++) {
    createRow(fruits[i]);
  }
}

function createRow(data) {
  //   console.log(data);

  let row = document.createElement("tr");
  let fruit = document.createElement("td");
  let price = document.createElement("td");

  fruit.textContent = data.name;
  price.textContent = data.price;

  row.appendChild(fruit);
  row.appendChild(price);

  root.appendChild(row);
}

refreshTable();
