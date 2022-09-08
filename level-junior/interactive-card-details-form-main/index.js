const catdDigits = document.getElementById('card-digits');
const cardNumFormField = document.getElementById('card-num');

cardNumFormField.addEventListener('input', (e) => {    
    let target = e.target

    target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    catdDigits.innerText = target.value;

});