// Sélectionner la div avec l'ID 'box' et le span pour les offsets
const box = document.getElementById('box');
const offsetsDisplay = document.getElementById('offsets');

// Initialiser les variables de position
let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

// Ajouter des écouteurs d'événements pour mousedown, mousemove, et mouseup
box.addEventListener('mousedown', startDrag);

function startDrag(event) {
    initialX = event.clientX - offsetX;
    initialY = event.clientY - offsetY;

    // Ajouter des écouteurs pour le mouvement de la souris et la libération du bouton
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(event) {
    // Calculer la nouvelle position de la div
    offsetX = event.clientX - initialX;
    offsetY = event.clientY - initialY;

    // Appliquer la nouvelle position
    setTranslate(offsetX, offsetY, box);

    // Mettre à jour l'affichage des offsets
    updateOffsetsDisplay(offsetX, offsetY);
}

function stopDrag() {
    // Retirer les écouteurs d'événements lorsque le bouton de la souris est relâché
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}

function updateOffsetsDisplay(xPos, yPos) {
    offsetsDisplay.textContent = `OffsetX: ${xPos}, OffsetY: ${yPos}`;
}
