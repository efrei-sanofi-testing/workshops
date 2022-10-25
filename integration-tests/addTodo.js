const fs = require("fs");

const arg = process.argv[2];

function addTodo(todo) {
  fs.writeFileSync("./todos.txt", todo + "\n", { flag: "a+" });
}

if (arg) addTodo(arg);

module.exports = { addTodo };
