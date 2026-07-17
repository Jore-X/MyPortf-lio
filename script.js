// const overlay_about_btn = document.querySelector(".overlay-action");
const about_card = document.querySelector(".about-card");
const about_overlay = document.querySelector(".about-overlay");
const about_overlay_p = document.querySelector(".about-overlay > p");

about_overlay.addEventListener("click", () => {
  about_card.classList.toggle("active");
  if (about_card.classList.contains("active")) {
    about_overlay.textContent = "Ver menos";
  } else {
    about_overlay.textContent = "Ver mais";
  }
});
