class dynamicTabHandler {
  #tabNumber = 1;
  #optionLines;
  #options;
  #tabItems;
  #autoSlideTimer = null;
  #observerForAutoSlide;
  #dynamicTabContainer;
  #timeForChangeInSeconds = 5;

  constructor(dynamicTabContainer) {
    if (!this.#verifyDynamicTabContainer(dynamicTabContainer))
      throw new Error(
        "Invalid Argument Given!. given argument is not of type dynamic type container"
      );

    this.#dynamicTabContainer = dynamicTabContainer;

    this.#optionLines = [
      ...dynamicTabContainer.querySelectorAll(".tab__option-line"),
    ];
    this.#options = [...dynamicTabContainer.querySelectorAll(".tab__option")];
    this.#tabItems = [...dynamicTabContainer.querySelectorAll(".tab__item")];

    // Initilizing Observer for the autoSlide Functionality per 5 second.
    this.#observerForAutoSlide = new IntersectionObserver(
      this.#autoSlideObserverFunction,
      {
        root: null,
        threshold: 0.3,
      }
    );

    this.#observerForAutoSlide.observe(dynamicTabContainer);
    this.#dynamicTabContainer.addEventListener("click", this.#onClick);
  }

  #autoSlideObserverFunction = function ([entry], observer) {
    if (entry.isIntersecting) {
      let changeSlide = this.#changeSlide;
      let timeForChangeInSeconds = this.#timeForChangeInSeconds;
      if (this.#autoSlideTimer) clearInterval(this.#autoSlideTimer);
      this.#autoSlideTimer = setInterval(
        changeSlide,
        timeForChangeInSeconds * 1000
      );
    } else if (this.#autoSlideTimer) {
      clearInterval(this.#autoSlideTimer);
      // observer.unobserve(this.#dynamicTabContainer);
    }
  }.bind(this);

  #verifyDynamicTabContainer(dynamicTabContainer) {
    if (
      !(dynamicTabContainer instanceof HTMLElement) &&
      !dynamicTabContainer.classlist.contains("dinamic-tabs")
    )
      return false;
    return true;
  }

  #changeSlide = function () {
    let tabNumber = this.#tabNumber;

    this.#optionLines.forEach((optionLine) => {
      if (+optionLine.dataset.optionTab === +tabNumber)
        optionLine.classList.add("tab__option-line--active");
      else optionLine.classList.remove("tab__option-line--active");
    });

    this.#options.forEach((option) => {
      if (+option.dataset.optionTab === +tabNumber)
        option.classList.add("tab__option--active");
      else option.classList.remove("tab__option--active");
    });

    this.#tabItems.forEach((tabItem) => {
      if (+tabItem.dataset.itemTab === +tabNumber)
        tabItem.classList.remove("hidden");
      else tabItem.classList.add("hidden");
    });

    this.#tabNumber < 3 ? (this.#tabNumber += 1) : (this.#tabNumber = 1);
  }.bind(this);

  #onClick = function (event) {
    event.preventDefault();

    const target =
      event.target.closest(".tab__option-line") ||
      event.target.closest(".tab__option");

    if (!target) return;

    let changeTheSlide = this.#changeSlide;
    let timeForChangeInSeconds = this.#timeForChangeInSeconds;

    this.#tabNumber = +target.dataset.optionTab;
    if (this.#autoSlideTimer) clearInterval(this.#autoSlideTimer);

    this.#autoSlideTimer = setInterval(
      changeTheSlide,
      timeForChangeInSeconds * 1000
    );

    changeTheSlide();
  }.bind(this);
}

export default dynamicTabHandler;
