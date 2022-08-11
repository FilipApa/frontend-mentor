const submitBtn = document.getElementById('submit-btn');




submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = emailField.value;
    const mailFormat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailValue === ''){
        errorMsg.innerHTML = 'Field cannot be empty';
        errorIcon.classList.add('active');
        emailField.classList.add('border-active');
    }

    if(emailField.value.match(mailFormat)) {
        errorMsg.innerHTML = '';
        errorIcon.classList.remove('active');
        emailField.classList.remove('border-active');

    } else {
        errorMsg.innerHTML = 'Please provide a valid email';
        errorIcon.classList.add('active');
        emailField.classList.add('border-active');
    }
})