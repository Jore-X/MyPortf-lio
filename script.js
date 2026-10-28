// _______________________________________________________________________________
// IMPORTS
import "./scripts/component-scripts/header.js";
import "./scripts/actions/carousel.js";
import "./scripts/actions/toggleNav.js";
import "./scripts/actions/form_contact.js";
import "./scripts/animations/gsap.js";

// _______________________________________________________________________________

// _____________________________________________
// Função para remover o historico de links <a>
// ______________________________
const links = document.querySelectorAll(
  "a:not(.links-live, .links-repository, .links_contact)",
);
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const urlDestino = this.href;
    window.location.replace(urlDestino);
  });
});
// _____________________________________________________
// Bloco que configura o overlay "Ver mais" do card "about me"
const about_card = document.querySelector(".about-card");
const about_overlay = document.querySelector(".about-overlay");
const about_overlay_p = document.querySelector(".about-overlay > p");

about_overlay.addEventListener("click", () => {
  about_card.classList.toggle("active");
  if (about_card.classList.contains("active")) {
    about_overlay_p.textContent = "Ver menos";
  } else {
    about_overlay_p.textContent = "Ver mais";
  }
});
// __________________________________________________

// ________________________________________________________
// SCRIPT CARDS

