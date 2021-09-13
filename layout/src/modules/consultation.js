const openConsultPopup = () => {
    const btns = document.querySelectorAll(".button_wide"),
        popup = document.querySelector(".popup-consultation"),
        closeBtn = popup.querySelector(".popup-close");
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            popup.style.visibility = "inherit";
        });
    })


};

export default openConsultPopup;