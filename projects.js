// _______________________________________________________________________________
// IMPORTS
import "./scripts/component-scripts/header.js";
// _______________________________________________________________________________

document.addEventListener("headerLoaded", () => {
  const nav_links = document.querySelectorAll(".navLinks, .nav-aside-links");

  // Esconder links de navegação na pagina de projetos
  nav_links.forEach((element) => {
    element.style.display = "none";
  });
  //_________________________________________

  // Modificar o botão e sua referencia
  document.querySelector(".cta-header-btn > span").textContent = "Voltar";
  const cta_header_btn = document.querySelector(".cta-header-btn");

  cta_header_btn.removeAttribute("href");

  cta_header_btn.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});
