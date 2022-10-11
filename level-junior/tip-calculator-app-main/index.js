function isEmpty(input) {
    return input.value === "" ? false : true;
}

function isNumber(input) {
    return !isNaN(input.value) ? false : true;
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