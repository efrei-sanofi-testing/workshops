const fs = require("fs");

function listTodos() {
  let todos = fs.readFileSync("./todos.txt", "utf8");
  let sortie = "";
  todos = todos.split("\n").filter(Boolean);

  sortie += `Vous avez ${todos.length} todo${todos.length === 1 ? "" : "s"}\n`;
  sortie += "\n";
  for (const todo of todos) {
    sortie += `[ ] ${todo}\n`;
  }

  return sortie;
}

console.log(listTodos());

module.exports = { listTodos };
