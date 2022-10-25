// Détermine qui gagne au pierre feuille ciseaux
// exemple : node 2-pfc.js P F

const argument1 = process.argv[2];
const argument2 = process.argv[3];
const validInputs = ["P", "F", "C"];

function gameResult(player1, player2) {
  if (!(validInputs.includes(player1) && validInputs.includes(player2))) {
    return "?";
  }
  if (player1 === player2) {
    return "ex aequo";
  }

  if (
    (player1 === "P" && player2 === "C") ||
    (player1 === "C" && player2 === "F") ||
    (player1 === "F" && player2 === "P")
  ) {
    return "J1";
  }

  return "J2";
}

console.log(gameResult(argument1, argument2));
