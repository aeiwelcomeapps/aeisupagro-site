// Menu burger (mobile)
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

if (burger && menu) {
  burger.addEventListener('click', () => {
    const ouvert = menu.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', String(ouvert));
  });
  // Fermer le menu au clic sur un lien
  menu.querySelectorAll('a').forEach(lien => {
    lien.addEventListener('click', () => {
      menu.classList.remove('ouvert');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Apparition douce au defilement (cartes, titres de section, membres, etc.)
// Progressive enhancement : sans JS ou avec prefers-reduced-motion, le
// contenu est deja visible normalement (voir .reveal dans style.css).
(function() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cibles = document.querySelectorAll(
    '.carte, .section-titre, .membre, .contact-carte, .galerie img, .pole-titre, .faq-item, .guide-bloc, .banniere-illustree .banniere-img'
  );
  if (!cibles.length || !('IntersectionObserver' in window)) return;

  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (entree.isIntersecting) {
        entree.target.classList.add('reveal-in');
        observateur.unobserve(entree.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  cibles.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
    observateur.observe(el);
  });
})();

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
