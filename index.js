// **********Declarations************************
let newTask = document.getElementById("new-task-el");
let newCategory = document.getElementById("new-category-el");
let newDate = document.getElementById("new-date-el");
let newStatus = document.getElementById("new-status-el");
let addButton = document.getElementById("add-button-el");
let overdueButton = document.getElementById("overdue-button-el");
let taskTable = document.getElementById("task-table-el");
let categoryFilter = document.getElementById("filter-category-el");
let categoryButton = document.getElementById("category-button-el");
let statusFilter = document.getElementById("filter-status-el");
let statusButton = document.getElementById("status-button-el");
let updateNumber = document.getElementById("update-number-el");
let updateStatus = document.getElementById("update-status-el");
let updateButton = document.getElementById("update-button-el");
const todaymilli = Date.now();
let rowNum = 1;
let colNum = 1;

// For testing
// let dummyObject = {
//     Task: "imatryintotype",
//     Category: "Work",
//     Date: "02/02/2225",
//     Status: "Complete",
// }
let taskDatabase = [];
let taskNumber = 1;
// For testing
// taskDatabase.push(dummyObject);
// console.log(taskDatabase);

// **********Event listeners**********************
addButton.addEventListener("click", function () {
    let tableObject = {};
    let newRow = document.createElement("tr");
    taskTable.appendChild(newRow);

    tableObject.Number = taskNumber;
    let displayNumber = document.createElement("td");
    displayNumber.innerText = tableObject.Number;
    displayNumber.id = (rowNum, "+", colNum);
    newRow.appendChild(displayNumber);
    colNum++;
    taskNumber++;

    tableObject.Task = newTask.value;
    let displayTask = document.createElement("td");
    displayTask.innerText = tableObject.Task;
    displayTask.id = (rowNum, "+", colNum);
    newRow.appendChild(displayTask);
    colNum++;

    tableObject.Category = newCategory.value;
    let displayCategory = document.createElement("td");
    displayCategory.innerText = tableObject.Category;
    displayCategory.id = (rowNum, "+", colNum);
    newRow.appendChild(displayCategory);
    colNum++;

    tableObject.Date = newDate.value;
    dateToCompare = new Date(tableObject.Date);
    let displayDate = document.createElement("td");
    displayDate.innerText = tableObject.Date;
    displayDate.id = (rowNum, "+", colNum);
    newRow.appendChild(displayDate);
    colNum++;

    tableObject.Status = newStatus.value;
    if ((dateToCompare <= todaymilli) && (tableObject.Status != "Completed")) {
        tableObject.Status = "Overdue";
    }
    let displayStatus = document.createElement("td");
    // Removed with dropdown selector
    // displayStatus.innerText = tableObject.Status;
    displayStatus.id = (rowNum, "+", colNum);
    newRow.appendChild(displayStatus);
    rowNum++;
    colNum = 1;
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
    rowNum = 1;
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    let compareCategory = categoryFilter.value;
    for (let i = 0; i < taskDatabase.length; i++) {
        tableObject.Number = taskDatabase[i].Number;
        tableObject.Task = taskDatabase[i].Task;
        tableObject.Category = taskDatabase[i].Category;
        tableObject.Date = taskDatabase[i].Date;
        tableObject.Status = taskDatabase[i].Status;
        if ((compareCategory === tableObject.Category) || (compareCategory === "")) {
            let newRow = document.createElement("tr")
            taskTable.appendChild(newRow);

            let displayNumber = document.createElement("td");
            displayNumber.innerText = tableObject.Number;
            displayNumber.id = (rowNum, "+", colNum);
            newRow.appendChild(displayNumber);
            colNum++;

            let displayTask = document.createElement("td");
            displayTask.innerText = tableObject.Task;
            displayTask.id = (rowNum, "+", colNum);
            newRow.appendChild(displayTask);
            colNum++;

            let displayCategory = document.createElement("td");
            displayCategory.innerText = tableObject.Category;
            displayCategory.id = (rowNum, "+", colNum);
            newRow.appendChild(displayCategory);
            colNum++;

            let displayDate = document.createElement("td");
            displayDate.innerText = tableObject.Date;
            displayDate.id = (rowNum, "+", colNum);
            newRow.appendChild(displayDate);
            colNum++;

            let displayStatus = document.createElement("td");
            displayStatus.id = (rowNum, "+", colNum);
            newRow.appendChild(displayStatus);
            rowNum++;
            colNum = 1;

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
    rowNum = 1;
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    let compareStatus = statusFilter.value;
    for (let i = 0; i < taskDatabase.length; i++) {
        tableObject.Number = taskDatabase[i].Number;
        tableObject.Task = taskDatabase[i].Task;
        tableObject.Category = taskDatabase[i].Category;
        tableObject.Date = taskDatabase[i].Date;
        tableObject.Status = taskDatabase[i].Status;
        if ((compareStatus === tableObject.Status) || (compareStatus === "")) {
            let newRow = document.createElement("tr")
            taskTable.appendChild(newRow);

            let displayNumber = document.createElement("td");
            displayNumber.innerText = tableObject.Number;
            displayNumber.id = (rowNum, "+", colNum);
            newRow.appendChild(displayNumber);
            colNum++;

            let displayTask = document.createElement("td");
            displayTask.innerText = tableObject.Task;
            displayTask.id = (rowNum, "+", colNum);
            newRow.appendChild(displayTask);
            colNum++;

            let displayCategory = document.createElement("td");
            displayCategory.innerText = tableObject.Category;
            displayCategory.id = (rowNum, "+", colNum);
            newRow.appendChild(displayCategory);
            colNum++;

            let displayDate = document.createElement("td");
            displayDate.innerText = tableObject.Date;
            displayDate.id = (rowNum, "+", colNum);
            newRow.appendChild(displayDate);
            colNum++;

            let displayStatus = document.createElement("td");
            displayStatus.id = (rowNum, "+", colNum);
            newRow.appendChild(displayStatus);
            rowNum++;
            colNum = 1;
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

updateButton.addEventListener("click", function () {
    rowNum = 1;
    if (taskTable) {
        taskTable.innerHTML = "";
    }
    let tableObject = {};
    let targetTaskNumber = parseInt(updateNumber.value);
    targetTaskNumber--;
    taskDatabase[targetTaskNumber].Status = updateStatus.value;
    for (let i = 0; i < taskDatabase.length; i++) {
        tableObject.Number = taskDatabase[i].Number;
        tableObject.Task = taskDatabase[i].Task;
        tableObject.Category = taskDatabase[i].Category;
        tableObject.Date = taskDatabase[i].Date;
        tableObject.Status = taskDatabase[i].Status;

        let newRow = document.createElement("tr")
        taskTable.appendChild(newRow);

        let displayNumber = document.createElement("td");
        displayNumber.innerText = tableObject.Number;
        displayNumber.id = (rowNum, "+", colNum);
        newRow.appendChild(displayNumber);
        colNum++;

        let displayTask = document.createElement("td");
        displayTask.innerText = tableObject.Task;
        displayTask.id = (rowNum, "+", colNum);
        newRow.appendChild(displayTask);
        colNum++;

        let displayCategory = document.createElement("td");
        displayCategory.innerText = tableObject.Category;
        displayCategory.id = (rowNum, "+", colNum);
        newRow.appendChild(displayCategory);
        colNum++;

        let displayDate = document.createElement("td");
        displayDate.innerText = tableObject.Date;
        displayDate.id = (rowNum, "+", colNum);
        newRow.appendChild(displayDate);
        colNum++;

        let displayStatus = document.createElement("td");
        displayStatus.id = (rowNum, "+", colNum);
        newRow.appendChild(displayStatus);
        rowNum++;
        colNum = 1;
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
})

// taskTable.addEventListener("click", (event) => {
//     if (event.target.closest("td").id) {
//         const cellId = event.target.closest("td").id;
//         let statusValue = document.getElementById(cellId);
//         taskCell.setAttribute("style", "text-decoration: line-through;")
//     }
// })

// taskTable.addEventListener("click"(event) => {
//     const cellId = event.target.closest("td").id;
//     let statusValue = document.getElementById(cellId);
//     if(taskTable) {
//         taskTable.innerHTML = "";
//     }
//     let tableObject = {};
//     for(let i = 0; i<taskDatabase.length; i++) {
//     tableObject.Task = taskDatabase[i].Task;
//     tableObject.Category = taskDatabase[i].Category;
//     tableObject.Date = taskDatabase[i].Date;
//     tableObject.Status = taskDatabase[i].Status;


//     let displayTask = document.createElement("td");
//     displayTask.innerText = tableObject.Task;
//     displayTask.id = (rowNum, "+", colNum);
//     newRow.appendChild(displayTask);

//     let displayCategory = document.createElement("td");
//     displayCategory.innerText = tableObject.Category;
//     displayCategory.id = (rowNum, "+", colNum);
//     newRow.appendChild(displayCategory);

//     let displayDate = document.createElement("td");
//     displayDate.innerText = tableObject.Date;
//     displayDate.id = (rowNum, "+", colNum);
//     newRow.appendChild(displayDate);

//     let displayStatus = document.createElement("td");
//     displayStatus.id = (rowNum, "+", colNum);
//     newRow.appendChild(displayStatus);
//     let displayDropdown = document.createElement("select");
//     displayStatus.appendChild(displayDropdown);
//     const testStatus = ["In Progress", "Completed", "Overdue"]
//     for (let i = 0; i < testStatus.length; i++) {
//         if (testStatus[i] === tableObject.Status) {
//             let option = document.createElement("option");
//             option.value = testStatus[i];
//             option.textContent = testStatus[i];
//             option.setAttribute("selected", "selected")
//             displayDropdown.appendChild(option);
//         }
//         else {
//             let option = document.createElement("option");
//             option.value = testStatus[i];
//             option.textContent = testStatus[i];
//             displayDropdown.appendChild(option);
//         }
//     }
// }
//     }
// })