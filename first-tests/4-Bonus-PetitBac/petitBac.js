function nbOccurence (elem, tableau) {
    let nbTime = 0
    for (let i=0; i<tableau.length; i++) {
        if (tableau[i] === elem) {
            nbTime++
        }
    }
    return nbTime
}

export function petitBacScore(currentLetter, proposedWords) {
    let ret = []
    for (let i=0; i<proposedWords.length; i++) {
        let proposedWord = proposedWords[i]
        if (proposedWord[0].toUpperCase() === currentLetter.toUpperCase()) {
            if (nbOccurence(proposedWord, proposedWords) > 1) {
                ret = [...ret, 1]
            } else {
                ret.push(2)
            }
        } else {
            ret.push(0)
        }
    }
    return ret
}