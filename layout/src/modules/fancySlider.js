class fancySlider{
    constructor({
        main, wrap, position = 0,
        prev, next, pagination,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = this.wrap.children;
        this.position = position;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.pagination = pagination;
    }

    prevSlide(){
        this.slides[this.position--].classList.remove("active");
        if(this.pagination){
            this.pagination.prev();
        }
    }

    nextSlide(){
        this.slides[++this.position].add("active");
        if(this.pagination){
            this.pagination.next();
        }
    }

    init(){
        this.main.addEventListener('click', e => {
            if(e.target === this.prev){
                this.prevSlide();
            } else if(e.target === this.next){
                this.nextSlide();
            }
        });
        this.pagination.activate();
    }
};

export default fancySlider;