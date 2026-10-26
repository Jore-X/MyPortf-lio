fetch("components/header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao carregar o header.");
    }
    return response.text();
  })
  .then((html) => {
    document.querySelector("#header").innerHTML = html;

    // ______________________________

    fetch("components/aside.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar o aside.");
        }
        return response.text();
      })
      .then((html) => {
        document.querySelector("#aside").innerHTML = html;

        // ____________________________________________
        const open_side_btn = document.querySelector(".open-btn");
        const close_side_btn = document.querySelector(".close-btn");
        const close_side_shadow = document.querySelector(".side-shadow-close");
        const side_menu = document.querySelector(".side-menu");
        const nav_side_links = document.querySelectorAll(
          ".nav-aside-links > a",
        );

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
        
        document.dispatchEvent(new Event("headerLoaded"));
      });
  })
  .catch((error) => {
    console.error(error);
  });
