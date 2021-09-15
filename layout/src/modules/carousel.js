class Carousel {
    constructor({ main, wrap, position = 0, 
        next, prev, slidesToShow = 3, 
        infinity = false, hideArrow = false, 
        centered = false, responsive = [] }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slides = this.wrap.children;
        this.slidesToShow = slidesToShow;
        this.hideArrow = hideArrow;
        this.centered = centered;
        this.options = {
            position,
            widthSlide: Math.floor(100 / this.slidesToShow),
            infinity,
            maxPosition: this.slides.length - this.slidesToShow,
            minPosition: 0,
        };
        this.responsive = responsive;
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }

    init() {
        if (!this.main || !this.wrap) {
            console.warn('Слайдеру-карусель необходимо передать main и wrap!');
            return;
        }
        this.addGloClass();
        this.addStyle();
        this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.add('active');
        if(this.centered){
            this.options.minPosition = -1;
            this.options.maxPosition =  this.slides.length - this.slidesToShow + 1;
        } else{
            this.options.maxPosition = this.slides.length - this.slidesToShow,
            this.options.minPosition =  0;
        }
        this.wrap.style.transform = `translateX(${-this.options.position * this.options.widthSlide}%)`;
        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if(this.options.position === this.options.minPosition && this.hideArrow){
            this.prev.style.display = "none";
        }
        if (this.responsive.length > 0){
            this.responseInit();
        }
        
    }

    useResponse() {
        this.wrap.querySelector('.active').classList.remove('active');
        if(this.centered){
            this.options.minPosition = -1;
            this.options.maxPosition =  this.slides.length - this.slidesToShow + 1;
        } else{
            this.options.maxPosition = this.slides.length - this.slidesToShow,
            this.options.minPosition =  0;
        }
        this.options.position = this.options.minPosition;
        this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.add('active');
        this.wrap.style.transform = `translateX(${-this.options.position * this.options.widthSlide}%)`;
        if(this.options.position === this.options.minPosition && this.hideArrow){
            this.prev.style.display = "none";
            this.next.style.display = "flex";
        }
        this.addStyle();
    }

    addStyle() {
        let style = document.getElementById("sliderCarusel-style");
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }
            style.textContent = `
                .glo-slider {
                    overflow: hidden !important;
                }
                .glo-slider__wrap {
                    display: flex !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                }
                .glo-slider__item{
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    flex: 0 0 ${this.options.widthSlide}% !important;
                    
                }
                .glo-slider__prev,
                .glo-slider__next{
                    margin: 0 10px;
                    border: 20px solid transparent;
                    background: transparent;
                }
                .glo-slider__next{
                    border-left-color: #19b5fe;
                }
                .glo-slider__prev{
                    border-right-color: #19b5fe;
                }
                .glo-slider__prev:hover,
                .glo-slider__next:hover,
                .glo-slider__prev:focus,
                .glo-slider__next:focus{
                    background: transparent;
                    outline: transparent;
                }
            `;
        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > this.options.minPosition) {
            this.next.style.display = "flex";
            this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.remove('active');
            this.options.position--;
            this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.add('active');
            if (this.options.infinity && this.options.position < this.options.minPosition) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(${-this.options.position * this.options.widthSlide}%)`;
        }
        if(this.hideArrow && this.options.position === this.options.minPosition){
            this.prev.style.display = "none";
        }
    }
    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            this.prev.style.display = "flex";
            this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.remove('active');
            this.options.position++;
            this.slides[this.centered ? this.options.position + 1 : this.options.position].classList.add('active');
            if (this.options.infinity && this.options.position > this.options.maxPosition) {
                this.options.position = this.options.minPosition;
            }
            this.wrap.style.transform = `translateX(${-this.options.position * this.options.widthSlide}%)`;
        }
        if(this.hideArrow && this.options.position === this.options.maxPosition){
            this.next.style.display = "none";
        }
    }
    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

    }
    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const centeredDefault = this.centered;
        const allRespone = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allRespone);
        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allRespone.length; i++) {
                    if (widthWindow < allRespone[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        if(this.responsive[i].centered !== undefined)
                            this.centered = this.responsive[i].centered;
                        if(this.responsive[i].position !== undefined)
                            this.options.position = this.responsive[i].position;
                        this.useResponse();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.centered = centeredDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.useResponse();
            }
        };
        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}



export default Carousel;