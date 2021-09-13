import phoneDropdown from './modules/phoneDropdown';
import burger from './modules/burger';
import smoothScroll from './modules/smoothScroll';

document.addEventListener('DOMContentLoaded', () => {
    //выпадающее меню телефона
    phoneDropdown();
    //Бургер-меню
    burger();
    //плавный скролл
    smoothScroll();

});
