class TipCalculator {
    constructor() {
       this.form = document.getElementById('form-tip');
       this.inputBill = document.getElementById('input-bill');
       this.inputCustom = document.getElementById('input-custom');
       this.inputNumOfPpl = document.getElementById('input-num-of-people');
       this.tipAmount = document.getElementById('tip-amount');
       this.tipTotal = document.getElementById('tip-total');
       this.btnsPrecent = document.getElementsByClassName('form-btn');
       this.btnReset = document.getElementById('btn-reset');

       this.events();
    }

    isEmpty(input) {
        return input.value === "" ? true : false;
    }
    
    isNumber(input) {
        return isNaN(input.value) ? true : false;
    }
    
    isNumPositive(input) {
        return input.value <= 0 ? false : true;
    }
    
    showSuccess( element ) {
        const parent = element.parentElement;
        const msgEl = parent.querySelector(`span`);
    
        parent.classList.remove('error');
        parent.classList.add('success');
    
       msgEl.innerText = '';
    }
    
    showError( element, msg ) {
        const parent = element.parentElement;
        const msgEl = parent.querySelector(`span`);
    
        parent.classList.remove('success');
        parent.classList.add('error');
    
        msgEl.innerText = msg;
    }
    
    checkFiled(input) {
    
        if( this.isEmpty(input) ) {
            this.showError( input, "Filed can't be empty" )
        } else if( this.isNumber(input) ) {
            this.showError( input, "Please eneter a number" )
        } else if (!this.isNumPositive(input)) {
            this.showError( input, "Please eneter a number larger than 0" )
        } else {
            this.showSuccess(input)
        }
    }
    
    clearActive(arr) {
        arr.forEach(item => {
            item.classList.remove('active')
        })
    }
    
    calcTip(bill, precent, people) {
        const billAmount = Number(bill.value);
        const precentVal = Number(precent / 100);
        const numOfPpl = Number(people.value);
    
        const tip = billAmount * precentVal / numOfPpl;
        const total = (billAmount * precentVal + billAmount) / numOfPpl;
    
        this.tipAmount.innerText =`$${tip.toFixed(2)}` ;
        this.tipTotal.innerText = `$${total.toFixed(2)}`;
    }
    
    reset() {
        this.clearActive([...this.btnsPrecent]);
        this.inputBill.value = '';
        this.inputNumOfPpl.value = '';
        this.tipAmount.innerText = "0.00";
        this.tipTotal.innerText = "0.00"
    }

    events() {
        this.form.addEventListener('input', (e) => {
            switch (e.target.id) {
                case 'input-bill':
                    this.checkFiled(this.inputBill);
                    break;
                case 'input-custom':
                    this.clearActive([...this.btnsPrecent]);
                    if(!this.inputBill.value) {
                        this.showError(this.inputBill, '');
                    } else if(!this.inputNumOfPpl.value) {
                        this.showError(this.inputNumOfPpl, "")
                    } else {
                        this.checkFiled(this.inputCustom);
                        this.calcTip(this.inputBill, this.inputCustom.value, this.inputNumOfPpl)
                    } 
                    break;
                case 'input-num-of-people':
                    this.checkFiled(this.inputNumOfPpl);
                    break;
                }
            });
        
        [...this.btnsPrecent].forEach( btn => {
            
            btn.addEventListener('click', () => {
                this.clearActive([...this.btnsPrecent]);
                let precentBtnAmount = btn.dataset.precent;
                if(!this.inputBill.value) {
                    this.showError(this.inputBill, '');
                } else if(!this.inputNumOfPpl.value) {
                    this.showError(this.inputNumOfPpl, "")
                } else {
                    btn.classList.add('active')
                    this.calcTip(this.inputBill, precentBtnAmount, this.inputNumOfPpl)
                }    
            })
        })
        
        this.btnReset.addEventListener('click', () => {
            this.reset()
        })
    }
}

let tipCalc = new TipCalculator();