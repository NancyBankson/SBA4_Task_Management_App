// **********Declarations************************
// let newTask = document.getElementById("new-task-el");
// let newCategory = document.getElementById("new-category-el");
// let newDate = document.getElementById("new-date-el");
// let newStatus = document.getElementById("new-status-el");
// let addButton = document.getElementById("button-el");
let dummyObject = {
    Task: "imatryintotype",
    Category: "Work",
    Date: "02/02/2225",
    Status: "Complete",
}
let taskDatabase = [];
taskDatabase.push(dummyObject);
console.log(taksDatabase);

// **********Event listeners**********************
addButton.addEventListener("click", function() {
    let tableObject = {};
    tableObject.Task = newTask.value;
    tableObject.Category = newCategory.value;
    tableObject.Date = newDate.value;
    tableObject.Status = newStatus.value;
    taskDatabase.push(tableObject)
})

console.log(taksDatabase)