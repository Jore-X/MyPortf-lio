document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".sections"); // ajuste o seletor se necessário
  const navLinks = document.querySelectorAll(".navLinks"); // ajuste o seletor conforme seu HTML
  const navSideLinks = document.querySelectorAll(".nav-aside-links"); // ajuste o seletor conforme seu HTML
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const headerHeight = header ? header.offsetHeight : 0;
    const scrollPosition = window.scrollY + headerHeight;

    let activeSectionIndex = -1;

    for (const [i, section] of sections.entries()) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        break; // Agora sim interrompe o processamento
      }
    }

    // Se estiver no final da página (ajuda com seções curtas)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      activeSectionIndex = sections.length - 1;
    }

    
    // Adiciona a classe 'active' no link correspondente
    if (navLinks[activeSectionIndex]) {
      // Remove a classe 'active' de todos os links
      navLinks.forEach((link) => link.classList.remove("active"));
      navSideLinks.forEach((link) => link.classList.remove("active"));
      navLinks[activeSectionIndex].classList.add("active");
      navSideLinks[activeSectionIndex].classList.add("active");
    }
  });
});
