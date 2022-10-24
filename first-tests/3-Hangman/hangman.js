export function hangmanState(wordToGuess, guessedLetters) {
  const wordToGuessInArray = wordToGuess.toLowerCase().split("");

  const isWin = wordToGuessInArray.every((letter) =>
    guessedLetters.includes(letter),
  );
  if (isWin) return "win";

  const isLose =
    guessedLetters
      .split("")
      .filter((letter) => !wordToGuessInArray.includes(letter)).length > 9;

  if (isLose) return "lose";
  return "in_progress";
}

export function hangmanWord(wordToGuess, guessedLetters) {
  let result = wordToGuess.toUpperCase().split("");
  result = result.map((letter) =>
    guessedLetters.toUpperCase().includes(letter) ? letter : "_",
  );

  result = result.join("");

  return result;
}
