const form = document.getElementById('form-tip');
const inputBill = document.getElementById('input-bill');
const inputCustom = document.getElementById('input-custom');
const inputNumOfPpl = document.getElementById('input-num-of-people');
const tipAmount = document.getElementById('tip-amount');
const tipTotal = document.getElementById('tip-total');
const btnsPrecent = document.getElementsByClassName('form-btn');
const btnReset = document.getElementById('btn-reset');

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

function clearActive(arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
}

function calcTip(bill, precent, people) {
    const billAmount = Number(bill.value);
    const precentVal = Number(precent / 100);
    const numOfPpl = Number(people.value);

    const tip = billAmount * precentVal / numOfPpl;
    const total = (billAmount * precentVal + billAmount) / numOfPpl;

    tipAmount.innerText =`$${tip.toFixed(2)}` ;
    tipTotal.innerText = `$${total.toFixed(2)}`;
}

function reset() {
    clearActive([...btnsPrecent]);
    inputBill.value = 0;
    inputNumOfPpl.value = 0;
    tipAmount.innerText = "0.00";
    tipTotal.innerText = "0.00"
}

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'input-bill':
            checkFiled(inputBill);
            break;
        case 'input-custom':
            clearActive([...btnsPrecent]);
            if(!inputBill.value) {
                showError(inputBill, '');
            } else if(!inputNumOfPpl.value) {
                showError(inputNumOfPpl, "")
            } else {
                checkFiled(inputCustom);
                calcTip(inputBill, inputCustom.value, inputNumOfPpl)
            } 
            break;
        case 'input-num-of-people':
            checkFiled(inputNumOfPpl);
            break;
        }
    });

[...btnsPrecent].forEach( btn => {
    
    btn.addEventListener('click', function() {
        clearActive([...btnsPrecent]);
        let precentBtnAmount = btn.dataset.precent;
        if(!inputBill.value) {
            showError(inputBill, '');
        } else if(!inputNumOfPpl.value) {
            showError(inputNumOfPpl, "")
        } else {
            this.classList.add('active')
            calcTip(inputBill, precentBtnAmount, inputNumOfPpl)
        }    
    })
})

btnReset.addEventListener('click', () => {
    reset();
})