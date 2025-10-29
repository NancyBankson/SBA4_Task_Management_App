// **********Declarations************************
let newTask = document.getElementById("new-task-el");
let newCategory = document.getElementById("new-category-el");
let newDate = document.getElementById("new-date-el");
let newStatus = document.getElementById("new-status-el");
let addButton = document.getElementById("add-button-el");
let overdueButton = document.getElementById("overdue-button-el")
let taskTable = document.getElementById("task-table-el");
const todaymilli = Date.now();
console.log(todaymilli);

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
    taskDatabase.push(tableObject);
    console.log(taskDatabase);
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
    console.log(taskDatabase.length);

    for (let i = 0; i < taskDatabase.length; i++) {
        console.log("im running " + i)
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
        dateToCompare = new Date(taskDatabase[i].Date)
        console.log(dateToCompare)
        let displayDate = document.createElement("td");
        displayDate.innerText = tableObject.Date;
        newRow.appendChild(displayDate);
        tableObject.Status = taskDatabase[i].Status;
        if (dateToCompare <= todaymilli)  {
            console.log("found one")
            tableObject.Status = "Overdue"
        }
        let displayStatus = document.createElement("td");
        displayStatus.innerText = tableObject.Status;
        newRow.appendChild(displayStatus);
        console.log(taskDatabase);
        console.log(i)

    }
}
)

// **********Functions*****************************

// for (let i = 0; i < taskDatabase.length; i++) {
//     let dateToCompare = taskDatabase[i].Date;
//     if (dateToCompare > today) {
//         console.log("overdue");
//         taskDatabase[i] = "Overdue"
//     }
// }