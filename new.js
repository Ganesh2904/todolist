const allTasks = document.getElementById("alltasks");
const addTask = document.getElementById("addbtn");
const input = document.querySelector("input");
const form = document.querySelector("form");

let isLoaded = false;
for(let i=0;i<localStorage.length;i++){
  if(localStorage.key(i)!=""){
    addingTask(localStorage.key(i));
  }
}
isLoaded=true;

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
  if (checkEnpty(input.value) && isLoaded==true) {
    alert("Input field should not be empty");
    document.querySelector("input").value = "";
  } else {
    if(document.querySelector("input").value == ""){
      var p = e;
    } else {
      e.preventDefault();
      var p = [...input.value];
    }
    let arr = [];
    for (let i = 0; i < p.length; i++) {
      if (p[i] != " ") {
        arr.push(p[i]);
      }
    }
    p = arr.join("");
    
    // adding data to localStoarage
    localStorage.setItem(input.value,input.value);

    let newTask = document.createElement("div");
    let label = document.createElement("label");
    let taskText = document.createElement("p");
    let taskCheck = document.createElement("input");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    editBtn.innerText = "edit";
    if(input.value!=""){
      taskText.innerText = input.value;
    } else{
      taskText.innerText = p;
    }
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
    deleteBtn.addEventListener("click", () =>{ 
      // removing element data from localStoarage
      localStorage.removeItem(deleteBtn.nextElementSibling.firstElementChild.innerText);
      // removing element from dom
      deleteBtn.parentElement.remove();
    });

    // to edit element
    editBtn.addEventListener("click", () => {
      // removing old value to update in localStorage
      localStorage.removeItem(editBtn.previousElementSibling.firstElementChild.innerText);
      let newV = prompt("Enter new value");
      // adding updated value in localStorage
      localStorage.setItem(newV,newV);
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
