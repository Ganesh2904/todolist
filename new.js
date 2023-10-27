const allTasks = document.getElementById("alltasks");
const addTask = document.getElementById("addbtn");
const input = document.querySelector("input");
const form = document.querySelector("form");

addTask.addEventListener("click", addingTask);

function checkEnpty(str) {
  let emptyness = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      emptyness++;
    }
  }
  if (str.length == emptyness) {
    return true;
  } else {
    return false;
  }
}

function addingTask(e) {
  e.preventDefault();
  if (checkEnpty(input.value)) {
    alert("Input field should not be empty");
    document.querySelector("input").value = "";
  } else {
    let p = [...input.value];
    let arr = [];
    for (let i = 0; i < p.length; i++) {
      if (p[i] != " ") {
        arr.push(p[i]);
      }
    }
    p = arr.join("");
    let newTask = document.createElement("div");
    let label = document.createElement("label");
    let taskText = document.createElement("p");
    let taskCheck = document.createElement("input");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    editBtn.innerText = "edit";
    taskText.innerText = input.value;
    taskCheck.setAttribute("type", "checkbox");
    newTask.setAttribute("class", "form-check");
    taskCheck.setAttribute("class", "form-check-input");
    taskText.setAttribute("class", "form-check-text");
    deleteBtn.setAttribute("class", "form-check-delete");
    editBtn.setAttribute("class", "form-check-edit");
    label.setAttribute("class", "from-check-label");
    taskCheck.addEventListener("change", () => {
      if (taskCheck.checked) {
        taskText.classList.add("strikethrough");
      } else {
        taskText.classList.remove("strikethrough");
      }
    });

    // TO remove element
    deleteBtn.addEventListener("click", () => deleteBtn.parentElement.remove());

    // to edit element
    editBtn.addEventListener("click", () => {
      let newV = prompt("Enter new value");
      taskText.innerHTML = newV;
    });

    newTask.appendChild(taskCheck);
    newTask.appendChild(deleteBtn);
    newTask.appendChild(label);
    newTask.appendChild(editBtn);
    label.appendChild(taskText);
    allTasks.appendChild(newTask);
    input.value = "";
  }
}

function editIt(t) {
  console.log(t.innerText);
} // here is second last code
