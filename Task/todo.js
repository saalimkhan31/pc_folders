let itemList = [
  {
    task: "play fottball",
    done: true,
  },
];
console.log(itemList);

function generateList() {
  let ulElem = document.querySelector("#ulList");
  //   document.querySelector("#msg").innerHTML = "";
  console.log(ulElem);
  ulElem.innerHTML = "";
  for (let i = 0; i < itemList.length; i++) {
    let liElem = document.createElement("li");
    let spnElem = document.createElement("span");
    let btnElem = document.createElement("button");

    btnElem.textContent = "delete";
    btnElem.addEventListener("click", function (e) {
      console.log(itemList[i]);
      itemList.splice(i, 1);
      generateList();
    });

    spnElem.textContent = itemList[i].task;
    if (itemList[i].done) {
      spnElem.style.textDecoration = "line-through";
    }
    spnElem.addEventListener("click", function (e) {
      console.log(e.target);
      itemList[i].done = !itemList[i].done;
      e.target.style.textDecoration = itemList[i].done ? "line-through" : "";
    });

    liElem.appendChild(spnElem);
    liElem.appendChild(btnElem);

    ulElem.appendChild(liElem);
  }
}
generateList();

// function addItem() {
//   let inpVal = document.querySelector("#task").value;
//   let taskObj = {
//     task: inpVal,
//     done: false,
//   };
//   itemList.push(taskObj);
//   generateList();
// }
