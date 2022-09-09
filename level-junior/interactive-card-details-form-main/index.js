const cardName = document.getElementById('card-name');
const catdDigits = document.getElementById('card-digits');
const cardNumFormField = document.getElementById('card-num');

function isEmpty(input) {
    return input === "" ? false : true;
}

function formatCardNum(event, displayElem) {
    let target = event.target
    let targetValue = target.value
    targetValue = targetValue.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    displayElem.innerText = targetValue;
}

