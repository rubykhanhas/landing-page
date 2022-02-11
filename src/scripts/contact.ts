const MessageForm = document.querySelector('.message-box')! as HTMLFormElement;
const MessageFormChild = MessageForm.elements;
const SuccessAlert = document.querySelector(
    '.contact .success',
)! as HTMLParamElement;

MessageForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let result = {};
    for (let i = 0; i < MessageFormChild.length; i++) {
        const item = MessageFormChild.item(i);
        //@ts-ignore
        if (item.name) {
            //@ts-ignore
            result[item.name] = item.value;
        }
    }
    console.table(result);
    SuccessAlert.classList.toggle('show');
});
