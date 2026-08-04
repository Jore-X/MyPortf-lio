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
const links = document.querySelectorAll("a");
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
// _______________________________

const carousel_LPs_itens = document.querySelectorAll(".carousel-LPs");
const btn_back_LPs = document.querySelector(".btn-back-card-LPs");
const btn_next_LPs = document.querySelector(".btn-next-card-LPs");

btn_back_LPs.addEventListener("click", () => {
  const index_active_LP = Array.from(carousel_LPs_itens).findIndex((el) =>
    el.classList.contains("active"),
  );
  if (index_active_LP > 0) {
    remove_all_classes(carousel_LPs_itens);

    carousel_LPs_itens[index_active_LP].classList.add("next-card");
    carousel_LPs_itens[index_active_LP].classList.remove("active");

    carousel_LPs_itens[index_active_LP - 1].classList.remove("back-card");
    if (index_active_LP - 1 > 0) {
      carousel_LPs_itens[index_active_LP - 2].classList.add("back-card");
    }
    carousel_LPs_itens[index_active_LP - 1].classList.add("active");
  }
});
btn_next_LPs.addEventListener("click", () => {
  const index_active_LP = Array.from(carousel_LPs_itens).findIndex((el) =>
    el.classList.contains("active"),
  );
  if (index_active_LP + 1 < carousel_LPs_itens.length) {
    remove_all_classes(carousel_LPs_itens);

    carousel_LPs_itens[index_active_LP].classList.add("back-card");
    carousel_LPs_itens[index_active_LP].classList.remove("active");

    carousel_LPs_itens[index_active_LP + 1].classList.remove("next-card");
    if (index_active_LP + 2 < carousel_LPs_itens.length) {
      carousel_LPs_itens[index_active_LP + 2].classList.add("next-card");
    }
    carousel_LPs_itens[index_active_LP + 1].classList.add("active");
  }
});
// _________________________________________

const carousel_IAs_itens = document.querySelectorAll(".carousel-IAs");
const btn_back_IAs = document.querySelector(".btn-back-card-IAs");
const btn_next_IAs = document.querySelector(".btn-next-card-IAs");

btn_back_IAs.addEventListener("click", () => {
  const index_active_LP = Array.from(carousel_IAs_itens).findIndex((el) =>
    el.classList.contains("active"),
  );
  if (index_active_LP > 0) {
    remove_all_classes(carousel_IAs_itens);

    carousel_IAs_itens[index_active_LP].classList.add("next-card");
    carousel_IAs_itens[index_active_LP].classList.remove("active");

    carousel_IAs_itens[index_active_LP - 1].classList.remove("back-card");
    if (index_active_LP - 1 > 0) {
      carousel_IAs_itens[index_active_LP - 2].classList.add("back-card");
    }
    carousel_IAs_itens[index_active_LP - 1].classList.add("active");
  }
});
btn_next_IAs.addEventListener("click", () => {
  const index_active_LP = Array.from(carousel_IAs_itens).findIndex((el) =>
    el.classList.contains("active"),
  );
  if (index_active_LP + 1 < carousel_IAs_itens.length) {
    remove_all_classes(carousel_IAs_itens);

    carousel_IAs_itens[index_active_LP].classList.add("back-card");
    carousel_IAs_itens[index_active_LP].classList.remove("active");

    carousel_IAs_itens[index_active_LP + 1].classList.remove("next-card");
    if (index_active_LP + 2 < carousel_IAs_itens.length) {
      carousel_IAs_itens[index_active_LP + 2].classList.add("next-card");
    }
    carousel_IAs_itens[index_active_LP + 1].classList.add("active");
  }
});
