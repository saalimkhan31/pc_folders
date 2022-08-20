// ----------------------------------------------------------
let myDiv = document.createElement("div");
myDiv.className = "card-area";
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://images.pexels.com/photos/2363825/pexels-photo-2363825.jpeg?auto=compress&cs=tinysrgb&w=400"
);
img.className = "images";

let text = document.createElement("p");
text.className = "text";
text.textContent = "Denim Jeans";

let price = document.createElement("p");
price.className = "price";
price.textContent = "$12.5";

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

let button = document.createElement("button");
button.className = "btn";
button.textContent = "Add To Cart";

/--------------------------------------------------/;
document.body.append(myDiv);
myDiv.appendChild(img);
myDiv.appendChild(button);
myDiv.appendChild(text);
myDiv.appendChild(price);
myDiv.appendChild(sizeDiv);
sizeDiv.appendChild(circle1);
sizeDiv.appendChild(circle2);
sizeDiv.appendChild(circle3);

// document.addEventListener("click", function (e) {
//   if (e.target.className.includes("btn-product")) {
//     if (e.target.dataset.productId) {
//       console.log("Event >>>>>> ", e.target.dataset);
//       let product = products.filter(
//         (p) => p.id === parseInt(e.target.dataset.productId)
//       );
//       console.log("product >>>>>> ", product);
//       addCart(...product); // dataobject
//       showCartValue();
//     }
//   }
// });
