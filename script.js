// _______________________________________________________________________________
// IMPORTS
import "./scripts/component-scripts/header.js";
import "./scripts/toggleNav.js";
import "./scripts/form_contact.js";
import "./scripts/reveal.js";
import "./scripts/gsap.js";

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
// ________________________________________________________
// Carrosel Script

// _____________________
// FUNÇÃO PARA REMOVER AS CLASSES DOS CARDS
const remove_all_classes = (elements_list) => {
  for (let i = 0; i < elements_list.length; i++) {
    elements_list[i].classList.remove("active");
    elements_list[i].classList.remove("next-card");
    elements_list[i].classList.remove("back-card");
  }
};
// ______________________________________
// FUNÇÔES DE COMPORTAMENTO DOS BOTÔES DO CARROSSEL
const btn_back_function = (carousel_itens, btn_back, btn_next) => {
  btn_back.addEventListener("click", () => {
    const index_active = Array.from(carousel_itens).findIndex((el) =>
      el.classList.contains("active"),
    );
    if (index_active > 0) {
      remove_all_classes(carousel_itens);
      // reativa o botão de passar pro proximo card ao voltar para o card anterior
      btn_next.classList.remove("disable");

      // troca as classes do card atual antes de trocar os cards de lugar
      carousel_itens[index_active].classList.add("next-card");
      carousel_itens[index_active].classList.remove("active");

      // remove a classe do card que vai se tornar o card atual
      carousel_itens[index_active - 1].classList.remove("back-card");
      if (index_active - 1 > 0) {
        // se tiver mais cards atras, ele adiciona a classe nele para substituir a posição do antigo
        carousel_itens[index_active - 2].classList.add("back-card");
      } else {
        // se não tiver mais cards atras, ele torna o botão de voltar inutilizavel
        btn_back.classList.add("disable");
      }
      // e por fim, adiciona active no card referente para entrar como card atual
      carousel_itens[index_active - 1].classList.add("active");
    }
  });
};
// _______________________________
const btn_next_function = (carousel_itens, btn_back, btn_next) => {
  btn_next.addEventListener("click", () => {
    const index_active = Array.from(carousel_itens).findIndex((el) =>
      el.classList.contains("active"),
    );
    if (index_active + 1 < carousel_itens.length) {
      remove_all_classes(carousel_itens);
      // reativa o botão de voltar para o card ao ir para o proximo card
      btn_back.classList.remove("disable");

      // troca as classes do card atual antes de trocar os cards de lugar
      carousel_itens[index_active].classList.add("back-card");
      carousel_itens[index_active].classList.remove("active");

      // remove a classe do card que vai se tornar o card atual
      carousel_itens[index_active + 1].classList.remove("next-card");
      if (index_active + 2 < carousel_itens.length) {
        // se tiver mais cards na frente, ele adiciona a classe nele para substituir a posição do antigo
        carousel_itens[index_active + 2].classList.add("next-card");
      } else {
        // se não tiver mais cards na frente, ele torna o botão de proximo inutilizavel
        btn_next.classList.add("disable");
      }
      // e por fim, adiciona active no card referente para entrar como card atual
      carousel_itens[index_active + 1].classList.add("active");
    }
  });
};
// _____________________________________________________________________________
// Bloco de codigo usado para implementar a função de botões
// individualmente para cada carrossel
const carousels_list = [".carousel-LPs", ".carousel-IAs"];
const btns_back_list = [".btn-back-card-LPs", ".btn-back-card-IAs"];
const btns_next_list = [".btn-next-card-LPs", ".btn-next-card-IAs"];
// ___
for (let i = 0; i < carousels_list.length; i++) {
  const carousel_itens = document.querySelectorAll(carousels_list[i]);
  const btn_back = document.querySelector(btns_back_list[i]);
  const btn_next = document.querySelector(btns_next_list[i]);

  // classes iniciais
  document.querySelectorAll(carousels_list[i])[0].classList.add("active");
  document.querySelectorAll(carousels_list[i])[1].classList.add("next-card");
  // _____________________

  // ______________________
  // funções que configura o event click para cada grupo de cards
  btn_back_function(carousel_itens, btn_back, btn_next);
  btn_next_function(carousel_itens, btn_back, btn_next);
  // ______________________
}
// _______________________________________________________________________________
// CARREGAR JSON E GERAR CARDS DINAMICAMENTE
import { load_projects } from "./projects.js";

console.log(await load_projects());
// _______________________________________
