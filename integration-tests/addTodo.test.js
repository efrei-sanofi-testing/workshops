const fs = require("fs");
const { insertTodo, removeTodos, getNumberOfTodos } = require("./addTodo.js");
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

test("check task has been removed from the file", () => {
  let taskRemString = "Task To Be Removed";
  fs.unlinkSync("./todos.txt");
  //console.log("getNumberOfTodos", getNumberOfTodos());
  insertTodo("New task");
  insertTodo("Faketask");
  insertTodo(taskRemString);
  insertTodo("bad task");
  removeTodos(taskRemString);

  let todoFile = fs.readFileSync("./todos.txt", "utf8");
  let todos = todoFile.split("\n");
  expect(checkFileEntree(taskRemString, todos)).toBe(false);
});

test("check task has been removed from the file", () => {
  let taskRemString = "Task To Be Removed";
  fs.unlinkSync("./todos.txt");
  //console.log("getNumberOfTodos", getNumberOfTodos());
  insertTodo("New task");
  expect(getNumberOfTodos()).toBe(1);
  insertTodo("Faketask");
  expect(getNumberOfTodos()).toBe(2);
  insertTodo(taskRemString);
  expect(getNumberOfTodos()).toBe(3);
  insertTodo("bad task");
  expect(getNumberOfTodos()).toBe(4);
  removeTodos(taskRemString);
  expect(getNumberOfTodos()).toBe(3);
});

function checkFileEntree(what, where) {
  return where.includes(what);
}
