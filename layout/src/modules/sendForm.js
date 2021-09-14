import makeRequest from "./makeRequest";

const sendForm = () => {
    const forms = document.querySelectorAll("form"),
        popupForm = document.querySelector('.popup-consultation'),
        popupThank = document.querySelector('.popup-thank');
    forms.forEach(form => {
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
                    popupForm.style.visibility = "hidden";
                    popupThank.style.visibility = "inherit";
                    form.reset();
                    checkboxLabel.style.borderColor = 'black';
                })
                .catch((err) => console.error(err));
        });
    });

};

export default sendForm;