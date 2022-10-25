const fs = require("fs");

const todo = process.argv[2];

function insertTodo(task) {
  fs.writeFileSync("./todos.txt", task + "\n", { flag: "a+" });
}
if (todo) insertTodo(todo);

module.exports = { insertTodo };
