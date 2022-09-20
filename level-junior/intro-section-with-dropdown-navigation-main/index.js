const navbarToggleBtn = document.getElementById('nabvar-toggle');
const navLinkFeatures = document.getElementById('nav-link-features');
const navLinkCompany = document.getElementById('nav-link-company');

function showDropdown(target) {
    let targetElement = document.querySelector(`${target} + ul`);
    targetElement.classList.toggle('show');
};

navLinkFeatures.addEventListener('click', function(e) {
    showDropdown('#nav-link-features');
});

navLinkCompany.addEventListener('click', function(e) {
    showDropdown('#nav-link-company');
});

navbarToggleBtn.addEventListener('click', function(e) {
    showDropdown('#nabvar-toggle');
});