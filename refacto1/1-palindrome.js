// Détermine si le paramètre passé est un palindrome
// ex: "node 1-palindrome.js aha"

function printPalindromeStatus(word) {
  const reversedWord = word.split("").reverse("").join("");

  if (reversedWord === word) {
    console.log("Ceci est un palindrome");
  } else {
    console.log("Ceci n'est pas un palindrome");
  }
}

const parameter = process.argv[2];
printPalindromeStatus(parameter);
