class MobileNav {
    constructor(btnSelect, navSelect, cssClass) {
        this.btn = btnSelect;
        this.nav = navSelect;
        this.classToggle = cssClass;
        this.events();
    }

    openNav() {
        this.nav.classList.toggle(this.classToggle)
    }

    events() {
        this.btn.addEventListener('click', this.openNav)
    }
}

export default MobileNav;