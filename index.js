// **********Declarations************************
let newTask = document.getElementById("new-task-el");
let newCategory = document.getElementById("new-category-el");
let newDate = document.getElementById("new-date-el");
let newStatus = document.getElementById("new-status-el");
let addButton = document.getElementById("button-el");
let taskTable = document.getElementById("task-table-el")

// let dummyObject = {
//     Task: "imatryintotype",
//     Category: "Work",
//     Date: "02/02/2225",
//     Status: "Complete",
// }
let taskDatabase = [];
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
    taskDatabase.push(tableObject)
    console.log(taskDatabase)
})