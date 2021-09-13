const openConsultPopup = () => {
    const btns = document.querySelectorAll(".button_wide"),
        popup = document.querySelector(".popup-consultation");
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            popup.style.visibility = "inherit";
        });
    })

};

export default openConsultPopup;