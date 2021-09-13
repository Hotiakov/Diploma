const help = () => {
    const wrapper = document.querySelector('.formula>.wrapper_small');
    
    wrapper.addEventListener('mouseover', e => {
        let target = e.target.closest('.formula-item__icon');
        if(!target){
            return;
        }
        const popup = target.querySelector('.formula-item-popup');
        if(popup.getBoundingClientRect().top < 0){
            popup.classList.add('reverse');
        }
        const addOut = () => {
                popup.style.visibility = "hidden";
                popup.style.opacity = 0.1;
                popup.classList.remove('reverse');
                target.removeEventListener('mouseout', addOut);
        };
        popup.style.visibility = "inherit";
        popup.style.opacity = 1;
        target.addEventListener('mouseout', addOut);
    });
};


export default help;