const about_card = document.querySelector(".about-card");
const about_overlay = document.querySelector(".about-overlay");
const about_overlay_p = document.querySelector(".about-overlay > p");
// ______________________________
const open_side_btn = document.querySelector(".open-btn");
const close_side_btn = document.querySelector(".close-btn");
const close_side_shadow = document.querySelector(".side-shadow-close");
const side_menu = document.querySelector(".side-menu");
const nav_side_links = document.querySelectorAll(".nav-aside-links > a");


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
