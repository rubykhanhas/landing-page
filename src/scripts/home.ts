/* Handle form submit */
const newsLetterForm = document.querySelector(
    '.newsletter-form',
)! as HTMLFormElement;
const successBox = document.querySelector(
    '.success-box',
)! as HTMLParagraphElement;

newsLetterForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    const data = new FormData(newsLetterForm);
    console.log({ email: data.get('email') });
    successBox.classList.toggle('show');
});
