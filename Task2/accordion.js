let accord = document.querySelectorAll(".accordion");

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    let para = this.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
}
