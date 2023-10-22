function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}

function editTask(button) {
    const taskTextSpan = button.parentElement.querySelector("span");
    const currentText = taskTextSpan.innerText;
    const newText = prompt("Edit task:", currentText);

    if (newText !== null) {
        taskTextSpan.innerText = newText;
    }
}
