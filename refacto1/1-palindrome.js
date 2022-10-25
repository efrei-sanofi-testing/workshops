// Détermine si le paramètre passé est un palindrome
// ex: "node 1-palindrome.js aha"

const inputWord = process.argv[2];

if (inputWord.split("").reverse("").join("") === inputWord) {
  console.log("Ceci est un palindrome");
} else {
  console.log("Ceci n'est pas un palindrome");
}
