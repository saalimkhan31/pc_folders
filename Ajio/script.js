let cart = [];

function showCartValue() {
  document.getElementById("length").innerHTML = cart.length; // count value//
}
showCartValue();

async function showData() {
  let url = "https://fakestoreapi.com/products";
  let result = await fetch(url); //  1  /
  data = await result.json();
  return data;
}
showData();

function addCart(product) {
  let previewItem = [...cart];
  cart = [product, ...previewItem]; //  add cart function  //
  console.log(cart);
}
async function result() {
  let data = await showData(); //   2  //
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = "card-area";

    let button = document.createElement("button");
    button.className = "btn";
    button.textContent = "Add To Cart";
    button.onclick = () => {
      addCart(data[i]);
      showCartValue();
    };

    // /--------------------------------------------------/;

    myDiv.appendChild(button);

    document.getElementById("apiDiv").append(myDiv);
  }
}
result();
