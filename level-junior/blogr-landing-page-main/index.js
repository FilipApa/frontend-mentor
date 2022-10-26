const navbarToggleBtn = document.getElementById('nabvar-toggle');
const navLinkProducts = document.getElementById('nav-link-products');
const navLinkCompany = document.getElementById('nav-link-company');
const navLinkConnect = document.getElementById('nav-link-connect');


function showDropdown(elem, target) {
    let targetElement = document.querySelector(`${elem} + ${target}`);
    targetElement.classList.toggle('show');
};

navbarToggleBtn.addEventListener('click', function(e) {
    showDropdown('#nabvar-toggle', 'nav');
    const icon = this.querySelector('img');

    if(icon.alt === 'icon for hamburger menu') {
        icon.src = './images/icon-close.svg';
        icon.alt = 'icon for close menu';
    } else {
        icon.src = './images/icon-hamburger.svg';
        icon.alt = 'icon for hamburger menu'
    }
});

navLinkProducts.addEventListener('click', function(e) {
    showDropdown('#nav-link-products', 'ul');
});

navLinkCompany.addEventListener('click', function(e) {
    showDropdown('#nav-link-company', 'ul');
});

navLinkConnect.addEventListener('click', function(e) {
    showDropdown('#nav-link-connect', 'ul');
});