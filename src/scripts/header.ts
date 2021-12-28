/* Nav links clicked */
const navLinks = document.querySelectorAll(
    '.nav-links',
)! as NodeListOf<HTMLAnchorElement>;

navLinks.forEach((navLink, index) => {
    let _indexActived = 0;
    navLink.addEventListener('click', () => {
        if (index != _indexActived) {
            _indexActived = index;
        }
        toggleClassByIndex(navLinks, 'active', _indexActived);
    });
});

function toggleClassByIndex(
    collection: NodeListOf<HTMLElement>,
    className: string,
    index: number,
) {
    collection.forEach((item, indexCollection) => {
        const parent = item.parentNode as HTMLElement;
        if (index != indexCollection) {
            parent.classList.remove(className);
        } else {
            parent.classList.add(className);
        }
    });
}

/* Button  toggler collapse menu */
const navbarToggler = document.querySelector(
    '.navbar-toggler',
)! as HTMLButtonElement;
const navbarMobile = document.querySelector(
    '.navbar.mobile',
)! as HTMLDivElement;

navbarToggler.addEventListener('click', () => {
    navbarToggler.classList.toggle('active');
    navbarMobile.classList.toggle('collapsed');
});
