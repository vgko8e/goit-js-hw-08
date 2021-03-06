import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');
const formData  = {email: '', message: ''};

formInput.addEventListener('submit', onFormSubmit);
formInput.addEventListener('input', throttle(onTextInput, 500));

onTextOut();

function onFormSubmit(evt) {
    evt.preventDefault();
    if(formInput.email.value === '' || formInput.message.value === '') {
        return alert ('Please fill in all the fields');
    }
    console.log (JSON.parse(localStorage.getItem('feedback-form-state')));

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
};

function onTextInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

function onTextOut() {
    const savedText = JSON.parse(localStorage.getItem('feedback-form-state'))
    if(savedText) {
        formInput.email.value = savedText.email;
        formInput.message.value = savedText.message;
        formData.email = savedText.email;
        formData.message = savedText.message;
    }
};


