
const card = document.getElementById('card');
const cardBody= document.getElementById('card-body');
const cardFooter= document.getElementById('card-footer');

const svgStar = document.getElementById('svg-star');
const svgThankYou = document.getElementById('svg-thank-you');

const options = document.getElementsByClassName('option');
const submit = document.getElementById('submit');

for(let option of options) {
    option.addEventListener('click', () => {
        localStorage.setItem('chosenValue', option.innerText);
        for(let option of options) {
          option.classList.remove('active-select')
        }
        option.classList.add('active-select')
    })
}

submit.addEventListener('click', () => {
    const reviewGrade = localStorage.getItem('chosenValue');
    svgStar.classList.remove('show');
    svgStar.classList.add('no-show');

    svgThankYou.classList.add('show');
    svgThankYou.classList.remove('no-show');

    const cardBodyContent = `
      <p class="text result">You selected ${reviewGrade} out of 5</p>`
    const cardFooterContent = `
      <h2 class="text-center">
        Thank you!
      </h2>
      <p class="text-center text">
        We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!
      </p>
    `

    cardBody.innerHTML = cardBodyContent;
    cardFooter.innerHTML = cardFooterContent;

})


