// Détermine si le paramètre passé est un palindrome
// ex: "node palindrome.js aha"

console.log("Ceci " + (process.argv[2].split("").reverse('').join("") === process.argv[2] ? "est" : "n'est pas") + " un palindrome")