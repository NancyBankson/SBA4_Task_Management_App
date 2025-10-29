// **********Declarations************************
let newTask = document.getElementById("new-task-el");
let newCategory = document.getElementById("new-category-el");
let newDate = document.getElementById("new-date-el");
let newStatus = document.getElementById("new-status-el");
let addButton = document.getElementById("button-el");
let taskDatabase = {};

// **********Event listeners**********************
addButton.addEventListener("click", function() {
    let tableObject = {};
    tableObject.Task = newTask.value;
    tableObject.Category = newCategory.value;
    tableObject.Date = newDate.value;
    tableObject.Status = newStatus.value;
})

