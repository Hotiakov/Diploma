import Carousel from './carousel';
// import fancySlider from './fancySlider';

const addSliders = () => {
    //слайдер с отзывами
    const feedback = new Carousel({
        main: ".reviews-slider-wrap",
        wrap: ".reviews-slider",
        prev: "#reviews-arrow_left",
        next: "#reviews-arrow_right",
        slidesToShow: 1,
        id: "reviews-style",
        hideArrow: true,
    });
    feedback.init();

    const formula = new Carousel({
        main: ".formula-slider-wrap",
        wrap: ".formula-slider",
        prev: "#formula-arrow_left",
        next: "#formula-arrow_right",
        hideArrow: true,
        id: "formula-style",
        centered: true,
        responsive: [
            {
                breakpoint: 768,
                slidesToShow: 1,
                centered: false,
            },
        ]
    });
    formula.init();

    const repair = new Carousel({
        main: ".nav-wrap-repair-slider",
        wrap: ".nav-list-popup-repair",
        prev: "#nav-arrow-popup-repair_left",
        next: "#nav-arrow-popup-repair_right",
        slidesToShow: 1,
        notSlider: true,
        hideArrow: true,
        id: "repair-style",
        needClick: true,
        responsive: [
            {
                breakpoint: 1025,
                slidesToShow: 1,
                notSlider: false,
            }
        ]
    });
    repair.init();
    const repairBase = new Carousel({
        main: ".nav-wrap-repair-simple",
        wrap: ".nav-list-repair",
        hideArrow: true,
        id: "repair-style-base",
        notSlider: true,
        slidesToShow: 3,
        next: '#nav-arrow-repair-right_base',
        prev: '#nav-arrow-repair-left_base',
        responsive: [
            {
                breakpoint: 1024,
                slidesToShow: 3,
                notSlider: false,
            },
            {
                breakpoint: 768,
                slidesToShow: 2,
                notSlider: false,
            },
            {
                breakpoint: 575,
                slidesToShow: 1,
                notSlider: false,
            },
        ]
    });
    repairBase.init();

    const servises = new Carousel({
        main: ".services-slider__wrapper",
        wrap: ".services-slider",
        slidesToShow: 1,
        id: "services-style",
        notSlider: true,
        hideArrow: true,
        responsive: [
            {
                breakpoint: 575,
                slidesToShow: 1,
                notSlider: false,
            }
        ]
    });
    servises.init();

    const transparency = new Carousel({
        main: ".transparency-slider-wrap",
        wrap: ".transparency-slider",
        prev: "#transparency-arrow_left",
        next: "#transparency-arrow_right",
        id: "transparency-style",
        notSlider: true,
        slidesToShow: 1,
        infinity: true,
        responsive: [
            {
                breakpoint: 1090,
                slidesToShow: 1,
                notSlider: false,
                infinity: true,
            }
        ]
    });
    transparency.init();
    const portfolio = new Carousel({
        main: ".portfolio-slider-wrapper",
        wrap: ".portfolio-slider",
        prev: "#portfolio-arrow_left",
        next: "#portfolio-arrow_right",
        id: "portfolio-style",
        notSlider: false,
        slidesToShow: 3,
        hideArrow: true,
        responsive: [
            {
                breakpoint: 1025,
                notSlider: false,
                slidesToShow: 2,
            },
            {
                breakpoint: 900,
                notSlider: false,
                slidesToShow: 1,
            },
            {
                breakpoint: 575,
                notSlider: true,
                slidesToShow: 1
            }

        ],
    });
    portfolio.init();

    const fancyRepair = () => {

    }
};

export default addSliders;