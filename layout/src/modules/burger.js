const burger = () =>{
    const burberBtn = document.querySelector(".menu__icon"),
        menu = document.querySelector(".popup-dialog-menu"),
        closeBtn = menu.querySelector(".close-menu");

    burberBtn.addEventListener('click', () => {
        menu.classList.add('active');
    });
    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
    });    
}

export default burger;
