import phoneDropdown from './modules/phoneDropdown';
import burger from './modules/burger';
import smoothScroll from './modules/smoothScroll';
import openRepaitType from './modules/openRepaitType';

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    //выпадающее меню телефона
    phoneDropdown();
    //Бургер-меню
    burger();
    //плавный скролл
    smoothScroll();
    //Полный список услуг и цен
    openRepaitType();

});
