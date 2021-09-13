const closePopup = () => {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        const closeBtn = popup.querySelector('close');
        closeBtn.addEventListener('click', () => {
            popup.style.visibility = "hidden";
        });
        popup.addEventListener('click', e => {
            if(e.target === popup){
                popup.style.visibility = "hidden";
            }
        });

    })
};

export default closePopup;