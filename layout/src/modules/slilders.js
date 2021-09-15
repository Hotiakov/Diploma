import Carousel from './carousel';


const addSliders = () => {
    //слайдер с отзывами
    const feedback = new Carousel({
        main: ".reviews-slider-wrap",
        wrap: ".reviews-slider",
        prev: "#reviews-arrow_left",
        next: "#reviews-arrow_right",
        slidesToShow: 1,
        hideArrow: true,
    });
    feedback.init();

    const formula = new Carousel({
        main: ".formula-slider-wrap",
        wrap: ".formula-slider",
        prev: "#formula-arrow_left",
        next: "#formula-arrow_right",
        hideArrow: true,
        position: -1,
        centered: true,
        responsive: [
            {
                breakpoint: 768,
                slidesToShow: 1,
                position: 0,
                centered: false,
            },
        ]
    });
    formula.init();
};

export default addSliders;