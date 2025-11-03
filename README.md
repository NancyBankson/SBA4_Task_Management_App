# Task Management App

## Overview

In this assessment, I built a task management app.  The app took user input and created an object which was then added to an array.  I used multiple JavaScript concepts including arrays, objects, conditionals, and DOM maniputlation.

## Features

The project had the following requirements:
1. Adding New Tasks
- Create input fields for the task name, category, deadline, and an initial status (e.g., “In Progress”).
- Include an “Add Task” button that will add the task to the task list.
- Each task should be stored as an object with properties such as task name, category, deadline, and status.
- Add the task object to an array that holds all tasks.
2. Displaying the Task List
- Create an HTML structure (such as an unordered list or table) to display the task list.
- For each task, display the task name, category, deadline, and status.
- Dynamically update the task list in the browser each time a new task is added or a status is updated.
3. Updating Task Status
- Allow users to update the status of tasks (e.g., “In Progress,” “Completed”) via a dropdown or button.
- Automatically check each task’s deadline and mark tasks as “Overdue” if the current date has passed the deadline.
- Update the displayed task list whenever a task’s status changes.
4. Filtering Tasks
- Add functionality to filter tasks by category or status (e.g., show only “Completed” tasks or tasks under the “Work” category).
- Provide a dropdown or set of buttons for users to choose a filter.
- When a filter is selected, only display the tasks that match the selected category or status.

## Tools

- HTML
- CSS
- JavaScript

## Reflection

#### Challenges and approach to challenges
The project was quite challenging.  Since my experience with DOM manipuation is very limited, I needed to review the class exercise on DOM manipuation mulitple times to fully understand the syntax needed to achieve my goals.  It was also a challenge to determine how best to display the tasks for the user.  I had to learn how to use a table with DOM manipulation.  To get the data to display correctly, I had to learn how to nest newly created elements such as new table rows with new table cells inside.  Updating the task status to "overdue" was challenging.  I had to clear the table and repopulate it with new information based on a conditional.  The same process was used for the filters.

#### Improvements, given more time
If I had more time, I would have given the user the option to change the status for each task inside the table.  I made an attempt to add that functonality, but it didn't work, so I reverted to changing the status using a separate update area.  I would have also made the html more accessible and made the page more attractive with CSS styling.  Overall, I'm pretty happy with the outcome of this project.  It was difficult to complete, so I feel that I did a good job with the DOM manipulation and the data handling in JavaScript.