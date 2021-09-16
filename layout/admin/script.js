document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const form = document.querySelector('form'),
        login = document.getElementById('name'),
        pass = document.getElementById('type');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let flag = true;
        if(login.value !== "Логин"){
            form.querySelector('.name-warning').style.display = "block";
            flag = false;
        } else{
            form.querySelector('.name-warning').style.display = "none";
        }
        if(pass.value !== "Пароль"){
            form.querySelector('.pass-warning').style.display = "block";
            flag = false;
        } else{
            form.querySelector('.pass-warning').style.display = "none";
        }
        if(flag){
            let date = new Date(Date.now() + 86400e3);
            date = date.toUTCString();
            document.cookie = `${encodeURIComponent("userStatus")}=${encodeURIComponent("Залогинен")}; expires=${date}`;
            window.location.href = 'table.html';
        } else{
            login.value = '';
            pass.value = '';
        }
    })
});