const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form-free-trail');

function isRequired(input) {
    return input.value === "" ? false : true;
}

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

function checkFirstName() {
    let valid = false

    if(isRequired(firstName)) {
        showSuccess(firstName)
        valid = true

    }else {
        showErrorMessage(firstName, "First Name cannot be empty")
    }

    return valid;
}

function checkLastName() {
    let valid = false

    if(isRequired(lastName)) {
        showSuccess(lastName)
        valid = true;

    }else {
        showErrorMessage(lastName, "Last Name cannot be empty")
    }

    return valid;
}

function checkPassword() {
    let valid = false;

    if(isRequired(password)) {
        showSuccess(password)
        valid = true;
    }else {
        showErrorMessage(password, "Password cannot be empty")
    }

    return valid;
}

function checkEmail() {
    let valid = false

    if(!isRequired(email)) {
        showErrorMessage(email, "Email cannot be empty")
        valid = false

    } else if(!isEmailValid(email)){
        showErrorMessage(email, "Looks like this is not an email")
        valid = false;
    } else {
        showSuccess(email)
        valid = true
    }
    return valid;
}


document.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // validate fields
    let isfirstNameValid = checkFirstName(),
        islastNameValid = checkLastName(),
        isPasswordValid = checkPassword(),
        isEmailValid = checkEmail();

    let isFormValid = isfirstNameValid &&
        islastNameValid &&
        isPasswordValid &&
        isEmailValid ;
})

//Add Instant feedback feature


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'first-name':
            checkFirstName();
            break;
        case 'last-name':
            checkLastName();
            break;
        case 'password':
            checkPassword();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));