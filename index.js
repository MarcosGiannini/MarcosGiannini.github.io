const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
const projectsContainer = document.querySelector(".projects-container");

let scrollAmount = 0;
const cardWidth = 250 + 20; // Ancho de la tarjeta + margen

prevButton.addEventListener("click", () => {
    scrollAmount -= cardWidth;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    projectsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener("click", () => {
    const maxScroll = projectsContainer.scrollWidth - projectsContainer.clientWidth;
    scrollAmount += cardWidth;
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
    }
    projectsContainer.style.transform = `translateX(-${scrollAmount}px)`;
});
