# Exercice 3 : Jeu du pendu

_Difficulté ⭐️⭐️⭐️_

Votre objectif est d'implémenter 2 fonctions qui vont aider à la création d'un jeu de pendu.

[Wikipédia : Pendu (jeu)](<https://fr.wikipedia.org/wiki/Pendu_(jeu)>)

Le jeu de pendu joué ici se joue en 10 ratés. Lorsque la dixième lettre ratée est atteinte, le jeu est perdu.  
Le jeu commence sans aucune lettre pré-affichée.

## 1. Etat du jeu: `hangmanState(wordToGuess, guessedLetters)`

Implémentez la fonction `hangmanState(wordToGuess, guessedLetters)`, qui détermine l'état d'une partie de pendu.

- Une partie de pendu est gagnée (`win`) si l'ensemble des lettres du mot à deviner ont été essayées
- Une partie de pendu est perdue (`lose`) si l'ensemble des lettres du mot à deviner n'ont pas été essayées et que le nombre maximal de ratés est atteint ou dépassé
- Une partie de pendu est en cours (`in_progress`) dans les autres cas

### Paramètres

- `wordToGuess` : `String` Mot à deviner. Certaines lettres peuvent être en majuscules
- `guessedLetters` : `String` Lettres essayées, toutes en minuscule

### Exemple

```js
hangmanState("CaNard", "eraubdnc");
// Doit retourner : "win"

hangmanState("CaNard", "eztcuynklamj");
// Doit retourner : "in_progress"

hangmanState("CaNard", "eztcuynklamjh");
// Doit retourner : "lose"
```

## 2. Représentation du mot: `hangmanWord(wordToGuess, guessedLetters)`

Implémentez la fonction `hangmanWord(wordToGuess, guessedLetters)`, qui retourne la représentation d'un mot de pendu en cours de partie.

Dans une partie de pendu, chaque lettre du mot est remplacée par un underscore `_`, sauf les lettres déjà devinées. Les lettres sont en majuscule.

Cette fonction ne vérifie pas que le jeu soit perdu ou gagné, et ignore le nombre maximal de ratés.

### Paramètres

- `wordToGuess` : `String` Mot à deviner. Certaines lettres peuvent être en majuscules
- `guessedLetters` : `String` Lettres essayées, toutes en minuscule

### Exemple

```js
hangmanWord("Canard", "eraubdnc");
// Doit retourner : "CANARD"

hangmanWord("Canard", "eztcuynklamj");
// Doit retourner : "CANA__"

hangmanWord("Canard", "eztcuynklamjh");
// Doit retourner : "CANA__"

hangmanWord("rabibocher", "eapbuc");
// Doit retourner : "_AB_B_C_E_"
```
