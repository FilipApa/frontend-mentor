const email = document.getElementById('email');
const submit = document.getElementById('submit');


function isEmailValid(input) {
    const mailFormat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return input.value.match(mailFormat)
}

function showErrorMessage(input, message) {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess(input) {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = "";
}

function checkEmail() {
    let valid = false

     if(!isEmailValid(email)){
        showErrorMessage(email, "Looks like this is not an email")
        valid = false;
    } else {
        showSuccess(email)
        valid = true
    }
    return valid;
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    checkEmail();
})