//card
const catdDigits = document.getElementById('card-digits');
const cardName = document.getElementById('card-name');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvc = document.getElementById('card-cvc');

//form
const formWrapper = document.getElementById('form-wrapper');
const formName = document.getElementById('form-name');
const formNum = document.getElementById('form-num');
const formMonth = document.getElementById('form-month');
const formYear = document.getElementById('form-year');
const formCvc = document.getElementById('form-cvc');





const cardNumFormField = document.getElementById('card-num');

function isEmpty(input) {
    return input === "" ? false : true;
}

function showError(msg, displayElem) {
    const parentElement = displayElem.parentElement;
}

function formatCardNum(event, displayElem) {
    const target = event.target;
    let targetValue = target.value;
    targetValue = targetValue.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    displayElem.innerText = targetValue;
}

