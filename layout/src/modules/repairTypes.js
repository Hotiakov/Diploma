const repairTypes = () =>{
    const navList = document.querySelector('.nav-list-repair'),
        sliders = document.querySelector('.repair-types-slider');
    navList.addEventListener('click', e => {
        const curActiveBtn = navList.querySelector('.actives'),
            curActiveSlide = sliders.querySelector('.active');
        if(curActiveBtn){
            curActiveBtn.classList.remove('actives');
        }
        if(curActiveSlide){
            curActiveSlide.classList.remove('active');
        }
        e.target.classList.add('actives');
        const numberOfSlide = e.target.className.replace(/[^\d]/g, '');
        sliders.querySelector('.types-repair' + numberOfSlide).classList.add('active');
    });
}    

export default repairTypes;