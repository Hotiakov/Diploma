import Carousel from './carousel';


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
        main: ".nav-wrap-repair",
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
                breakpoint: 1024,
                slidesToShow: 1,
                notSlider: false,
            }
        ]
    });
    repair.init();
};

export default addSliders;