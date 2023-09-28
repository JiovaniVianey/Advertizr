// Objet représentant l'écran défilant Advertizr
const advertizer = {

    /**
     * Propriétés
     */
    keylist: null,

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,

    /**
     * Méthodes
     */

    init: function() {
        // Code à exécuter au lancement de la page
        advertizer.keyList = document.querySelectorAll(".key.letter");
        advertizer.keyshift = document.querySelector(".maj");
        advertizer.keyback = document.querySelector(".return");
        advertizer.keyspace = document.querySelector(".key.space");
        advertizer.customColorInput = document.getElementById('custom-color-input');

        for (const key of advertizer.keyList) {
            key.addEventListener('click', advertizer.addLetter);
        }

        advertizer.keyshift.addEventListener('click', advertizer.toggleUpperCase);
        advertizer.keyspace.addEventListener('click', advertizer.addSpace);
        advertizer.keyback.addEventListener('click', advertizer.removeLetter);
        advertizer.customColorInput.addEventListener('input', advertizer.changeTextColor);
    },

    // Rajoute un caractère au texte
    addLetter: function(event) {
        const screen = document.querySelector(".text");
        let screentext = screen.textContent;
        const btn = event.currentTarget;
        let keyChar = btn.textContent;

        if (advertizer.isUpperCase) {
            keyChar = keyChar.toUpperCase();
        }

        screentext += keyChar;

        screen.textContent = screentext;
    },

    // Enlève le dernier caractère du texte
    removeLetter: function(event) {
        const screen = document.querySelector(".text");
        let screentext = screen.textContent;

        screentext = screentext.slice(0,-1);

        screen.textContent = screentext;
    },

    // Rajoute un espace au texte
    addSpace: function(event) {
        const screen = document.querySelector(".text");
        let screentext = screen.textContent;

        screentext += " ";

        screen.textContent = screentext;
    },

    toggleUpperCase() {
        advertizer.isUpperCase = !advertizer.isUpperCase;

        // Parcourez les boutons et ajoutez ou retirez la classe "upper" en fonction de l'état des majuscules
        for (const key of advertizer.keyList) {
            if (advertizer.isUpperCase) {
            key.classList.add('upper');
            } else {
            key.classList.remove('upper');
            }
        };

        if (advertizer.isUpperCase) {
            advertizer.keyshift.classList.add('pressed');
        } else {
            advertizer.keyshift.classList.remove('pressed');
        }
    },

    // Méthode pour changer la couleur du texte
    changeTextColor: function() {
        const colorValue = advertizer.customColorInput.value;
        const screen = document.querySelector(".text");
        screen.style.color = colorValue;
    }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', advertizer.init);