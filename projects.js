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

  // troca o Link href do botão
  cta_header_btn.href = "./index.html";
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

  data.forEach((cards) => {
    // Cria um clone do Template de Card criado no HTML
    const clone = template_cards.content.cloneNode(true);

    const title = clone.querySelector(".info > .title");
    title.textContent = cards?.title;

    const img = clone.querySelector(".projects-img > img");
    img.src = cards?.image;

    const technologies_box = clone.querySelector(".languages-block");

    // ______________________________________________
    cards?.technologies.forEach((element) => {
      // Cria o span para mostrar as tecnologias usadas
      const new_technologie = document.createElement("span");

      // Usa os dados do JSON para definir as propriedades do elemento
      new_technologie.textContent = element?.name;
      new_technologie.style.backgroundColor = element?.colors[0]?.background;
      new_technologie.style.color = element?.colors[1]?.color;
      new_technologie.style.borderColor = element?.colors[1]?.color;
      // _______________________________________________________________

      technologies_box.appendChild(new_technologie);
    });
    // ______________________________________________
    const details_p = clone.querySelector(".details-p");
    const details_link_live = clone.querySelector(".details-btns > .live");
    const details_link_github = clone.querySelector(".details-btns > .github");

    details_p.textContent = cards?.details;
    details_link_live.href = cards?.links?.live;
    details_link_github.href = cards?.links?.github;

    // ______________________________________________________________
    // Para cuidar do estado de ativo apos clicar no card
    const details_box = clone.querySelector(".details-info");
    const projects_card = clone.querySelector(".projects-box-card");
    const expand_btn = clone.querySelector(".click-expand");
    // const expand_btn_span = clone.querySelector(".click-expand > span");

    expand_btn.addEventListener("click", () => {
      if (projects_card.classList.contains("active")) {
        details_box.classList.remove("active");
        projects_card.classList.remove("active");

        // expand_btn_span.textContent = "Clique aqui para expandir";
      } else {
        // ________________________________________________
        // para remover a classe de todos ao expandir outro
        const all_details_box = document.querySelectorAll(".details-info");
        const all_projects_card =
          document.querySelectorAll(".projects-box-card");
        // ________________________________
        for (let i = 0; i < all_projects_card.length; i++) {
          all_details_box[i].classList.remove("active");
          all_projects_card[i].classList.remove("active");
        }
        
        details_box.classList.add("active");
        projects_card.classList.add("active");
        
        // expand_btn_span.textContent = "Clique aqui para minimizar";
      }
      // ______________________________________________________________
    });

    fragment.appendChild(clone);
  });
  container.appendChild(fragment);
}

load_projects();
