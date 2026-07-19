// Menu burger (mobile)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('ouvert');
  });
  // Fermer le menu au clic sur un lien
  menu.querySelectorAll('a').forEach(lien => {
    lien.addEventListener('click', () => menu.classList.remove('ouvert'));
  });
}

// Carrousel de fond du hero
// L'image principale (classe "principale") reste affichee plus longtemps.
(function() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  const DUREE_PRINCIPALE = 7000; // 7 s pour l'image principale (amphi)
  const DUREE_AUTRE = 4000;      // 4 s pour les autres

  let index = 0;
  function suivant() {
    const courante = slides[index];
    courante.classList.remove('active');
    index = (index + 1) % slides.length;
    const prochaine = slides[index];
    prochaine.classList.add('active');
    // Duree d'affichage selon que la prochaine est principale ou non
    const duree = prochaine.classList.contains('principale') ? DUREE_PRINCIPALE : DUREE_AUTRE;
    setTimeout(suivant, duree);
  }
  // Demarrage : la premiere (principale) est deja active, on attend sa duree
  setTimeout(suivant, DUREE_PRINCIPALE);
})();
