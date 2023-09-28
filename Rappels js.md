# Révisions JS

## Les variables
> Notions : let, const, camelCase


De base : on va créer une Constante (const), et c'est seulement si on sait qu'on doit modifier la valeur stockée dans cette variable, qu'on modifiera le `const` par `let`.

Les constantes sont plus pratiques pour la mémoire.

[Mdn : const](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const)

```js
const maConstante = "Une valeur fixe";
```

[Mdn : let](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let)

```js
let maVariable = "quelque chose";
maVariable = 12;
```

### Les types
> Notions : int, float, string, bool
> En JS : Number, string, bool, NaN, [int, float]

[Mdn : Types et structures de données](https://developer.mozilla.org/fr/docs/Web/JavaScript/Data_structures)

```js
let valeur;
console.log(valeur);    // undefined
valeur = null;
valeur = 12;
valeur = 42.12;
valeur = "quarante deux";
valeur = false;
```

```js 
let input = "3"; // string
console.log(typeof input); // string
// pour convertir la valeur stockée dans input en un entier : 
let result = Number(input);
console.log(result); // 3

```

```js
let string="bonjour";
result = Number(string);
//NaN
console.log(result);
//NaN
isNaN(result);
//true
```

## Les tableaux
> Notions : index, clé

### Tableau indexé
> Notions : déclaration, manipulation, lecture

[Mdn : Tableau](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)

```js
let monTableau = ["abc", "def"];
monTableau.push("ghi");
console.table(monTableau);
//0: "abc"
//1: "def"
//2: "ghi"


const valeurDeux = monTableau[1];
console.log(valeurDeux);
//'def'
```

### Tableau associatif (objets)
> Notions : déclaration, manipulation, lecture

[Mdn : Utiliser les objets](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_Objects#indexing_object_properties)

```js
let monTabAsso = {
    cle: "valeur",
    autrecle: 42
};
console.log (monTabAsso);
//{cle: 'valeur', autrecle: 42}

monTabAsso.encorecle = true; //ajoute un élément au tableau, impossible de monTabAsso.push
// Comme monTabAsso contient un objet (js), encorecle est une propriété de l'objet stocké dans monTabAsso

console.log(monTabAsso);
//{cle: 'valeur', autrecle: 42, encorecle: true}
console.log(monTabAsso.encorecle);
//true
console.log(monTabAsso['encorecle']);
//true

let valeurCle = monTabAsso.cle;
console.log(valeurCle);
//"valeur"
```


## Les boucles
> for, for of, for in

[Mdn : for](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for)

[Mdn : les autres boucles](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/for#voir_aussi)

### for
> Exécute une série d'instructions plusieurs fois

```js
for (let i = 0; i < 42; i++) {
    console.log(i);
}
```

### for of

> Parcours le tableau et fournit l'élément à chaque itération, ne fonctionne pas avec un tableau associatif

```js

// Cas Array
const monTableau = ["abc", "def", "ghi"];

for (const element of monTableau) {
  console.log(element);     // Affichera "abc", puis "def", puis "ghi"
}


// Cas Object
const monTabAsso = {
    cle: "valeur",
    autrecle: 42,
    encorecle: false
};

for (const element of monTabAsso) {
  console.log(element);     // erreur : pas itérable
}


for (const key of Object.keys(monTabAsso)) {
  console.log(key);     // plus d'erreur
}

//cle
//autrecle
//encorecle


for (const element of Object.entries(monTabAsso)) {
  console.log(element);     // plus d'erreur
}

//['cle', 'valeur']
//['autrecle', 42]
//['encorecle', false]
```

### for in
> Parcours le tableau et fournit l'index à chaque itération, ou la clé pour un objet

```js
const monTableau = ["abc", "def", "ghi"];

for (const index in monTableau) {
  console.log(index);                   // Affichera 0, puis, 1, puis 2
  console.log(monTableau[index]);       // Affichera "abc", puis "def", puis "ghi"
}

//0
//abc
//1
//def
//2
//ghi


const monTabAsso = {
    cle: "valeur",
    autrecle: 42,
    encorecle: false
};

for (const property in monTabAsso) {
  console.log(property);                   // Affichera cle, puis autrecle, puis encorecle
  console.log(monTabAsso[property]);       // Affichera "valeur", puis 42, puis false
}

//cle
//valeur
//autrecle
//42
//encorecle
//false
```

[Autre boucle While MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/while)


## Les fonctions
> Notions : déclaration, arguments, retour, appel

[Mdn : les fonctions](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function)

```js


// syntaxe conventionnelle
const valeur1 = maFonction(2, 65); // pas d'erreur
function maFonction(param1, param2) {
    const resultat = param1 + param2;
    return resultat;
}
const valeur2 = maFonction(2, 65); // pas d'erreur

// Autre syntaxe : 
const valeur3 = autreFonction(2, 65); // erreur : ne trouve pas la fonction
const autreFonction = function(param1, param2) {
    const resultat = param1 - param2;
    return resultat;
}
const valeur4 = autreFonction(2, 65); // pas d'erreur
```


## Les conditions
> Notions : utilisation, opérateurs

[Mdn : Prendre des décisions dans le code](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/conditionals)

```js
let valeur = 12;

if ( valeur < 5 ) {
    console.log("valeur est inférieur à 5");
}
else if ( valeur < 10 ) {
    console.log("valeur est inférieur à 10 et supérieur à 5");
}
else {
    console.log("valeur est supérieur ou égal à 10");
}
```

[Switch case](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/switch)

### Opérateurs de comparaison

```js
if ( valeur === 12 ) {
    console.log("valeur est strictement égal à 12 (valeur et type)");
}
if ( valeur !== 12 ) {
    console.log("valeur est strictement différent de 12 (valeur et type)");
}

if ( valeur != "12" ) {
    console.log("valeur est différent 12 (valeur uniquement)");
}

if ( valeur >= 12 ) {
    console.log("valeur est supérieur ou égal à 12");
}
```

### Opérateurs logiques

```js
if ( valeur === 12 || valeur === true ) {
    console.log("valeur est égal à 12 OU est vrai");
}
```

```js
if ( valeur < 5 && valeur > 10 ) {
    console.log("valeur est inférieur à 5 et supérieur à 10");
}
```

```js
if ( !valeur ) {
    console.log("valeur n'est pas vrai");
}
```


## Le DOM (document object model)
> Notions : sélection d'un élément HTML, manipulation, intéractions, création

### Sélection

[Mdn : Manipuler des documents](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

```html
<main>
    <h1 id="id-du-noeud">Titre</h1>

    <div class="class-de-noeuds">1</div>
    <div class="class-de-noeuds">2</div>
    <div class="class-de-noeuds">3</div>
    <div class="class-de-noeuds">4</div>
</main>
```


```js
// Récupère un noeud avec son id
let node1 = document.getElementById("id-du-noeud");

// Récupère le premier noeud qui correspond au sélecteur css
let node2 = document.querySelector('div.class-de-noeuds')

// Récupère plusieurs noeuds avec la classe
let nodesList1 = document.getElementsByClassName("class-de-noeuds");

// Récupère tous les noeuds qui correspondent au sélecteur css
let nodesList2 = document.querySelectorAll("div.class-de-noeuds");
```

### Manipulation

```js
let node1 = document.getElementById("id-du-noeud");

// Modifie l'id
node1.id = "autre-id";

// Ajoute une classe
node1.classList.add('class-title');
// Supprime une classe
node1.classList.remove('class-title');
// Bascule une classe (ajoute ou supprime)
node1.classList.toggle('class-title');

// Redéfini le contenu
node1.textContent = "Nouveau titre";

// Ajoute un attribut
node1.setAttribute('role', 'presentation');
// Supprime un attribut
node1.removeAttribute('role');

// Suppression de l'élément du DOM
node1.remove();
```

### Intéractions 
```html
<button id="go">GO</button>
```

```js
// Fonction de callback appelée lors d'un click
// JS fournit automatiquement un argument, on le nomme comme on veux, ici `event`
function handleButtonClick (event) {
    console.log(event);

    // Pour récupérer le bouton cliqué depuis l'argument event
    const btn = event.currentTarget;

    // Modification du texte du bouton après le click
    btn.textContent = "Gone";
}

// Récupération du bouton et branchement de l'event click
const btnGo = document.getElementById("go");
btnGo.addEventListener('click', handleButtonClick);
```

### Création
```html
<div class="container"> 
    <!-- <span class="span-class">Texte du span</span> -->

</div>
```

```js
// Création d'un élément de toute pièce
const newElt = document.createElement('span');
newElt.classList.add('span-class')
newElt.textContent = "Texte du span";

// Récupération du container
const ctn = document.querySelector('.container');
// Ajout de l'élément au container
ctn.append(newElt); // à partir de là, le nouveau span s'affichera
// append : ajoute d'élément à la fin de la liste des enfants du conteneur
// preprend : ajoute d'élément au début de la liste des enfants du conteneur
```


## Modules (presque POO)
> Notions : déclaration, utilisation

[Mdn : Les bases de JavaScript, orienté objet](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Basics)

```js
// Déclaration du module
const MonModule = {

    // Propriétés (comme en PHP)
    container: null,

    // Méthode d'initialisation (un genre de constructeur comme en PHP)
    init: function () {
        // Accès à la propriété du module en écriture
        MonModule.container = document.querySelector('#container');

        // Accès à la propriété du module en lecture
        console.log(MonModule.container);

        // Appel d'une méthode interne
        const result = MomModule.maMethode(1,5);
    },

    // Méthode (comme en PHP)
    maMethode: function (arg1, arg2) {
        return arg1 + arg2;
    }
}

// Branchement de la méthode d'initialisation du module à la fenêtre
// DOMContentLoaded est appelé quand le DOM est entièrement chargé et analysé
window.addEventListener("DOMContentLoaded", MonModule.init);
```

## THE outil de DEBUG

```js
debugger;
```
