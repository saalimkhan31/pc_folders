console.log("todo list");

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
]; // state

function generateList() {
  let ulEl = document.querySelector("#listArea");
  document.querySelector("#msg").innerHTML = "";
  console.log(ulEl);
  ulEl.innerHTML = "";
  for (let index = 0; index < todoList.length; index++) {
    // console.log();
    let liEl = document.createElement("li");
    let spanEl = document.createElement("span");
    let btnEl = document.createElement("button");

    btnEl.textContent = "x";
    spanEl.textContent = todoList[index].task;
    if (todoList[index].isDone) {
      spanEl.style.textDecoration = "line-through";
    }
    spanEl.addEventListener("click", function (e) {
      console.log(e.target);
      todoList[index].isDone = !todoList[index].isDone;
      e.target.style.textDecoration = todoList[index].isDone
        ? "line-through"
        : "";
    });

    btnEl.addEventListener("click", function (e) {
      console.log(todoList[index]);
      todoList.splice(index, 1);
      generateList();
    });

    liEl.appendChild(spanEl);
    liEl.appendChild(btnEl);

    console.log(liEl);

    ulEl.appendChild(liEl);
  }

  if (!todoList.length) {
    document.querySelector("#msg").innerHTML = "No list found!";
  }
}

generateList();

function addItem() {
  let inputVal = document.querySelector("#task").value;
  // alert(inputVal);
  let taskObj = {
    task: inputVal,
    isDone: false,
  };
  todoList.push(taskObj);
  generateList();
  document.querySelector("#task").value = "";
}
