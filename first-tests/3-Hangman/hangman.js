export function hangmanState(wordToGuess, guessedLetters){


    wordToGuess = wordToGuess.toUpperCase();
    guessedLetters = guessedLetters.toUpperCase();
    console.log(wordToGuess, guessedLetters)

    wordToGuess = wordToGuess.split("")
    guessedLetters = guessedLetters.split("")
    //console.log(wordToGuess, guessedLetters)

    //word to gess: remove letter in double
    let gessShort = wordToGuess.reduce((agg, it) => {
        if (agg.indexOf(it) === -1) {
            agg.push(it)
         }
         //console.log("reduce word to gess", it, agg)
        return agg;}
    , []);

    //all letter have been fount
    let win = gessShort.slice()
    win = guessedLetters.reduce((agg, it) => {
        if (agg.indexOf(it) > -1) {
            agg.splice(agg.indexOf(it), 1)
        }
        //console.log("is it a win", it, agg)
        return agg;
    }, win)
    console.log("win", win)
    if (win.length == 0) { return "win" }

    console.log("re-gessShort",gessShort)
    //too many error
    let lose = guessedLetters.slice()
    lose = gessShort.reduce((agg, it) => {
        if (agg.indexOf(it) > -1) {
            agg.splice(agg.indexOf(it), 1)
        }
        //console.log("is it a loose", it, agg)
        return agg;
    }, lose)
console.log("lose", lose)
    if (lose.length > 9) { return "lose" }

    return "in_progress"

}