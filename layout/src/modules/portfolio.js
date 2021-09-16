import fancySlider from "./fancySlider";
const addPortfolio = () => {
    const fancyPortfolioMobile = new fancySlider({
        main: ".portfolio-slider-wrap",
        wrap: ".portfolio-slider-mobile",
        pagination: "#portfolio-counter",
        prev: "#portfolio-arrow-mobile_left",
        next: "#portfolio-arrow-mobile_right",
    })
    fancyPortfolioMobile.init();

    const portfolioTextes = document.querySelectorAll('.popup-portfolio-text');
    const fancyPortfolioPopup = new fancySlider({
        main: ".popup-dialog-portfolio",
        wrap: ".popup-portfolio-slider",
        pagination: "#popup-portfolio-counter",
        prev: "#popup_portfolio_left",
        next: "#popup_portfolio_right",
        useFunc: (i) => {
            portfolioTextes.forEach(item => item.style.display = "none");
            portfolioTextes[i].style.display = "flex";
        }
    });
    fancyPortfolioPopup.init();
    const portfolio = document.querySelector(".portfolio-slider-wrap"),
        popup = document.querySelector(".popup-portfolio");
    portfolio.addEventListener('click', e => {
        // console.log(e.target);
        const target = e.target.closest(".portfolio-slider__slide-frame");
        if(target){
            fancyPortfolioPopup.zeroSlider(e.target.className.replace(/[^\d]/g, '') - 1);
            popup.style.visibility = "inherit";
        }
    });
};

export default addPortfolio;