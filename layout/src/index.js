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
import repairTabs from './modules/repairTabs';
import sendForm from './modules/sendForm';
import addSliders from './modules/slilders';
import repairTypes from './modules/repairTypes';
document.addEventListener('DOMContentLoaded', async () => {
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
    //Подгрузка данных и установка табов в repair-tabs
    await repairTabs(); 
    //Отправка форм
    sendForm();
    //Добавляем слайдеры
    addSliders();
    //переключатель табов "виды ремонтных работы"
    repairTypes();
});
