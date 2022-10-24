## 4. Bonus: Score petit bac: `petitBacScore(currentLetter, proposedWords)`

_Difficulté ⭐️⭐️_

Implémentez la fonction `petitBacScore(currentLetter, proposedWords)`, qui calcule le score des propositions de chacun des joueurs à un jeu de petit bac.

Dans le jeu de petit bac, les joueurs doivent chacun trouver un mot appartenant à une catégorie et commençant par une lettre. Les mots corrects valent 2 points, sauf s'ils ont été proposés par un autre joueur, ils valent alors 1 point.

Par exemple, pour la lettre A, et les propositions `Abeille, Alligator, Alligator, Hareng` les scores sont les suivants :

- "Abeille" vaut 2 points : mot valide et proposé une seule fois
- "Alligator" vaut 1 points : mot valide et proposé plus d'une fois
- "Hareng" vaut 0 points : mot invalide

Dans cet exemple, la fonction prendra en paramètres `"A"` et `["Abeille", "Alligator", "Alligator", "Hareng"]`.  
Elle renverra `[2,1,1,0]` : le score de chacune des propositions, dans le même ordre.

- [Page wikipédia du petit bac](https://fr.wikipedia.org/wiki/Jeu_du_baccalaur%C3%A9at)
- Vous ignorerez complètement le concept de "Catégorie" au petit bac pour cet exercice.
- Les mots sont toujours capitalisés à l'identique, avec la première lettre en majuscule. La lettre en cours est toujours en majuscule

### Paramètres

- `currentLetter` : `String` Lettre de la partie en cours, par laquelle les propositions doivent commencer.
- `proposedWords` : `String[]` Propositions de mots de chacun des joueurs.

### Exemples

```js
petitBacScore("B", ["Bleu", "Blanc", "Bleu", "Rose", "Bleu"]);
// Doit retourner : [1, 2, 1, 0, 1]
```

```js
petitBacScore("A", ["Abeille", "Alligator", "Alligator", "Hareng"]);
// Doit retourner : [2, 1, 1, 0]
```
