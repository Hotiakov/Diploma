import phoneDropdown from './modules/phoneDropdown';
import burger from './modules/burger';
import smoothScroll from './modules/smoothScroll';
import openRepaitType from './modules/openRepaitType';

import openPrivacy from './modules/privacy';

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


    //политика конфедициальности
    openPrivacy();

});
