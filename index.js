// **********Declarations************************
let newTask = document.getElementById("new-task-el");
let newCategory = document.getElementById("new-category-el");
let newDate = document.getElementById("new-date-el");
let newStatus = document.getElementById("new-status-el");
let addButton = document.getElementById("add-button-el");
let overdueButton = document.getElementById("overdue-button-el")
let taskTable = document.getElementById("task-table-el");
let categoryFilter = document.getElementById("filter-category-el")
let categoryButton = document.getElementById("category-button-el")
let statusFilter = document.getElementById("filter-status-el")
let statusButton = document.getElementById("status-button-el")
const todaymilli = Date.now();

// For testing
// let dummyObject = {
//     Task: "imatryintotype",
//     Category: "Work",
//     Date: "02/02/2225",
//     Status: "Complete",
// }
let taskDatabase = [];
// For testing
// taskDatabase.push(dummyObject);
// console.log(taskDatabase);

// **********Event listeners**********************
addButton.addEventListener("click", function () {
    let tableObject = {};
    let newRow = document.createElement("tr")
    taskTable.appendChild(newRow)
    tableObject.Task = newTask.value;
    let displayTask = document.createElement("td");
    displayTask.innerText = tableObject.Task;
    newRow.appendChild(displayTask);
    tableObject.Category = newCategory.value;
    let displayCategory = document.createElement("td");
    displayCategory.innerText = tableObject.Category;
    newRow.appendChild(displayCategory);
    tableObject.Date = newDate.value;
    let displayDate = document.createElement("td");
    displayDate.innerText = tableObject.Date;
    newRow.appendChild(displayDate);
    tableObject.Status = newStatus.value;
    let displayStatus = document.createElement("td");
    displayStatus.innerText = tableObject.Status;
    newRow.appendChild(displayStatus);
    // Attempted to create a select element so that status could be updated.  The drop-down list displayed correctly, but the value was not visible to user.
    // let displayDropdown = document.createElement("select");
    //displayDropdown.innerHTML = '<option value="">--Status--</option><option value=" In Progress">In Progress</option><option value="Completed">Completed</option><option value="Overdue">Overdue</option>>';
    //displayStatus.appendChild(displayDropdown);

    // Attempted to fill the drop-down list with current value, does not work and prevents drop-down list from showing.
    // displayDropdown.innerText = tableObject.Status;

    taskDatabase.push(tableObject);
    newTask.value = "";
    newCategory.value = "";
    newDate.value = "";
    newStatus.value = "";
})
overdueButton.addEventListener("click", function () {
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    for (let i = 0; i < taskDatabase.length; i++) {
        let newRow = document.createElement("tr")
        taskTable.appendChild(newRow)
        tableObject.Task = taskDatabase[i].Task;
        let displayTask = document.createElement("td");
        displayTask.innerText = tableObject.Task;
        newRow.appendChild(displayTask);
        tableObject.Category = taskDatabase[i].Category;
        let displayCategory = document.createElement("td");
        displayCategory.innerText = tableObject.Category;
        newRow.appendChild(displayCategory);
        tableObject.Date = taskDatabase[i].Date;
        dateToCompare = new Date(taskDatabase[i].Date);
        let displayDate = document.createElement("td");
        displayDate.innerText = tableObject.Date;
        newRow.appendChild(displayDate);
        tableObject.Status = taskDatabase[i].Status;
        if ((dateToCompare <= todaymilli) && (tableObject.Status != "Completed")) {
            tableObject.Status = "Overdue";
            taskDatabase[i].Status = "Overdue";
        }
        let displayStatus = document.createElement("td");
        displayStatus.innerText = tableObject.Status;
        newRow.appendChild(displayStatus);
    }
}
)
categoryButton.addEventListener("click", function () {
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    let compareCategory = categoryFilter.value;
    for (let i = 0; i < taskDatabase.length; i++) {
        tableObject.Task = taskDatabase[i].Task;
        tableObject.Category = taskDatabase[i].Category;
        tableObject.Date = taskDatabase[i].Date;
        tableObject.Status = taskDatabase[i].Status;
        if (compareCategory === tableObject.Category) {
            let newRow = document.createElement("tr")
            taskTable.appendChild(newRow);
            let displayTask = document.createElement("td");
            displayTask.innerText = tableObject.Task;
            newRow.appendChild(displayTask);
            let displayCategory = document.createElement("td");
            displayCategory.innerText = tableObject.Category;
            newRow.appendChild(displayCategory);
            let displayDate = document.createElement("td");
            displayDate.innerText = tableObject.Date;
            newRow.appendChild(displayDate);
            let displayStatus = document.createElement("td");
            displayStatus.innerText = tableObject.Status;
            newRow.appendChild(displayStatus);
        }
    }
})
statusButton.addEventListener("click", function () {
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    let compareStatus = statusFilter.value;
    for (let i = 0; i < taskDatabase.length; i++) {
        tableObject.Task = taskDatabase[i].Task;
        tableObject.Category = taskDatabase[i].Category;
        tableObject.Date = taskDatabase[i].Date;
        tableObject.Status = taskDatabase[i].Status;
        if (compareStatus === tableObject.Status) {
            let newRow = document.createElement("tr")
            taskTable.appendChild(newRow);
            let displayTask = document.createElement("td");
            displayTask.innerText = tableObject.Task;
            newRow.appendChild(displayTask);
            let displayCategory = document.createElement("td");
            displayCategory.innerText = tableObject.Category;
            newRow.appendChild(displayCategory);
            let displayDate = document.createElement("td");
            displayDate.innerText = tableObject.Date;
            newRow.appendChild(displayDate);
            let displayStatus = document.createElement("td");
            displayStatus.innerText = tableObject.Status;
            newRow.appendChild(displayStatus);
        }
    }
})