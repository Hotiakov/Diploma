import fancySlider from "./fancySlider";

const activateDocuments = () => {
    const popup = document.querySelector('.popup-transparency'),
        documents = document.querySelector('.transparency-slider');
    const fancyDocuments = new fancySlider({
        main: ".popup-transparency-slider-wrap",
        wrap: ".popup-transparency-slider",
        pagination: "#transparency-popup-counter",
        prev: "#transparency_left",
        next: "#transparency_right",
    });
    fancyDocuments.init();
    documents.addEventListener('click', e => {
        if(e.target.closest(".transparency-item__img")){
            fancyDocuments.zeroSlider(e.target.closest(".transparency-item").className.replace(/[^\d]/g, '') - 1);
            popup.style.visibility = "inherit";
        }
    });

};

export default activateDocuments;