const faqBlock = document.getElementsByClassName('faq-block');
const faqTop = document.getElementById('faq-top');
const faqMobileBackground = document.getElementById('faq-mobile-background');
const faqDesktopBackground = document.getElementById('faq-desktop-background');

for (const block of faqBlock) {
    block.addEventListener('click', () => {
        const faqQ =  block.querySelector('.faq-question');
        const faqA =  block.querySelector('.faq-answer');
        
            faqQ.classList.toggle('bold-text');
            faqA.classList.toggle('reveal');
     
    });
}

if(window.innerWidth > 500) {
    faqMobileBackground.classList.remove('display-block');
    faqDesktopBackground.classList.add('display-block');
} else {
    faqMobileBackground.classList.add('display-block');
    faqDesktopBackground.classList.remove('display-block');
}

window.addEventListener('resize', function() {
    if(window.innerWidth > 500) {
        faqMobileBackground.classList.remove('display-block');
        faqDesktopBackground.classList.add('display-block');
    } else {
        faqMobileBackground.classList.add('display-block');
        faqDesktopBackground.classList.remove('display-block');
    }
}, true);

