const fs = require("fs");
const { insertTodo } = require("./addTodo.js");
const { displayTodos } = require("./listTodos.js");

test("ne teste rien", () => {
  expect(true).toBe(true);
});

test("check new task is rec in the file", () => {
  fs.unlinkSync("./todos.txt");
  let todos = "";
  let taskString = "New task";
  insertTodo(taskString);
  let todoFile = fs.readFileSync("./todos.txt", "utf8");
  todos = todoFile.split("\n");
  expect(checkFileEntree(taskString, todos)).toBe(true);
});

test("check chained display what in file", () => {
  expect(displayTodos()).toBe("Vous avez 1 todo \n[ ] New task\n");
  insertTodo("manger");
  expect(displayTodos()).toBe("Vous avez 2 todos \n[ ] New task\n[ ] manger\n");
});

function checkFileEntree(what, where) {
  return where.includes(what);
}
