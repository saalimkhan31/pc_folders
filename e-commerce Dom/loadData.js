let cart = [];

let products = [];
function showCartValue() {
  console.log("showCartValue >>>>>> ", cart.length);
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
  products = [...data];
  console.log("Products >>>>>> ", products);
  let completeHTML = document.createElement("div");
  completeHTML.className = "complete";
  for (let i = 0; i < data.length; i++) {
    let myDiv = document.createElement("div");
    myDiv.className = "card-area";
    let img = document.createElement("img");
    img.setAttribute("src", data[i]?.image);
    img.className = "images";

    let text = document.createElement("p");
    text.className = "text";
    text.textContent = data[i]?.title;

    let price = document.createElement("p");
    price.className = "price";
    price.textContent = "$" + data[i]?.price;

    let rating = document.createElement("h5");
    rating.className = "rating";
    rating.textContent = data[i].rate + " " + data[i].count;

    let sizeDiv = document.createElement("div");
    sizeDiv.className = "main-size";

    let circle1 = document.createElement("div");
    circle1.className = "circle1";
    circle1.textContent = "S";

    let circle2 = document.createElement("div");
    circle2.className = "circle1";
    circle2.textContent = "M";

    let circle3 = document.createElement("div");
    circle3.className = "circle1";
    circle3.textContent = "L";

    let category = document.createElement("p");
    category.className = "category";
    category.textContent = data[i]?.category;

    let button = document.createElement("button");
    button.className = "btn btn-product";
    button.dataset.productId = data[i].id;
    button.textContent = "Add To Cart";
    // button.onclick = () => {
    //   addCart(data[i]);
    //   showCartValue();
    //   // alert("Items Added Successfully");
    // };

    // /--------------------------------------------------/;

    myDiv.appendChild(img);
    myDiv.appendChild(text);
    myDiv.appendChild(price);
    myDiv.appendChild(sizeDiv);
    sizeDiv.appendChild(circle1);
    sizeDiv.appendChild(circle2);
    sizeDiv.appendChild(circle3);
    myDiv.appendChild(button);
    myDiv.appendChild(category);

    completeHTML.append(myDiv);
  }

  document.getElementById("apiDiv").append(completeHTML);
}
result();

document.addEventListener("click", function (e) {
  if (e.target.className.includes("btn-product")) {
    if (e.target.dataset.productId) {
      console.log("Event >>>>>> ", e.target.dataset);
      let product = products.filter(
        (p) => p.id === parseInt(e.target.dataset.productId)
      );
      console.log("product >>>>>> ", product);
      addCart(...product); // dataobject
      showCartValue();
    }
  }
});

// shopping cart -----------
let shopCart = document.createElement("img");
shopCart.setAttribute("src", "images/shopping.png");
shopCart.className = "cart-icon";
document.body.append(shopCart);

// increment/decrement button----------------
function increment() {
  document.getElementById("demoInput").stepUp();
}
function decrement() {
  // increment decrement button
  document.getElementById("demoInput").stepDown();
}
// -------------------
