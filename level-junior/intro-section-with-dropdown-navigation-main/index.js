const navbarToggleBtn = document.getElementById('nabvar-toggle');
const navLinkFeatures = document.getElementById('nav-link-features');
const navLinkCompany = document.getElementById('nav-link-company');

function showDropdown(target) {
    let targetElement = document.querySelector(`${target} + ul`);
    targetElement.classList.toggle('show');
};

navbarToggleBtn.addEventListener('click', function(e) {
    showDropdown('#nabvar-toggle');
    const icon = this.querySelector('img');

    if(icon.alt === 'icon for hamburger menu') {
        icon.src = './images/icon-close-menu.svg';
        icon.alt = 'icon for close menu';
    } else {
        icon.src = './images/icon-menu.svg';
        icon.alt = 'icon for hamburger menu'
    }
});

navLinkFeatures.addEventListener('click', function(e) {
    showDropdown('#nav-link-features');
});

navLinkCompany.addEventListener('click', function(e) {
    showDropdown('#nav-link-company');
});
