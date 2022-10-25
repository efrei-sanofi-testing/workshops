const fs = require('fs');

let todos = fs.readFileSync('./todos.txt', 'utf8');
todos = todos.split("\n").filter(Boolean)

console.log(`Vous avez ${todos.length} todo${todos.length === 1 ? "":"s"} \n`)

for (const todo of todos) {
    console.log(`[ ] ${todo}`)
}