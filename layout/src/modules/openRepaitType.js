const openRepaitType = () => {
    const popup = document.querySelector('.popup-repair-types'),
        links = document.querySelectorAll('.link-list'),
        menu = document.querySelector(".popup-dialog-menu"),
        closeBtn = popup.querySelector('.close');

    links.forEach(link => {
        link.addEventListener('click', e => {
            console.log(e.target);
            menu.classList.remove('active');
            document.querySelector('.popup-menu').style.visibility = "hidden";
            popup.style.visibility = "inherit";
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.visibility = "hidden";
    });

    popup.addEventListener('click', e => {
        if(e.target === popup){
            popup.style.visibility = "hidden";
        }
    });


};

export default openRepaitType;