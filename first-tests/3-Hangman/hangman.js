export function hangmanState(wordToGuess, guessedLetters) {
    let MAX_TRY = 15
    let nb_coup = guessedLetters.length
    if (nb_coup < MAX_TRY) {
        if (hangmanWord(wordToGuess, guessedLetters) === wordToGuess.toUpperCase()) {
            return 'win'
        }
        return 'in_progress'

    } else {
        return 'lose'
    }
}

export function hangmanWord(wordToGuess, guessedLetters) {
    let mot = ''
    for(let i=0; i<wordToGuess.length; i++) {
        let letter = wordToGuess[i].toUpperCase()
        if (guessedLetters.toUpperCase().includes(letter)) {
            mot += letter
        } else {
            mot += '_'
        }
    }
    return mot
}