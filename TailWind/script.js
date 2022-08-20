let todoList = [
  {
    id: 1,
    task: "Read a book",
    isDone: true,
  },
  {
    id: 2,
    task: "Eat breakfast with Mick",
    isDone: true,
  },
  {
    id: 3,
    task: "Go to gym",
    isDone: false,
  },
];

function showList() {
  let ulEl = document.querySelector("#ulList");
   let spnMsg = document.querySelector("#spn");
   document.querySelector("#spn").innerHTML = "";
  ulEl.innerHTML = "";
  console.log(ulEl);

  for (let i = 0; i < todoList.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = todoList[i];

    let btnEl = document.createElement("button");
    btnEl.textContent = "X";

    let spnArea = document.createElement("span");
    spnArea.textContent = todoList[i].task;
    if (todoList[i].isDone) {
      spnArea.style.textDecoration = "line-through";
    }
    spnArea.addEventListener("click", (e) => {
      console.log(e.target);
      todoList[i].isDone = !todoList[i].isDone;
      e.target.style.textDecoration = todoList[i].isDone ? "line-through" : "";
    });

    btnEl.addEventListener("click", (e) => {
      console.log(todoList[i]);
      todoList.splice(i, 1);
      showList();
    });
    liEl.appendChild(btnEl);
    liEl.appendChild(spnArea);
    ulEl.appendChild(liEl);
  }
}
function showTodoList() {
  let inputVal = document.querySelector("#input").value;
  let obj = {
    task: inputVal,
    isDone: false,
  };
  todoList.push(obj);
  document.querySelector("#input").value = "";
  showList();
}
