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

  // Remove o Link href do botão
  cta_header_btn.removeAttribute("href");

  // Redireciona para voltar pro index Home devolta
  cta_header_btn.addEventListener("click", () => {
    window.location.href = "./index.html";
  });
});

// _______________________________________________________________________________
// IMPLEMENTAÇÃO DINÂMICA DOS PROJETOS

async function load_projects() {
  try {
    const response = await fetch("./projects.json");
    const data = await response.json();

    dynamic_cards(data);
  } catch (error) {
    console.log("Erro ao carregar arquivo JSON: ", error);
    return;
  }
}

async function dynamic_cards(data) {
  const container = document.querySelector(".projects-page-grid");
  const template_cards = document.getElementById("project_card_page");
  const fragment = document.createDocumentFragment();

  data.forEach((cards, index) => {
    const clone = template_cards.content.cloneNode(true);

    const title = clone.querySelector(".info > .title");
    title.textContent = cards.title;

    const img = clone.querySelector(".projects-img > img");
    img.src = cards.image;

    const technologies_box = clone.querySelector(".languages-block");

    cards.technologies.forEach((element) => {
      const new_technologie = document.createElement("span");

      new_technologie.textContent = element.name;
      new_technologie.classList.add(element.class);

      technologies_box.appendChild(new_technologie);
    });

    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
}

load_projects();
