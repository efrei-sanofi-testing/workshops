const fs = require("fs");
const { insertTodo } = require("./addTodo.js");
const { displayTodos } = require("./listTodos.js");

test("check display what in file", () => {
  fs.unlinkSync("./todos.txt");
  insertTodo("New task");
  expect(displayTodos()).toBe("Vous avez 1 todo \n[ ] New task\n");
  insertTodo("manger");
  expect(displayTodos()).toBe("Vous avez 2 todos \n[ ] New task\n[ ] manger\n");
});
