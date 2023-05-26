// header-components
import TrainsManager from "./TrainsManager.js";
import headerSliderHandler from "./headerSliderHandler.js";
import menuHandler from "./menuHandler.js";
import dynamicTabHandler from "./dynamicTabHandler.js";
import ShowcaseHandler from "./showcaseHandler.js";
import featureListHandler from "./featureListHandler.js";

const dinamicTabContainers = [...document.querySelectorAll(".dinamic-tabs")];
const showcaseContainer = document.querySelector(".showcase__container");
const moreFeaturesList = document.querySelector(".more-features__list");
const footer = document.querySelector(".home-footer");
const headingWithSvgs = [...document.querySelectorAll(".heading-line")];
const cardsToHoverContainer = document.querySelector(".showcase__container");
const showcaseHandler = new ShowcaseHandler(showcaseContainer);

const manageHeader = function () {
  const cardContainers = document.querySelectorAll(".cards-container");
  const newTrainHtml = `       
   <div class="train">
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
    
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                </p>
              </div>
    
              <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
              </div>
            </div>
    
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
              
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                  </p>
                  </div>
                  
                  <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
                  </div>
                  </div>
                  
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
    
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                  </p>
                  </div>
    
                  <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
              </div>
            </div>
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
    
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                </p>
              </div>
    
              <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
              </div>
            </div>
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
    
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                </p>
              </div>
    
              <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
              </div>
            </div>
            <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
              </div>
    
              <div class="card__body">
                  <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                </p>
              </div>
    
              <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
                  </div>
                  </div>
                  <div class="card">
              <div class="card__head">
                <a href="#" class="card__share-btn card__link">Share it</a>
                <a href="#" class="card__completed-btn card__link">Completed</a>
                <a href="#" class="card__snooze-btn card__link">Snooze</a>
                <a href="#" class="card__more-btn card__link"
                ><i class="fa-solid fa-ellipsis-vertical"></i
                ></a>
                </div>
    
                <div class="card__body">
                <h3 class="heading__three">You Have A Mail!</h3>
                  <p class="card__description short-description margin-top--small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  obcaecati sed laboriosam eos architecto, error illum autem atque eius
                  numquam amet odio corporis sit explicabo ipsa quasi harum laborum
                  nisi.
                  </p>
                  </div>
                  
                  <div class="card__footer">
                  <a href="#" class="card__link card__ignore-btn">ignore</a>
                  <a href="#" class="card__link card__block-btn">block</a>
                  <a href="#" class="card__link card__reply-btn">reply</a>
              </div>
            </div>
          </div>`;

  const trainManager = new TrainsManager(
    [cardContainers[0], cardContainers[1]],
    newTrainHtml
  );

  headerSliderHandler.handel();
  menuHandler.handel();
  trainManager.manageTrain();
};

const footerButtonMovementHandler = function (footer) {
  const footerBtn = footer.querySelector(".oneline__submit-btn");
  const moveButtonOnMovement = function (event) {
    let xInPercent = (event.pageX / document.documentElement.clientWidth) * 100;
    let yInPercent = (event.pageY / document.body.clientHeight) * 1000 - 900;
    // X-coords of mouse cursor with button as its center
    const xWRTButton =
      xInPercent >= 70
        ? ((xInPercent - 70) / 50) * 20
        : ((xInPercent - 70) / 50) * 20;
    // Y-coords of mouse cursor with button as its center
    const yWRTButton =
      yInPercent >= 50
        ? ((yInPercent - 50) / 50) * 20
        : ((yInPercent - 50) / 50) * 20;

    footerBtn.style.transform = `translate(${xWRTButton}%, ${yWRTButton}%)`;
  }.bind(this);

  footer.addEventListener("mouseenter", (event) => {
    document.addEventListener("mousemove", moveButtonOnMovement);
  });

  footer.addEventListener(
    "mouseleave",
    ((event) => {
      footerBtn.style.transform = "";
      document.removeEventListener("mousemove", moveButtonOnMovement);
    }).bind(this)
  );
};

const HeadingAnimationOnScrollHandler = function (heading) {
  const svgsText = [...heading.querySelectorAll(".text-with-line")];
  if (svgsText.length < 1) return;

  const headingObserver = new IntersectionObserver(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        entry.target.innerHTML = entry.target.innerHTML;
      } else if (entry.boundingClientRect.y < 0) {
        observer.unobserve(svgsText[0]);
      }
    },
    {
      root: null,
    }
  );

  svgsText.forEach((highlight) => headingObserver.observe(highlight));
};

const headingAnimationOnHover = function (headingsContainer) {
  const cards = headingsContainer.querySelectorAll(".showcase__card");
  if (cards.length === 0) return;
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function (event) {
      const elementsToAnimate = this.querySelectorAll("span");
      elementsToAnimate.forEach((element) => {
        element.innerHTML = element.innerHTML;
      });
    });
  });
};

headingAnimationOnHover(cardsToHoverContainer);

manageHeader();

// dinamicTabContainers.forEach((dinamicTab) => dinamicTabHandler(dinamicTab));
dinamicTabContainers.forEach((dinamicTab) => new dynamicTabHandler(dinamicTab));

featureListHandler(moreFeaturesList);
footerButtonMovementHandler(footer);

headingWithSvgs.forEach((heading) => HeadingAnimationOnScrollHandler(heading));
