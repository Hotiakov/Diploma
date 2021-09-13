const accordion = () => {
    const accord = document.querySelector('.accordion');

    accord.addEventListener('click', e =>{
        console.log(e.target);
        const target = e.target.closest(".title_block");
        if(!target){
            return;
        }
        if(target.classList.contains('msg-active')){
            target.classList.remove('msg-active');
        } else{
            const active = accord.querySelector('.msg-active');
            if(active) active.classList.remove('msg-active');
            target.classList.add('msg-active');
        }
    })


};


export default accordion;