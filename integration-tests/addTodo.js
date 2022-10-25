const fs = require("fs");

const todo = process.argv[2];

function insertTodo(task) {
  fs.writeFileSync("./todos.txt", task + "\n", { flag: "a+" });
}

function getNumberOfTodos() {
  let todos = fs.readFileSync("./todos.txt", "utf8");
  todos = todos.split("\n").filter(Boolean);
  return todos.length;
}
function removeTodos(taskToRemove) {
  let todos = fs.readFileSync("./todos.txt", "utf8");
  todos = todos.split("\n").filter(Boolean);
  let Newtodos = todos.filter((task) => !(task === taskToRemove));
  fs.unlinkSync("./todos.txt");
  Newtodos.map((it) =>
    fs.writeFileSync("./todos.txt", it + "\n", { flag: "a+" })
  );
}

if (todo) insertTodo(todo);

module.exports = { insertTodo, removeTodos, getNumberOfTodos };
