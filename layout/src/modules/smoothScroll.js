const smoothScroll = () =>{
    const popupNav = document.querySelector('.popup-menu-nav'),
        footerBtn = document.querySelector('.button-footer'),
        menu = document.querySelector('.popup-dialog-menu');
    popupNav.addEventListener('click', function(e) {
        if(!e.target.classList.contains('menu-link')){
            return;
        }
        e.preventDefault();
        menu.classList.remove('active');
        menu.closest(".popup").style.visibility = "hidden";
        let href = e.target.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
    footerBtn.addEventListener('click', e => {
        e.preventDefault();
        const smoothLink = footerBtn.querySelector('a');
        const id = smoothLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

};

export default smoothScroll;
