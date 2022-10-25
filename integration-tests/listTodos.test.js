const { listTodos } = require("./listTodos");
const fs = require("fs");

test("calling listTodos returns a representation of todos.txt", () => {
  fs.unlinkSync("./todos.txt");
  fs.writeFileSync("./todos.txt", "Manger\nBoire\n");
  expect(listTodos()).toBe("Vous avez 2 todos\n\n[ ] Manger\n[ ] Boire\n");
});
