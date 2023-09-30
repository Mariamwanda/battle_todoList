document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskInputs = document.querySelectorAll(".task-input");
        const dueDateInputs = document.querySelectorAll(".due-date-input");

        taskInputs.forEach(function (input, index) {
            const taskText = input.value.trim();
            if (taskText === "") return;

            const dueDate = dueDateInputs[index].value;

            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <input type="text" class="editable-task" value="${taskText}">
                <span>effectué le : ${dueDate}</span>
                <button class="deleteTask">Supprimer</button>
                <button class="editTask">Modifier</button>
            `;

            taskList.appendChild(taskItem);
            input.value = "";
            dueDateInputs[index].value = "";

            const editableTask = taskItem.querySelector(".editable-task");

            taskItem.querySelector(".deleteTask").addEventListener("click", function () {
                taskList.removeChild(taskItem);
            });

            taskItem.querySelector(".editTask").addEventListener("click", function () {
                editableTask.removeAttribute("readonly");
                editableTask.focus();
            });

            editableTask.addEventListener("blur", function () {
                editableTask.setAttribute("readonly", true);
            });
        });
    });
});
