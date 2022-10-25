// Détermine qui gagne au pierre feuille ciseaux
// exemple : node 2-pfc.js P F

let User1Tool = process.argv[2];
let User2Tool = process.argv[3];

let ToolWin = ["P", "F", "C"];
let ToolLoos = ["C", "P", "F"];

if (ToolWin.intexOf(User1Tool) === ToolLoos.indexOf(User2Tool)) {
  console.log("J1 window");
} else if (ToolWin.intexOf(User2Tool) === ToolLoos.indexOf(User1Tool)) {
  console.log("J2 window");
} else if (User1Tool === User2Tool) {
  console.log("ex xeco");
} else {
  console.log("?");
}
