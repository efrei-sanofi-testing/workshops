// import { addTodo } from "./addTodo";
const { addTodo } = require("./addTodo");
const fs = require("fs");

test("rien", () => {
  expect(true).toBe(true);
});

test("calling addTodo adds an entry to todos.txt", () => {
  fs.unlinkSync("./todos.txt");
  addTodo("Manger");
  const todosFile = fs.readFileSync("./todos.txt", "utf-8");
  expect(todosFile).toBe("Manger\n");
});
