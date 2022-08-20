// document.querySelector("#input").addEventListener("keyup", (e) => {
//   document.querySelector("#text").innerHTML = e.target.value;
// });
let input = document.querySelector("#input");
let text = document.querySelector("#text");
input.addEventListener("keyup", (e) => {
  text.innerHTML = e.target.value;
});

// function nextImage(){
// var img = document.getElementById("mainImage");
// for(var i = 0; i < imgArray.length;i++){
// if(imgArray[i].src == img.src){
// if(i === imgArray.length){
// document.getElementById("mainImage").src = imgArray[0].src;
// break;
// }
// document.getElementById("mainImage").src = imgArray[i+1].src;
// break;
// }
// }
// }
// function previousImage(){
// var img = document.getElementById("mainImage");
// for(var i = imgArray.length-1; i >=0 ;i--){
// if(imgArray[i].src == img.src){
// if(i === imgArray.length){
// document.getElementById("mainImage").src = imgArray[4].src;
// break;
// }
// document.getElementById("mainImage").src = imgArray[i-1].src;
// break;
// }
// }
// }
//
