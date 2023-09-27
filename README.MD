# Advertizr

Bonjour dev en devenir !

Je suis *Marc Repair*, entrepreneur de talent qui vient de créer la startup qui monte : **Advertizr**. C'est un tout nouveau système qui permet de créer des bandeaux publicitaires dans **la vie réelle** avec paramétrage depuis une page web avec un beau clavier virtuel !

Je sais, c'est disruptif, le monde n'est peut-être pas prêt.

Le souci c'est que le prototype n'est pas totalement terminé. Pour l'instant, l'intégration est faite, mais rien n'est "branché" ! C'est à dire que si on clique sur les touches du clavier, rien ne s'affiche sur le bandeau publicitaire.
Tu comprendras donc que ton but à toi sera de terminer ce projet et faire en sorte qu'on puisse afficher un message sur le bandeau.

## Mise en place

Dans ce dépôt, tu trouveras un fichier `js/app.js` dans lequel tu pourras coder les fonctionnalités demandées. Ce dernier contient déjà un "module" représentant le bandeau publicitaire et son clavier virtuel.

Le fichier `index.html` contient déjà tout le code HTML nécessaire. Pour voir à quoi ressemblera le résultat du bandeau fonctionnel, tu peux ajouter un message dans la balise `<p>` portant la classe `screen` et recharger la page. Mais le but est bien de faire en sorte de créer ce message depuis les clics sur le clavier virtuel.

## 1 - Surveiller les clics sur les touches du clavier

Pour ajouter les lettres sur lesquelles on a cliqué dans l'écran, il faut commencer par **surveiller** les **clics** sur **toutes les touches lettres et espace** du clavier. Pour le moment, on ne s'occupe pas les touches **Maj** et **Retour**.

Pour surveiller un événement sur un élément du DOM, on commence par le sélectionner. Ici, toutes les touches qu'on veut sélectionner ont une classe en commun : `key`.

**Pour t'aider à te lancer, voici un petit plan d'action**

- **Au chargement de la page,** sélectionne tous les éléments qui ont la classe `key`
- **Pour chaque** élément, pose un écouteur d'événements `click` dessus.
- Un écouteur d'événements appelle une fonction qu'on appelle *handler* quand il détecte l'événement surveillé. Tu peux, par exemple, créer une méthode appelée `handleClickOnLetter` qui est appelée par tes écouteurs d'événements.
- Dans  la méthode `handleClickOnLetter` affiche un message dans la console contenant la lettre sur laquelle on a cliqué !

### Aide

Voici quelques petits liens utiles pour cette première étape :

- La méthode `advertizr.init()` est exécutée au chargement de la page.
- Pour sélectionner **un seul** élément sur la page, on peut utiliser [querySelector](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector). Tandis que si on veut en sélectionner **plusieurs**, on peut utiliser [querySelectorAll](https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll).
- Pour poser un écouteur d'événements, on peut utiliser [addEventListener](https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)
- Un écouteur d'événements envoie systématiquement à son *handler* un objet `Event` qui permet de connaître plein d'informations à propos de l'événement (date et heure de l'événement, élément ciblé, position de la souris, etc). Pour récupérer ce "compte-rendu" de l'événement, on place un paramètre dans la fonction *handler* (paramètre qu'on appelle généralement `event`)
- Pour savoir quel élément du DOM a déclenché l'événement, on peut regarder la propriété `currentTarget` de l'objet `event` reçu en paramètre du *handler*.
- Pour récupérer le contenu texte d'un élément, la propriété [textContent](https://developer.mozilla.org/fr/docs/Web/API/Node/textContent) est très utile.

<details>
    <summary>Exemple de handler</summary>

```js
function handleClick(event) {

    // On affiche dans la console la cible du clic
    console.log(event.currentTarget);

}
```

</details>

## 2 - Afficher la lettre  voulue sur l'écran

