const burger = () =>{
    const burberBtn = document.querySelector(".menu__icon"),
        menu = document.querySelector(".popup-dialog-menu"),
        closeBtn = menu.querySelectorAll(".close-menu"),
        popupMenu = document.querySelector(".popup-menu");

    burberBtn.addEventListener('click', () => {
        popupMenu.style.visibility = "inherit";
        menu.classList.add('active');
    });
    closeBtn.forEach(btn => btn.addEventListener('click', () => {
        menu.classList.remove('active');
    }));
    popupMenu.addEventListener('click', e => {
        if(e.target === popupMenu){
            menu.classList.remove('active');
        }
    })    
}

export default burger;
