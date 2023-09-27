// Objet représentant l'écran défilant Advertizr
const advertizer = {

    /**
     * Propriétés
     */

    // Propriété permettant de modéliser le fait que la touche MAJ a été enfoncée
    isUpperCase: false,

    /**
     * Méthodes
     */

    init: function() {

        // Code à exécuter au lancement de la page

    }
}

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" advertizr
document.addEventListener('DOMContentLoaded', advertizer.init);