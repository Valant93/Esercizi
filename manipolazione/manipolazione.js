const addProduct = () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskValue = taskInput.value.trim();

  if (taskValue !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.innerText = taskValue;

    li.appendChild(taskText);

    taskList.appendChild(li);

    taskInput.value = "";
  }
};
