const catdDigits = document.getElementById('card-digits');
const cardNumFormField = document.getElementById('card-num');

function isEmpty(input) {
    return input === "" ? false : true;
}

function showErorr(input, msg) {
    
}

cardNumFormField.addEventListener('input', (e) => {    
    let target = e.target

    target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    catdDigits.innerText = target.value;

});