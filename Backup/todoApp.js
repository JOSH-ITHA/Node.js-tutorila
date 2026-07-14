import fs from 'fs';
import readline from 'readline';

const FILE = 'task.json';

// Create file if it doesn't exist
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Load tasks
const loadTasks = () => {
    const data = fs.readFileSync(FILE, 'utf-8');
    return JSON.parse(data);
};

// Save tasks
const saveTasks = (tasks) => {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

// Display menu
const showMenu = () => {
    console.log("\n====== TO-DO LIST ======");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Delete Task");
    console.log("4. Exit\n");

    rl.question("Choose an option: ", handleMenu);
};

// Handle menu options
function handleMenu(option) {

    switch (option) {

        // Add Task
        case '1':
            rl.question("Enter Task: ", (task) => {
                const tasks = loadTasks();
                tasks.push({ task, done: false });
                saveTasks(tasks);

                console.log("Task added successfully!");
                showMenu();
            });
            break;

        // View Tasks
        case '2':
            const tasks = loadTasks();

            if (tasks.length === 0) {
                console.log("No tasks found.");
            } else {
                console.log("\nTasks:");
                tasks.forEach((t, index) => {
                    console.log(`${index + 1}. ${t.task}`);
                });
            }

            showMenu();
            break;

        // Delete Task
        case '3':
            const allTasks = loadTasks();

            if (allTasks.length === 0) {
                console.log("No tasks to delete.");
                showMenu();
                return;
            }

            console.log("\nTasks:");

            allTasks.forEach((t, index) => {
                console.log(`${index + 1}. ${t.task}`);
            });

            rl.question("Enter task number to delete: ", (num) => {

                const index = parseInt(num) - 1;

                if (index >= 0 && index < allTasks.length) {
                    allTasks.splice(index, 1);
                    saveTasks(allTasks);
                    console.log("Task deleted successfully!");
                } else {
                    console.log("Invalid task number.");
                }

                showMenu();
            });

            break;

        // Exit
        case '4':
            console.log("Goodbye!");
            rl.close();
            break;

        // Invalid Option
        default:
            console.log("Invalid option. Please try again.");
            showMenu();
            break;
    }
}

// Start program
showMenu();