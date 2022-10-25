// Détermine qui gagne au pierre feuille ciseaux
// exemple : node 2-pfc.js P F


if(process.argv[2] === "P") {
    if(process.argv[3] === "P") console.log("ex aequo")
    else if(process.argv[3] === "F") console.log("J2")
    else if(process.argv[3] === "C") console.log("J1")
    else console.log("?")
}
else if(process.argv[2] === "F") {
    if(process.argv[3] === "P") console.log("J1")
    else if(process.argv[3] === "F") console.log("ex aequo")
    else if(process.argv[3] === "C") console.log("J2")
    else console.log("?")
}
else if(process.argv[2] === "C") {
    if(process.argv[3] === "P") console.log("J2")
    else if(process.argv[3] === "F") console.log("J1")
    else if(process.argv[3] === "C") console.log("ex aequo")
    else console.log("?")
}
else console.log("?")
