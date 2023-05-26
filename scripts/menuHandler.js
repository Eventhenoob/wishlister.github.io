class MenuDisplayHandler {
  #menuBtn = document.querySelector(".btn__toggle-menu");
  static #menuList = document.querySelector(".main-menu__list");

  #handleFunction = function (event) {
    event.preventDefault();
    MenuDisplayHandler.#menuList.classList.toggle("hidden");
    const menuLogo = this.querySelector(".btn__toggle-icon");
    if (menuLogo && menuLogo.classList.contains("fa-solid")) {
      menuLogo.classList.toggle("fa-chevron-down");
      menuLogo.classList.toggle("fa-chevron-up");
    }
  };

  handel() {
    this.#menuBtn.addEventListener("click", this.#handleFunction);
  }
}

export default new MenuDisplayHandler();
