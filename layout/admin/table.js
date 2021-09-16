
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    if(getCookie("userStatus") !== "Залогинен"){
        window.location.href = 'index.html';
        return;
    }
});