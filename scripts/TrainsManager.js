class TrainsManager {
  #trainTemplate;
  #trainContainers;
  #currentTransformCurrent = 0;
  #currentTransformNext = 0;
  #observedTrain;
  #currentTrains = [];
  #nextTrains = [];
  #timers = [];
  #trainObserver;
  #previousTimeOfObserver = 0;

  constructor(trainContainers, trainTemplate) {
    this.#trainTemplate = trainTemplate;
    this.#trainContainers = [...trainContainers];

    this.#currentTrains.push(this.#trainContainers[0].querySelector(".train"));
    this.#currentTrains.push(this.#trainContainers[1].querySelector(".train"));
    this.#observedTrain = this.#trainContainers[0].querySelector(".train");

    this.#nextTrains.push(
      this.#trainContainers[0].querySelectorAll(".train")[1]
    );
    this.#nextTrains.push(
      this.#trainContainers[1].querySelectorAll(".train")[1]
    );

    this.#trainObserver = new IntersectionObserver(
      function ([entry], observer) {
        if (!entry.isIntersecting && entry.boundingClientRect.x < 0) {
          observer.unobserve(this.#observedTrain);

          // removing current trains from html.
          this.#currentTrains.shift().remove();
          this.#currentTrains.shift().remove();

          // clearing old timer for the cleared trains!
          clearInterval(this.#timers.shift());

          this.#trainContainers.forEach((trainContainer) =>
            trainContainer.insertAdjacentHTML("beforeend", this.#trainTemplate)
          );

          //////////////***********  EXP  ***********//////////////////

          // this.#currentTrains.push(this.#nextTrains.shift());
          // this.#currentTrains.push(this.#nextTrains.shift());

          this.#currentTrains = this.#nextTrains;
          this.#currentTransformCurrent = this.#currentTransformNext;

          // adding new trains set to nextTrains.
          // this.#nextTrains.push(
          //   this.#trainContainers[0].querySelectorAll(".train")[1]
          // );
          // this.#nextTrains.push(
          //   this.#trainContainers[1].querySelectorAll(".train")[1]
          // );

          this.#nextTrains = [
            this.#trainContainers[0].querySelectorAll(".train")[1],
            this.#trainContainers[1].querySelectorAll(".train")[1],
          ];

          this.#currentTransformNext = 0;
          this.#observedTrain =
            this.#trainContainers[0].querySelector(".train");
          //   starting the timer to run trains.
          this.#timers.push(
            setInterval(this.#runTrain, 1, this.#nextTrains[0])
          );
          observer.observe(this.#observedTrain);
        }
      }.bind(this),
      {
        root: null,
        threshold: 0,
      }
    );
  }

  #trainMoveCurrent = ((currentTrain) => {
    currentTrain.style.transform = `translateX(${
      this.#currentTransformCurrent - 0.02
    }%)`;
    this.#currentTransformCurrent -= 0.02;
  }).bind(this);

  #trainMoveNext = ((nextTrain) => {
    nextTrain.style.transform = `translateX(${
      this.#currentTransformNext - 0.02
    }%)`;
    this.#currentTransformNext -= 0.02;
  }).bind(this);

  #runTrain = function (train) {
    if (this.#currentTrains[0] == train) {
      this.#currentTrains.forEach(this.#trainMoveCurrent);
    }

    if (this.#nextTrains[0] == train) {
      this.#nextTrains.forEach(this.#trainMoveNext);
    }
  }.bind(this);

  startTrains() {
    this.stopTrains();
    this.#timers.push(setInterval(this.#runTrain, 1, this.#currentTrains[0]));

    this.#timers.push(setInterval(this.#runTrain, 1, this.#nextTrains[0]));

    this.#trainObserver.observe(this.#observedTrain);
  }

  stopTrains() {
    this.#timers.forEach((timer) => {
      clearInterval(timer);
    });
    this.#timers = [];
    this.#trainObserver.unobserve(this.#observedTrain);
  }

  manageTrain() {
    const trainSectionObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) this.startTrains();
        else this.stopTrains();
      },
      { root: null, rootMargin: "100px", threshold: 0 }
    );
    const trainContainerSection = this.#trainContainers[0];
    trainSectionObserver.observe(trainContainerSection);
  }
}

export default TrainsManager;
