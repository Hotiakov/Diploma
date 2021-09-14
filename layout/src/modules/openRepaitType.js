const openRepaitType = () => {
    const popup = document.querySelector('.popup-repair-types'),
        links = document.querySelectorAll('.link-list'),
        menu = document.querySelector(".popup-dialog-menu");

    links.forEach(link => {
        link.addEventListener('click', e => {
            console.log(e.target);
            menu.classList.remove('active');
            document.querySelector('.popup-menu').style.visibility = "hidden";
            popup.style.visibility = "inherit";
        });
    });
};

export default openRepaitType;