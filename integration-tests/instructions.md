# Todos en ligne de commande

Implémentez une application en ligne de commande qui permet de maintenir une petite liste d'actions à faire (de todo).
L'application stocke les todo dans un fichier texte.
L'objectif est d'implémenter au moins un test d'intégration par fonctionnalité, et d'obtenir la meilleur couverture de code possible.

# Fonctionnalités existantes

- Une commande liste les todo
- Une commande ajoute un todo

# Fonctionnalités à ajouter

- Une commande enlève un todo
- Le nombre de todo maximum est de 5
- Il est interdit d'ajouter un todo qui contient le mot "demain"
- Le premier mot d'un todo qu'on ajoute est automatiquement mis en majuscule
- Toutes les commandes écrivent "TODO Manager 1.0" dans la console au début de leur exécution

# Exemples

```
$ node addTodo.js "Faire la lessive"
Todo ajouté

$ node listTodos.js
Vous avez 2 tâches :

[ ] Manger
[ ] Faire la lessive
```

# Ressources

* Comment parser les arguments en ligne de commande https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/

# Fonctionnalités bonus :

- Ajouter un statut (todo, in_progress, done) à chaque todo
- Ajouter une deadline à chaque todo
