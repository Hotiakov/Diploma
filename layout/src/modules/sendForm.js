import makeRequest from "./makeRequest";

const addNameValidation = input => {
    input.addEventListener('blur', () => {
        input.value = input.value.replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/^\s/g, '')
            .replace(/^-+/g, '');
        input.value = input.value.replace(/((?<=-| )[а-яё]+|[а-яё]+)/gi, mathes => mathes[0].toUpperCase() + mathes.slice(1).toLowerCase());
    });
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^а-яё\- ]/gi, '');
    });
}


const sendForm = () => {
    const forms = document.querySelectorAll("form"),
        popupForm = document.querySelector('.popup-consultation'),
        popupThank = document.querySelector('.popup-thank');
    forms.forEach(form => {
        const nameInput = form.querySelector("[name='name']");
        if(nameInput)
            addNameValidation(nameInput);
        form.addEventListener('submit', e => {
            e.preventDefault();
            const checkbox = form.querySelector('.checkbox__input');
            const checkboxLabel = form.querySelector('.checkbox__label');
            if(!checkbox.checked){
                let counter = 0;
                let animateId = setInterval(() => {
                    if(!(counter % 2))
                        checkboxLabel.style.borderColor = 'red';
                    else 
                        checkboxLabel.style.borderColor = 'black';
                    if(counter++ === 8){
                        clearInterval(animateId);
                    }
                }, 200);
                return;
            }
            checkboxLabel.style.borderColor = 'green';
            const formData = new FormData(form);
            const data = {};
                formData.forEach((value, key) => data[key] = value);
            makeRequest("POST", './server.php', data)
                .then(() => {
                    document.body.classList.remove('loaded');
                    popupForm.style.visibility = "hidden";
                    popupThank.style.visibility = "inherit";
                    form.reset();
                    setTimeout(() => {
                        popupThank.style.visibility = "hidden";
                    }, 4000);
                    checkboxLabel.style.borderColor = 'black';
                })
                .catch((err) => {console.error(err); document.body.classList.remove('loaded');});
        });
    });

};

export default sendForm;