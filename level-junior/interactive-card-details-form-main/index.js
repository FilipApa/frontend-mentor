//card
const cardDigits = document.getElementById('card-digits');
const cardName = document.getElementById('card-name');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvc = document.getElementById('card-cvc');

//form
const form = document.getElementById('form');
const formWrapper = document.getElementById('form-wrapper');
const formName = document.getElementById('form-name');
const formNum = document.getElementById('form-num');
const formMonth = document.getElementById('form-month');
const formYear = document.getElementById('form-year');
const formCvc = document.getElementById('form-cvc');


function isRequired(input) {
    return input.value === "" ? false : true;
}

function showError(msg, displayElem) {
    const parentElement = displayElem.parentElement;
    parentElement.classList.add('error');

    const error = parentElement.querySelector('small');
    error.innerText = msg;
}

function showSucceess() {
    formWrapper.replaceChildren();

    const formIcon = document.createElement('img');
    formIcon.src = './images/icon-complete.svg';

    const formHeading = document.createElement('h2');
    formHeading.classList.add('form-heading');
    formHeading.innerText = 'Thank you!'

    const formMsg = document.createElement('p');
    formMsg.classList.add('form-msg');
    formMsg.innerText = 'We\'ve added your card details';

    formWrapper.insertAdjacentElement('beforeend', formIcon );
    formWrapper.insertAdjacentElement('beforeend', formHeading );
    formWrapper.insertAdjacentElement('beforeend', formMsg );

}

function formatCardEleme(event, displayElem) {
    const target = event.target;
    let targetValue = target.value;

    if(displayElem === cardDigits) {
        targetValue = targetValue.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        displayElem.innerText = targetValue;
    } else {
        displayElem.innerText = targetValue;
    }
}

function checkName() {
    let valid;
    const isEmpty = isRequired(formName);

    if(!isEmpty) {
        showError('Can\'t be blank');
        valid = false;
    } 

    valid = true;
    return valid;

}

function checkNum() {
    let valid;
    const isEmpty = isRequired(formNum);

    if(!isEmpty) {
        showError('Can\'t be blank');
        valid = false;
    } 

    valid = true;
    return valid;

}

function checkMonth() {
    let valid;
    const isEmpty = isRequired(formMonth);

    if(!isEmpty) {
        showError('Can\'t be blank');
        valid = false;
    } 

    valid = true;
    return valid;

}

function checkYear() {
    let valid;
    const isEmpty = isRequired(formYear);

    if(!isEmpty) {
        showError('Can\'t be blank');
        valid = false;
    } 

    valid = true;
    return valid;

}

function checkCvc() {
    let valid;
    const isEmpty = isRequired(formCvc);

    if(!isEmpty) {
        showError('Can\'t be blank');
        valid = false;
    } 

    valid = true;
    return valid;
}

form.addEventListener('input', e => {
    switch(e.target.id) {
        case 'form-name':
            formatCardEleme(e, formName);
            break;
        case 'form-num':
            formatCardEleme(e, formNum);
            break;    
        case 'form-month':
            formatCardEleme(e, formMonth);
            break;       
        case 'form-year':
            formatCardEleme(e, formYear);
            break;     
        case 'form-cvc':
            formatCardEleme(e, formCvc);
            break;      
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isCardNameValid = checkName();
    let isCardNumValid = checkNum();
    let isCardMonthValid = checkMonth();
    let isCardYearValid =  checkYear();
    let isCardCvcValid = checkCvc();

    if(isCardNameValid && isCardNumValid && isCardMonthValid && isCardYearValid && isCardCvcValid) {
        showSucceess();
    }

})