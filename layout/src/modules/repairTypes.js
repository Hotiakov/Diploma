import fancySlider from './fancySlider';
const repairTypes = () =>{
    const navList = document.querySelector('.nav-list-repair'),
        sliders = document.querySelector('.repair-types-slider'),
        repairs = document.querySelectorAll('.types-repair');

    const repairSliders = [];

    repairs.forEach(item => {
        const fancyRepair = new fancySlider({
            main: ".repair-types-slider-wrap",
            wrap: `.${item.classList[0]}`,
            prev: "#repair-types-arrow_left",
            next: "#repair-types-arrow_right",
            pagination: ".slider-counter-content"
        });
        repairSliders.push(fancyRepair);
        fancyRepair.init();
    });
    navList.addEventListener('click', e => {
        const curActiveBtn = navList.querySelector('.actives');
        let curActiveSlide = sliders.querySelector('.active');
        if(curActiveBtn){
            curActiveBtn.classList.remove('actives');
        }
        if(curActiveSlide){
            curActiveSlide.classList.remove('active');
        }
        e.target.classList.add('actives');
        const numberOfSlide = e.target.className.replace(/[^\d]/g, '');
        curActiveSlide = sliders.querySelector('.types-repair' + numberOfSlide);
        curActiveSlide.classList.add('active');
        repairSliders[numberOfSlide-1].zeroSlider();
    });
}    

export default repairTypes;