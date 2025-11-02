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
    dateToCompare = new Date(tableObject.Date);
    let displayDate = document.createElement("td");
    displayDate.innerText = tableObject.Date;
    newRow.appendChild(displayDate);

    tableObject.Status = newStatus.value;
    if ((dateToCompare <= todaymilli) && (tableObject.Status != "Completed")) {
        tableObject.Status = "Overdue";
    }
    let displayStatus = document.createElement("td");
    // Removed with dropdown selector
    // displayStatus.innerText = tableObject.Status;
    newRow.appendChild(displayStatus);
    let displayDropdown = document.createElement("select");
    // Replaced this section with selected attribute option
    // displayDropdown.innerHTML = '<option value="">--Status--</option><option value=" In Progress">In Progress</option><option value="Completed">Completed</option><option value="Overdue">Overdue</option>>';
    displayStatus.appendChild(displayDropdown);
    const testStatus = ["In Progress", "Completed", "Overdue"]
    for (let i = 0; i < testStatus.length; i++) {
        if (testStatus[i] === tableObject.Status) {
            let option = document.createElement("option");
            option.value = testStatus[i];
            option.textContent = testStatus[i];
            option.setAttribute("selected", "selected")
            displayDropdown.appendChild(option);
        }
        else {
            let option = document.createElement("option");
            option.value = testStatus[i];
            option.textContent = testStatus[i];
            displayDropdown.appendChild(option);
        }
    }
    // Removed with dropdown section
    // displayDropdown.innerText = tableObject.Status;
    taskDatabase.push(tableObject);
    newTask.value = "";
    newCategory.value = "";
    newDate.value = "";
    newStatus.value = "";
})

// Updated add event listener to automatically update overdue items, check button is no longer needed
// overdueButton.addEventListener("click", function () {
//     if (taskTable) {
//         taskTable.innerHTML = "";
//     }
//     let tableObject = {};
//     for (let i = 0; i < taskDatabase.length; i++) {
//         let newRow = document.createElement("tr")
//         taskTable.appendChild(newRow)

//         tableObject.Task = taskDatabase[i].Task;
//         let displayTask = document.createElement("td");
//         displayTask.innerText = tableObject.Task;
//         newRow.appendChild(displayTask);

//         tableObject.Category = taskDatabase[i].Category;
//         let displayCategory = document.createElement("td");
//         displayCategory.innerText = tableObject.Category;
//         newRow.appendChild(displayCategory);

//         tableObject.Date = taskDatabase[i].Date;
//         dateToCompare = new Date(taskDatabase[i].Date);
//         let displayDate = document.createElement("td");
//         displayDate.innerText = tableObject.Date;
//         newRow.appendChild(displayDate);

//         tableObject.Status = taskDatabase[i].Status;
//         if ((dateToCompare <= todaymilli) && (tableObject.Status != "Completed")) {
//             tableObject.Status = "Overdue";
//             taskDatabase[i].Status = "Overdue";
//         }
//         let displayStatus = document.createElement("td");
//         newRow.appendChild(displayStatus);
//         let displayDropdown = document.createElement("select");
//         displayStatus.appendChild(displayDropdown);
//         const testStatus = ["In Progress", "Completed", "Overdue"]
//         for (let i = 0; i < testStatus.length; i++) {
//             if (testStatus[i] === tableObject.Status) {
//                 let option = document.createElement("option");
//                 option.value = testStatus[i];
//                 option.textContent = testStatus[i];
//                 option.setAttribute("selected", "selected")
//                 displayDropdown.appendChild(option);
//             }
//             else {
//                 let option = document.createElement("option");
//                 option.value = testStatus[i];
//                 option.textContent = testStatus[i];
//                 displayDropdown.appendChild(option);
//             }
//         }
//     }
// }
// )

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
        if ((compareCategory === tableObject.Category) || (compareCategory === "")) {
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
            newRow.appendChild(displayStatus);
            let displayDropdown = document.createElement("select");
            displayStatus.appendChild(displayDropdown);
            const testStatus = ["In Progress", "Completed", "Overdue"]
            for (let i = 0; i < testStatus.length; i++) {
                if (testStatus[i] === tableObject.Status) {
                    let option = document.createElement("option");
                    option.value = testStatus[i];
                    option.textContent = testStatus[i];
                    option.setAttribute("selected", "selected")
                    displayDropdown.appendChild(option);
                }
                else {
                    let option = document.createElement("option");
                    option.value = testStatus[i];
                    option.textContent = testStatus[i];
                    displayDropdown.appendChild(option);
                }
            }
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
        if ((compareStatus === tableObject.Status) || (compareStatus === "")) {
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
            newRow.appendChild(displayStatus);
            let displayDropdown = document.createElement("select");
            displayStatus.appendChild(displayDropdown);
            const testStatus = ["In Progress", "Completed", "Overdue"]
            for (let i = 0; i < testStatus.length; i++) {
                if (testStatus[i] === tableObject.Status) {
                    let option = document.createElement("option");
                    option.value = testStatus[i];
                    option.textContent = testStatus[i];
                    option.setAttribute("selected", "selected")
                    displayDropdown.appendChild(option);
                }
                else {
                    let option = document.createElement("option");
                    option.value = testStatus[i];
                    option.textContent = testStatus[i];
                    displayDropdown.appendChild(option);
                }
            }
        }
    }
})