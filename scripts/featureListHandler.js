export default function (featureListContainer = []) {
  const features = [
    ...featureListContainer.querySelectorAll(".more-features__feature"),
  ];

  featureListContainer.addEventListener("mouseover", (event) => {
    if (!event.target.classList.contains("heading--four")) return;
    const targetParent = event.target.parentElement;
    features.forEach(
      ((item) => {
        if (item === targetParent) {
          item.querySelector(".more-features__pera").style.opacity = "1";
          event.target.style.color = "#ff2d4c";
        } else item.querySelector(".more-features__pera").style.opacity = "0";
      }).bind(this)
    );
  });

  featureListContainer.addEventListener("mouseout", (event) => {
    if (!event.target.classList.contains("heading--four")) return;
    const pera = event.target.parentElement.querySelector(
      ".more-features__pera"
    );
    event.target.style.color = "";
    if (!pera) return;
    pera.style.opacity = "0";
  });
}
