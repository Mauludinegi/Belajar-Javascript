const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tasks = [];

function addTask() {
  rl.question("Add new task: ", (task) => {
    tasks.push(task);
    displayTasks();
  });
}

function removeTask() {
  rl.question("Enter task index to remove: ", (index) => {
    tasks.splice(index - 1, 1);
    displayTasks();
  });
}

function displayTasks() {
  console.log("\nTo-Do List:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i+1}. ${tasks[i]}`);
  }
  console.log("");
  showMenu();
}

function showMenu() {
  console.log("What would you like to do?");
  console.log("1. Add task");
  console.log("2. Remove task");
  console.log("3. Exit");

  rl.question("Enter choice: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        removeTask();
        break;
      case "3":
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        showMenu();
    }
  });
}

showMenu();
