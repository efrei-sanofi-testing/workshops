const fs = require("fs");

function displayTodos() {
  let todosOut = "";
  let todos = fs.readFileSync("./todos.txt", "utf8");
  todos = todos.split("\n").filter(Boolean);

  todosOut = `Vous avez ${todos.length} todo${
    todos.length === 1 ? "" : "s"
  } \n`;

  for (const todo of todos) {
    todosOut += `[ ] ${todo}\n`;
  }
  console.log(todosOut);
  return todosOut;
}
module.exports = { displayTodos };
