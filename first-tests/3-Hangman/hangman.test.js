// Le max try est a 15 !!!
import {hangmanState, hangmanWord} from "./hangman";

// TEST de hangmanState(wordToGuess, guessedLetters)
test("fct hangmanState(wordToGuess='Accelerator', guessedLetters='gjciel') doit retourner 'in_progress'", () => {
    expect(hangmanState('Accelerator', 'gjciel')).toBe('in_progress')
})
test("fct hangmanState(wordToGuess='Accelerator', guessedLetters='tgajocielr') doit retourner 'win'", () => {
    expect(hangmanState('Accelerator', 'tgajocielr')).toBe('win')
})
test("fct hangmanState(wordToGuess='Accelerator', guessedLetters='gjcielkmbxupwatf') doit retourner 'lose'", () => {
    expect(hangmanState('Accelerator', 'gjcielkmbxupwat')).toBe('lose')
})


// TEST de hangmanWord(wordToGuess, guessedLetters)
test("fct hangmanWord(wordToGuess='Accelerator', guessedLetters='gjcietf') doit retourner '_CCE_E__T__'", () => {
    expect(hangmanWord('Accelerator', 'gjcietf')).toBe('_CCE_E__T__')
})
test("fct hangmanWord(wordToGuess='Canard', guessedLetters='eztcuynklamj') doit retourner 'CANA__'", () => {
    expect(hangmanWord('Canard', 'eztcuynklamj')).toBe('CANA__')
})
test("fct hangmanWord(wordToGuess='Canard', guessedLetters='eztcuynklamjh') doit retourner 'CANA__'", () => {
    expect(hangmanWord('Canard', 'eztcuynklamjh')).toBe('CANA__')
})
test("fct hangmanWord(wordToGuess='rabibocher', guessedLetters='eapbuc') doit retourner '_AB_B_C_E_'", () => {
    expect(hangmanWord('rabibocher', 'eapbuc')).toBe('_AB_B_C_E_')
})
