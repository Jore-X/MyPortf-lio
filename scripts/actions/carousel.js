// ________________________________________________________
// Carrosel Script
// _______________________________________________________________________________
// CARREGAR JSON E GERAR CARDS DINAMICAMENTE
import { load_projects } from "../pages/projects.js";

const data = await load_projects();

const load_carousel = (carousel, container, group) => {

    // pega o template escrito no HTML
  const template_card = document.getElementById("card_carrousel_template");
//   cria um fragmento temporario na memoria
  const fragment = document.createDocumentFragment();

  
  carousel.forEach((card) => {
    // clona o template
    const clone = template_card.content.cloneNode(true);

    // adiciona a classe ao elemento pai
    clone.querySelector(".projects-divs").classList.add(group);

    // aponta o caminho da imagem pelo json
    const img = clone.querySelector(".imgCards");
    img.src = card?.image;

    // pega o titulo do projeto no json
    const title = clone.querySelector(".caption-cards-title");
    title.textContent = card?.title;

    const technologies_box = clone.querySelector(".caption-languages-div");

    card?.technologies.forEach((technologie) => {
        // cria o span que mostra cada tecnologia usada
      const newtechnologie = document.createElement("span");

      newtechnologie.textContent = technologie?.name;
      newtechnologie.style.color = technologie?.colors?.color;
      newtechnologie.style.borderColor = technologie?.colors?.color;
      newtechnologie.style.background = technologie?.colors?.background;

      technologies_box.appendChild(newtechnologie);
    });

    const details = clone.querySelector(".info-cards");
    details.textContent = card?.details;

    // adiciona o link do site ao vivo
    const link_live = clone.querySelector(".links-live");
    link_live.href = card?.links?.live;

    // adiciona o link do repositorio do site
    const link_github = clone.querySelector(".links-repository");
    link_github.href = card?.links?.github;

    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
};
// Filtrando apenas os que são referentes
const carousel_primary = data.filter(
  (element) =>
    element?.category == "landing page" ||
    element?.category == "site comercial",
);
const carousel_secundary = data.filter(
  (element) => element?.category == "ferramenta web",
);
const carousels_data = [
  {
    carousel: carousel_primary,
    container: ".carousels-box.cL > .carousel",
    group: "carousel-LPs",
  },
  {
    carousel: carousel_secundary,
    container: ".carousels-box.cR > .carousel",
    group: "carousel-IAs",
  },
];

for (let i = 0; i < carousels_data.length; i++) {
  load_carousel(
    carousels_data[i].carousel,
    document.querySelector(carousels_data[i].container),
    carousels_data[i].group,
  );
}
// _______________________________________

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
