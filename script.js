const about_card = document.querySelector(".about-card");
const about_overlay = document.querySelector(".about-overlay");
const about_overlay_p = document.querySelector(".about-overlay > p");
// ______________________________
const open_side_btn = document.querySelector(".open-btn");
const close_side_btn = document.querySelector(".close-btn");
const close_side_shadow = document.querySelector(".side-shadow-close");
const side_menu = document.querySelector(".side-menu");
const nav_side_links = document.querySelectorAll(".nav-aside-links > a");
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

about_overlay.addEventListener("click", () => {
  about_card.classList.toggle("active");
  if (about_card.classList.contains("active")) {
    about_overlay.textContent = "Ver menos";
  } else {
    about_overlay.textContent = "Ver mais";
  }
});
// __________________________________________________

open_side_btn.addEventListener("click", () => {
  side_menu.classList.add("active");
  close_side_shadow.classList.add("active");
});
close_side_btn.addEventListener("click", () => {
  side_menu.classList.remove("active");
  close_side_shadow.classList.remove("active");
});
close_side_shadow.addEventListener("click", () => {
  side_menu.classList.remove("active");
  close_side_shadow.classList.remove("active");
});
nav_side_links.forEach((links) => {
  links.addEventListener("click", () => {
    side_menu.classList.remove("active");
    close_side_shadow.classList.remove("active");
  });
});

// ________________________________________________________
// Carrosel Script

// _____________________
// FUNÇÃO PARA REMOVER AS CLASSES
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
      btn_next.classList.remove("disable");

      carousel_itens[index_active].classList.add("next-card");
      carousel_itens[index_active].classList.remove("active");

      carousel_itens[index_active - 1].classList.remove("back-card");
      if (index_active - 1 > 0) {
        carousel_itens[index_active - 2].classList.add("back-card");
      } else {
        btn_back.classList.add("disable");
      }
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
      btn_back.classList.remove("disable");

      carousel_itens[index_active].classList.add("back-card");
      carousel_itens[index_active].classList.remove("active");

      carousel_itens[index_active + 1].classList.remove("next-card");
      if (index_active + 2 < carousel_itens.length) {
        carousel_itens[index_active + 2].classList.add("next-card");
      } else {
        btn_next.classList.add("disable");
      }
      carousel_itens[index_active + 1].classList.add("active");
    }
  });
};
// _______________________________
const carousels_list = [".carousel-LPs", ".carousel-IAs", ".carousel-others"];
const btns_back_list = [
  ".btn-back-card-LPs",
  ".btn-back-card-IAs",
  ".btn-back-card-others",
];
const btns_next_list = [
  ".btn-next-card-LPs",
  ".btn-next-card-IAs",
  ".btn-next-card-others",
];

for (let i = 0; i < carousels_list.length; i++) {
  const carousel_itens = document.querySelectorAll(carousels_list[i]);
  const btn_back = document.querySelector(btns_back_list[i]);
  const btn_next = document.querySelector(btns_next_list[i]);

  btn_back_function(carousel_itens, btn_back, btn_next);
  btn_next_function(carousel_itens, btn_back, btn_next);
}
// _______________________________
