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


};

export default addSliders;