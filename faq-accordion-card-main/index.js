const faqBlock = document.getElementsByClassName('faq-block');
let toggleState;

for (const block of faqBlock) {
    block.addEventListener('click', () => {
        const faqQ =  block.querySelector('.faq-question');
        const faqA =  block.querySelector('.faq-answer');
        

            faqQ.classList.toggle('bold-text');
            faqA.classList.toggle('reveal');
     
    });
}