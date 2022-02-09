const Accordions = document.querySelectorAll(
    '.accordion-item',
)! as NodeListOf<HTMLDivElement>;

Accordions.forEach((Accordion, AccorIndex) => {
    const _Button = Accordion.querySelector('.clickable');
    const _Collapse = Accordion.querySelector('.collapse') as HTMLDivElement;

    _Button?.addEventListener('click', () => {
        let _isClicked = false;
        _Button.classList.toggle('clicked');
        _isClicked = _Button.classList.contains('clicked');
        if (_isClicked) {
            MyAnimation(_Collapse, 'ON', 'collapsed', 0.3);
        } else {
            MyAnimation(_Collapse, 'OFF', 'collapsed', 1.5);
        }
        // Toggle other accordion
        Accordions.forEach((_Accord, currentIndex) => {
            const __Button = _Accord.querySelector('.clickable');
            const __Collapse = _Accord.querySelector(
                '.collapse',
            ) as HTMLDivElement;

            if (currentIndex != AccorIndex) {
                __Button?.classList.remove('clicked');
                MyAnimation(__Collapse, 'OFF', 'collapsed', 1.5);
            }
        });
    });
});

// display then add anmation after delay
function MyAnimation(
    Element: Element,
    type: 'ON' | 'OFF',
    className: string,
    delaySecond: number,
) {
    if (type == 'ON') {
        Element.classList.add('display');
        setTimeout(() => {
            Element.classList.add(className);
        }, delaySecond * 1000);
    } else {
        Element.classList.remove(className);
        setTimeout(() => {
            Element.classList.remove('display');
        }, delaySecond * 1000);
    }
}
