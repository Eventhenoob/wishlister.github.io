class ShowcaseHandler {
  #currentScoll = Number.MAX_SAFE_INTEGER;
  #containerWidth1percent;
  #showcaseContainer;
  #showcaseContainerObserver;

  constructor(showcaseContainer) {
    this.#showcaseContainer = showcaseContainer;
    this.#containerWidth1percent = +(
      this.#showcaseContainer.getBoundingClientRect().width / 100
    );
    // initilize
    this.#showcaseContainerObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          document.addEventListener("scroll", this.#actionOnscroll);
        } else {
          document.removeEventListener("scroll", this.#actionOnscroll);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    this.#showcaseContainerObserver.observe(this.#showcaseContainer);
  }

  #actionOnscroll = function (event) {
    const containerRect = this.#showcaseContainer.getBoundingClientRect();
    const containerYaxis = containerRect.y;
    const toAddPercent =
      -(
        (document.documentElement.clientHeight - containerRect.y) /
        (containerRect.height + document.documentElement.clientHeight)
      ) * 0.5;

    if (this.#currentScoll > containerYaxis) {
      // scroll down

      this.#showcaseContainer.style.transform = `translateX(${
        toAddPercent * 100
      }%)`;
    } else {
      // scroll up

      this.#showcaseContainer.style.transform = `translateX(${
        toAddPercent * 100
      }%)`;
    }
    this.#currentScoll = containerYaxis;
  }.bind(this);
}

export default ShowcaseHandler;
