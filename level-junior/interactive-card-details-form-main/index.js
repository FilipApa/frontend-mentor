const catdDigits = document.getElementById('card-digits');
const cardNumFormField = document.getElementById('card-num');
cardNumFormField.addEventListener('input', (e) => {
    
    let target = e.target, 
    position = target.selectionEnd, 
    length = target.value.length;
 
    target.value = target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    target.selectionEnd = position += ((target.value.charAt(position - 1) === ' ' && length !== target.value.length) ? 1 : 0);
    catdDigits.innerText = target.value;
});