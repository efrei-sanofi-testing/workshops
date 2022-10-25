const fs = require('fs');

const todo = process.argv[2] + "\n";

fs.writeFileSync('./todos.txt', todo, { flag: 'a+' })