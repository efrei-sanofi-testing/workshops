# Exercice 2 : Ni oui ni non `niOuiNiNon(sentence)`

_Difficulté ⭐️_

Implémentez la fonction `niOuiNiNon(sentence)` qui détermine si une phrase est valide au jeu de "Ni oui ni non".

Une phrase est valide si elle ne contient pas les mots "oui" ou "non". La fonction renvoie `true` si la phrase est valide, `false` si elle ne l'est pas.

Votre programme doit reconnaire Oui et Non quelle que soit leur casse (majuscule/minuscule)

## Paramètres

- `sentence` : `String` Phrase à analyser

## Exemple

```js
niOuiNiNon("j'aime la tarte au citron");
// Doit retourner : true

niOuiNiNon("J'en ai entendu parler oui c'est vrai");
// Doit retourner : false
```
