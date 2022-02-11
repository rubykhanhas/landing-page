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
        toggleParentClassByIndex(navLinks, 'active', _indexActived);
    });
});

function toggleParentClassByIndex(
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

/* Handle page scroll */
const header = document.querySelector('header')!;

let prevScrollPos = window.pageYOffset;
window.addEventListener('scroll', () => {
    const _currentScrollPos = window.pageYOffset;
    // when scrolldown & menu close
    if (
        prevScrollPos > _currentScrollPos ||
        navbarMobile.classList.contains('collapsed')
    )
        header.style.top = '0';
    else header.style.top = '-8rem';
    prevScrollPos = _currentScrollPos;
});

/* Detect section */
const MainSections = document.querySelectorAll(
    'section[id]',
)! as NodeListOf<HTMLDivElement>;
let currentSection = 'home';

window.addEventListener('scroll', () => {
    MainSections.forEach((Section) => {
        const offset = window.pageYOffset - Section.offsetTop;
        if (offset > 0 && offset < 100) currentSection = Section.id;
    });

    navLinks.forEach((navLink) => {
        //ex: href=#home
        if (navLink.hash == `#${currentSection}`) {
            navLink.parentElement?.classList.add('active');
        } else {
            navLink.parentElement?.classList.remove('active');
        }
    });
});
