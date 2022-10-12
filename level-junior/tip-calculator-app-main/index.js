const form = document.getElementById('form-tip');
const inputBill = document.getElementById('input-bill');
const inputCustom = document.getElementById('input-custom');
const inputNumOfPpl = document.getElementById('input-num-of-people');

function isEmpty(input) {
    return input.value === "" ? true : false;
}

function isNumber(input) {
    return isNaN(input.value) ? true : false;
}

function isNumPositive(input) {
    return input.value <= 0 ? false : true;
}

function showSuccess( element ) {
    const parent = element.parentElement;
    const msgEl = parent.querySelector(`span`);

    parent.classList.remove('error');
    parent.classList.add('success');

   msgEl.innerText = '';
}

function showError( element, msg ) {
    const parent = element.parentElement;
    const msgEl = parent.querySelector(`span`);

    parent.classList.remove('success');
    parent.classList.add('error');

    msgEl.innerText = msg;
}

function checkFiled(input) {

    if( isEmpty(input) ) {
        showError( input, "Filed can't be empty" )
    } else if( isNumber(input) ) {
        showError( input, "Please eneter a number" )
    } else if (!isNumPositive(input)) {
        showError( input, "Please eneter a number larger than 0" )
    } else {
        showSuccess(input)
    }
 
}

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'input-bill':
            checkFiled(inputBill);
            break;
        case 'input-custom':
            checkFiled(inputCustom);
            break;
        case 'input-num-of-people':
            checkFiled(inputNumOfPpl);
            break;
        }
    });