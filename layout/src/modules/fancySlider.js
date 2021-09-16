class fancySlider{
    constructor({
        main, wrap, position = 0,
        prev, next, pagination,
    }) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = [...this.wrap.children];
        this.position = position;
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.pagination = this.main.querySelector(pagination);
        this.curSlide = this.pagination.querySelector('.slider-counter-content__current');
    }
    prevSlide(){
        this.slides[this.position].classList.remove("fade-active");
        if(this.position-- === 0)
            this.position = this.slides.length - 1;
        this.slides[this.position].classList.add("fade-active");
        if(this.pagination){
            this.curSlide.textContent = this.position + 1;
        }
    }

    nextSlide(){
        this.slides[this.position].classList.remove("fade-active");
        if(this.position++ ===  this.slides.length - 1)
            this.position = 0;
        console.log(this.position);
        this.slides[this.position].classList.add("fade-active");
        if(this.pagination){
            this.curSlide.textContent = this.position + 1;
        }
    }

    zeroSlider(position = 0){
        this.slides[this.position].classList.remove("fade-active");
        this.position = position;
        this.slides[this.position].classList.add("fade-active");
        if(this.pagination){
            this.curSlide.textContent = this.position + 1;
        }
        this.pagination.querySelector('.slider-counter-content__total').textContent = this.slides.length;
    }
    
    init(){
        const checkBtn = e => {
            if(this.wrap.classList.contains("active")){
                if(e.target.closest(`#${this.prev.id}`)){
                    this.prevSlide();
                } else if(e.target.closest(`#${this.next.id}`)){
                    this.nextSlide();
                }
            }
        }
        this.curSlide.textContent = 1;
        this.main.addEventListener('click', checkBtn);
        this.slides.forEach((slide) => {
            slide.style.opacity = 0;
        });
        this.slides[this.position].classList.add("fade-active");
        this.pagination.querySelector('.slider-counter-content__total').textContent = this.slides.length;
    }
};

export default fancySlider;