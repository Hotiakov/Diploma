const phoneDropdown = () =>{
    const accordWrapper = document.querySelector('.header-contacts__phone-number-accord'),
        dropBtn = document.querySelector('.header-contacts__arrow'),
        accordPhone = accordWrapper.querySelector('.header-contacts__phone-number');
    let flag = true;
    dropBtn.addEventListener('click', () => {
        if(flag){
            accordWrapper.style.top = "25px";
            accordPhone.style.opacity = 1;
            dropBtn.style.transform = "rotate(-180deg)";
        } else{
            accordWrapper.style.top = "0";
            accordPhone.style.opacity = 0;
            dropBtn.style.transform = "rotate(0deg)";
        }
        flag = !flag;
        
    });
}

export default phoneDropdown;
