const openPrivacy = () => {
    const popupPrivacy = document.querySelector('.popup-privacy'),
        closeBtn = popupPrivacy.querySelector('.close'),
        links = document.querySelectorAll('.link-privacy');
    links.forEach(link => {
        link.addEventListener('click', () => {
            popupPrivacy.style.visibility = "inherit";
        });
    });
    closeBtn.addEventListener('click', () => {popupPrivacy.style.visibility = "hidden";});
    popupPrivacy.addEventListener('click', e => {
        if(e.target === popupPrivacy){
            popupPrivacy.style.visibility = "hidden";
        }
    });
};

export default openPrivacy;