Maintenant qu'on arrive à récupérer la lettre sur laquelle on vient de cliquer, il faut l'ajouter à l'écran !

Pour ça, on va se faire une méthode `addLetter` dont le but est d'ajouter dans l'écran virtuel la ou les lettres qu'on lui envoie en argument.

A nouveau, un petit plan d'action !

- Créer une méthode `addLetter` avec un **paramètre** pour recevoir la lettre à ajouter.
- Récupérer dans une variable le contenu existant de l'écran virtuel (balise portant la classe `.text`).
- Modifier le contenu de l'écran virtuel pour qu'il soit égal au contenu actuel, auquel on ajoute la lettre reçue en paramètre.

### Aide

- Pour récupérer le contenu texte d'un élément, comme pour le redéfinir, la propriété [textContent](https://developer.mozilla.org/fr/docs/Web/API/Node/textContent) reste toujours très utile !
- En JavaScript, pour **concaténer** des chaînes de caractères, on utilise le signe `+`.

## 3 - Prendre en compte la touche majuscule

Sur notre écran, on veut pouvoir aussi afficher des majuscules. Pour ce faire, le clavier dispose d'un bouton en forme de flèche dédié. Le but de cette étape est de faire en sorte que le clic sur ce bouton soit pris en compte ! 

Dans le module fourni, une propriété `isUpperCase` est déjà fournie. Par défaut, elle vaut `false`. Celle-ci sert à modéliser le fait qu'on soit en majuscules ou non. Si on clique sur le bouton, elle doit passer à `true`, si on re-clique, elle revient à `false`.

Faisons un petit plan d'action !

- Au chargement de la page, on veut aussi écouter les clics sur le bouton en forme de flèche. Ce dernier possède une classe unique pour le sélectionner.
- Si on détecte un clic sur ce bouton, alors on inverse le contenu de la propriété `isUpperCase`.
- Une classe `pressed` est prévue dans le CSS pour changer l'apparence du bouton si on a cliqué dessus. A toi de l'ajouter ou la retirer si les majuscules sont actives ou non.
- Maintenant qu'on sait si les majuscules sont activées ou non (grâce à la propriété `isUpperCase`), on peut légèrement modifier la méthode `addLetter` pour qu'elle prenne en compte cet état. Avant d'ajouter la lettre à l'écran, commence par vérifier si les majuscules sont activées. Si oui, transforme la lettre en majuscule !

### Aide 

- On veut toujours vérifier les clics sur un bouton **au chargement de la page** !
- La méthode `toggle` de [ClassList](https://developer.mozilla.org/fr/docs/Web/API/Element/classList#m%C3%A9thodes) est bigrement pratique pour ajouter/retirer une classe à un élément.
- Pour transformer une lettre en majuscule, il existe [des outils tout prêts !](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

## Bonus - Gérer la touche retour

Il reste un dernier bouton qui ne fait rien :  la touche retour.
Ta mission pour cette étape sera de coder le comportement de cette touche retour. C'est à dire  qu'elle doit effacer le **dernier caractère** de l'écran à chaque clic !

Pas de plan d'action pour cette fois, à toi de gérer. Mais il parait que [cette page ](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/slice)peut t'aider 😉

## Mega bonus de la mort

Vu que je veux être toujours à la pointe, il faut que mon système soit au top de l'innovation. Et quoi de mieux que de pouvoir avoir un bandeau publicitaire qui colle à l'identité  graphique de mes clients ?

Je voudrais que tu ajoutes quelques boutons sous le clavier avec chacun une couleur de fond. Quand je clique dessus, ça change la couleur du texte à l'écran par la couleur du bouton.
Après, si tu vois comment faire un système où on peut choisir n'importe quelle couleur, ça me va aussi !

Pour le moment, tu comprendras que ce n'est pas possible de te payer. Mais vu le succès que va avoir _Advertizr_, tu penses bien que tout le monde va entendre parler de toi !
