function isEmpty(input) {
    return input === "" ? false : true;
}

function showSuccess( element, msg) {
    const parent = element.parentElement;
    const elementId = element.id;
    const msgEl = document.querySelector(`${elementId} + span`);

   msgEl.innerText = msg;
   parent.classList.add('success');
}

function showError( element, msg) {
    const parent = element.parentElement;
    const msgEl = parent.querySelector(`span`);

    parent.classList.remove('success');
    parent.classList.add('error');

   msgEl.innerText = msg;
}