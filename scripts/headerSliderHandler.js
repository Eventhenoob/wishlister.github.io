class handleHeaderSlider {
  static #homeHeaderLight = document.querySelector(".home-header__light");
  static #homeHeaderFilter = document.querySelector(".home-header__dark");

  #mouseMovementTracker = function (event) {
    let xInPercent =
      event.clientX / (document.documentElement.clientWidth / 100);

    handleHeaderSlider.#homeHeaderFilter.style.width = `${xInPercent}%`;
  };

  #createWhenSlideMoveObserver(functionToExecute) {
    const observerOptions = {
      rootMargin: "0px",
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(function (entires, observer) {
      entires.forEach((item) => {
        if (item.isIntersecting) {
          document.addEventListener("mousemove", functionToExecute);
        } else {
          document.removeEventListener("mousemove", functionToExecute);
        }
      });
    }, observerOptions);

    return observer;
  }

  handel() {
    const slideObserver = this.#createWhenSlideMoveObserver(
      this.#mouseMovementTracker
    );
    slideObserver.observe(handleHeaderSlider.#homeHeaderLight);
    return slideObserver;
  }
}

export default new handleHeaderSlider();
