(() => {
    const refs = {
      openMenuBtn: document.querySelector(".page-header__menu-btn"),
      closeMenuBtn: document.querySelector(".mob-menu-svg"),
      menu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();