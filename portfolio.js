
const modal = document.getElementById("modal");
const modalDetails = document.getElementById("modal-details");

// Fonction pour ouvrir la modale avec le contenu spécifique
function openModal(contentId) {
  // Ajoute le contenu correspondant à la carte
  let content = "";
  if (contentId === "web") {
    content = `
      <h2>Développement Web</h2>
      <p>Voici les détails sur mes projets en développement web...</p>
      <a href="https://github.com/Groupe6VNB" class="btn">Voir le github</a>
    `;
  } else if (contentId === "cybersecurity") {
    content = `
      <h2>Cybersécurité</h2>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/Tp Cookie.pdf" target="_blank" class="btn">Tp cookie</a>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/Tp Git.pdf" target="_blank" class="btn">Tp Git</a>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/Tp Kali.pdf" target="_blank" class="btn">Tp Kali</a>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/TpAnalyse.pdf" target="_blank" class="btn">Tp Analyse</a>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/Tp Steganographie.pdf" target="_blank" class="btn">Tp Steganographie</a>
      <p>Voici les détails sur mes projets en cybersécurité...</p>
      <a href="TpCybersécurité/Tp2 Intrusion.pdf" target="_blank" class="btn">Tp Intrusion</a>
    `;
  } else if (contentId === "network") {
    content = `
       <h2>Réseau</h2>
      <p>Voici les détails sur mes projets en réseau...</p>
      <a href="Document /TpReseau/Tp Serveur DHCP.pdf" target="_blank" class="btn">TP DHCP</a>
      <a href="Document /TpReseau/Tp mise en place de RAID5.pdf" target="_blank" class="btn">Voir TP dossier partagé</a>
      <a href="Document /TpReseau/Création d'utilisateur sur GLPI.pdf" target="_blank" class="btn">création utilisateur GLPI</a>
      <a href="Document /TpReseau/Créatin ticket GLPI.pdf" target="_blank" class="btn">Voir Tp creation de ticket GLPI</a>
      <a href="Document /TpReseau/Copie de Création GPO.pdf" target="_blank" class="btn">Voir Tp GPO</a>
      <a href="Document /TpReseau/Ajout image GPO.pdf" target="_blank" class="btn">Voir Tp Ajout Image GPO</a>
      <a href="Document /TpReseau/blocage de l'acces au paneau de configuration.pdf" target="_blank" class="btn">Tp blocage acces GPO</a>
   


    `;
  }

  modalDetails.innerHTML = content;
  modal.classList.add("active"); // Affiche la modale
}

// Fonction pour fermer la modale
function closeModal() {
  modal.classList.remove("active"); // Cache la modale
}


// Stage 
document.addEventListener("DOMContentLoaded", function () {
  const stages = document.querySelectorAll(".stage-container");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
          } else {
              entry.target.classList.remove("visible");
          }
      });
  }, { threshold: 0.2 });

  stages.forEach(stage => observer.observe(stage));
});



// script du veille techno //

    function toggleAccordion(element) {
        const card = element.parentElement;
        const icon = element.querySelector(".icon");

        if (card.classList.contains("open")) {
            card.classList.remove("open");
            icon.textContent = "+";
        } else {
            card.classList.add("open");
            icon.textContent = "−";
        }
    }

    

/*animation de la page d'acceuil*/ 
   

    document.querySelector('a[href="#accueil"]').addEventListener('click', function() {
        const heroContent = document.querySelector('.hero-content');
        const heroImage = document.querySelector('.hero-image');

        // On supprime et réapplique l'animation pour la relancer
        heroContent.style.animation = 'none';
        heroImage.style.animation = 'none';

        // Force le navigateur à appliquer le "none"
        void heroContent.offsetWidth;
        void heroImage.offsetWidth;

        // On remet les animations
        heroContent.style.animation = 'fadeInLeft 1s ease-out forwards';
        heroImage.style.animation = 'fadeInRight 1s ease-out forwards';
    });






    /*stage*/

    document.addEventListener("DOMContentLoaded", function () {
        const card = document.querySelector('.cardd');

        // Position de départ : Un gros zoom (scale) et une légère rotation
        card.style.transform = "translateY(120px) scale(0.85) rotate(10deg)";
        card.style.transition = "transform 0.8s ease-out";

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animation : Effet de montée + zoom + retour à l'état normal
                    card.style.transform = "translateY(0) scale(1) rotate(0deg)";
                } else {
                    // Revenir à la position de départ
                    card.style.transform = "translateY(120px) scale(0.85) rotate(10deg)";
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(card);
    });
   /* acceuil*/

   document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    // Fonction pour réinitialiser les animations
    const resetAnimations = () => {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";
        heroImage.style.opacity = "0";
        heroImage.style.transform = "translateY(30px)";
    };

    // Initialement, on cache les éléments de la section Accueil
    resetAnimations();

    // Observer le défilement de la page
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animation : les éléments de la section Accueil apparaissent progressivement
                setTimeout(() => {
                    heroContent.style.opacity = "1";
                    heroContent.style.transform = "translateY(0)";
                    heroContent.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
                }, 200);

                setTimeout(() => {
                    heroImage.style.opacity = "1";
                    heroImage.style.transform = "translateY(0)";
                    heroImage.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
                }, 400); // Décalage entre le texte et l'image
            } else {
                // Réinitialiser l'animation lorsque la section quitte le viewport
                resetAnimations();
                // Optionnel: on peut rendre l'animation plus fluide lorsqu'elle sort également
                heroContent.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
                heroImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            }
        });
    }, {
        threshold: 0.2 // Lorsque la section devient visible à 20%
    });

    observer.observe(document.querySelector('#accueil'));
});