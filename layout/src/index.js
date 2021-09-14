import phoneDropdown from './modules/phoneDropdown';
import burger from './modules/burger';
import smoothScroll from './modules/smoothScroll';
import openRepaitType from './modules/openRepaitType';
import phoneMask from './modules/phoneMask';
import openPrivacy from './modules/privacy';
import help from './modules/help';
import accordion from './modules/FAQ';
import popupClose from './modules/popupClose';
import openConsultPopup from './modules/consultation';

import makeRequest from './modules/makeRequest';

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
    //Маска номера телефона
    phoneMask("[name='phone']");
    //политика конфедициальности
    openPrivacy();
    //всплывающая подсказка
    help();
    //Аккордион в FAQ
    accordion();
    //Функция закрытия всех popup-окон
    popupClose();
    //Открытие окна Консультации
    openConsultPopup();
});
